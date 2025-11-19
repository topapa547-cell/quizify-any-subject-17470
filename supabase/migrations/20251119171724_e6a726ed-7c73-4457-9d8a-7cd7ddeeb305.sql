-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_type TEXT NOT NULL CHECK (plan_type IN ('basic', 'standard', 'premium', 'free_trial')),
  plan_name TEXT NOT NULL,
  amount_paid INTEGER NOT NULL DEFAULT 0,
  original_amount INTEGER NOT NULL DEFAULT 0,
  discount_applied INTEGER DEFAULT 0,
  coupon_code TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled')),
  start_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  end_date TIMESTAMP WITH TIME ZONE,
  features JSONB DEFAULT '{"mcq_unlimited": true, "long_questions": true, "ncert_solutions": true, "previous_year_papers": true, "daily_challenge": true, "leaderboard": true, "ai_assistant": true, "motivational_quotes": true}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id)
);

-- Create coupon_codes table
CREATE TABLE IF NOT EXISTS public.coupon_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  discount_percent INTEGER CHECK (discount_percent >= 0 AND discount_percent <= 100),
  max_uses INTEGER DEFAULT NULL,
  current_uses INTEGER DEFAULT 0,
  plan_type TEXT NOT NULL DEFAULT 'premium' CHECK (plan_type IN ('basic', 'standard', 'premium')),
  duration_months INTEGER NOT NULL DEFAULT 6,
  valid_from TIMESTAMP WITH TIME ZONE DEFAULT now(),
  valid_until TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'expired')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create coupon_usage table
CREATE TABLE IF NOT EXISTS public.coupon_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  coupon_code TEXT NOT NULL,
  subscription_id UUID REFERENCES public.subscriptions(id),
  used_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, coupon_code)
);

-- Enable RLS
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupon_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupon_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for subscriptions
CREATE POLICY "Users can view own subscription"
  ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscription"
  ON public.subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON public.subscriptions FOR UPDATE
  USING (auth.uid() = user_id);

-- RLS Policies for coupon_codes
CREATE POLICY "Anyone can view active coupons"
  ON public.coupon_codes FOR SELECT
  USING (status = 'active' AND (valid_until IS NULL OR valid_until > now()));

-- RLS Policies for coupon_usage
CREATE POLICY "Users can view own coupon usage"
  ON public.coupon_usage FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own coupon usage"
  ON public.coupon_usage FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Insert 10 unlimited-use coupon codes
INSERT INTO public.coupon_codes (code, discount_percent, max_uses, plan_type, duration_months, description, valid_until) VALUES
  ('WELCOME2025', 100, NULL, 'premium', 6, 'नए यूजर्स के लिए 6 महीने Premium मुफ्त', '2025-12-31'),
  ('STUDENT100', 100, NULL, 'premium', 6, 'छात्रों के लिए Premium सदस्यता - पूरी तरह मुफ्त', '2025-12-31'),
  ('BOARD2025', 100, NULL, 'premium', 6, 'Board Exam 2025 स्पेशल - Premium मुफ्त', '2025-12-31'),
  ('DIWALI2024', 100, NULL, 'premium', 6, 'दिवाली धमाका - Premium सदस्यता मुफ्त', '2025-12-31'),
  ('NEWYEAR2025', 100, NULL, 'premium', 6, 'नए साल का तोहफा - Premium मुफ्त', '2025-12-31'),
  ('STUDY2025', 100, NULL, 'premium', 6, 'अध्ययन विशेष - Premium सदस्यता मुफ्त', '2025-12-31'),
  ('QUIZ100', 100, NULL, 'premium', 6, 'Quiz प्रेमियों के लिए Premium मुफ्त', '2025-12-31'),
  ('CBSE2025', 100, NULL, 'premium', 6, 'CBSE छात्रों के लिए Premium मुफ्त', '2025-12-31'),
  ('EXAM2025', 100, NULL, 'premium', 6, 'परीक्षा तैयारी - Premium सदस्यता मुफ्त', '2025-12-31'),
  ('PREMIUM2025', 100, NULL, 'premium', 6, 'सीमित समय के लिए Premium मुफ्त', '2025-12-31');

-- Function to validate and apply coupon
CREATE OR REPLACE FUNCTION public.validate_and_apply_coupon(
  p_user_id UUID,
  p_code TEXT
) RETURNS TABLE(
  success BOOLEAN,
  message TEXT,
  subscription_id UUID
) AS $$
DECLARE
  v_coupon RECORD;
  v_end_date TIMESTAMP WITH TIME ZONE;
  v_subscription_id UUID;
  v_existing_usage_count INTEGER;
BEGIN
  -- Check if user already used this coupon
  SELECT COUNT(*) INTO v_existing_usage_count
  FROM public.coupon_usage
  WHERE user_id = p_user_id AND coupon_code = UPPER(p_code);
  
  IF v_existing_usage_count > 0 THEN
    RETURN QUERY SELECT FALSE, 'आपने यह coupon code पहले ही उपयोग कर लिया है'::TEXT, NULL::UUID;
    RETURN;
  END IF;

  -- Check if user already has active subscription
  IF EXISTS (
    SELECT 1 FROM public.subscriptions 
    WHERE user_id = p_user_id AND status = 'active'
  ) THEN
    RETURN QUERY SELECT FALSE, 'आपके पास पहले से ही एक सक्रिय सदस्यता है'::TEXT, NULL::UUID;
    RETURN;
  END IF;

  -- Fetch coupon details
  SELECT * INTO v_coupon
  FROM public.coupon_codes
  WHERE code = UPPER(p_code)
    AND status = 'active'
    AND (valid_until IS NULL OR valid_until > now())
    AND (max_uses IS NULL OR current_uses < max_uses);

  IF NOT FOUND THEN
    RETURN QUERY SELECT FALSE, 'अमान्य या expired coupon code'::TEXT, NULL::UUID;
    RETURN;
  END IF;

  -- Calculate end date based on duration
  v_end_date := now() + (v_coupon.duration_months || ' months')::INTERVAL;

  -- Create subscription
  INSERT INTO public.subscriptions (
    user_id,
    plan_type,
    plan_name,
    amount_paid,
    original_amount,
    discount_applied,
    coupon_code,
    status,
    start_date,
    end_date
  ) VALUES (
    p_user_id,
    v_coupon.plan_type,
    CASE 
      WHEN v_coupon.plan_type = 'premium' THEN 'Premium Plan'
      WHEN v_coupon.plan_type = 'standard' THEN 'Standard Plan'
      ELSE 'Basic Plan'
    END,
    0,
    700,
    700,
    UPPER(p_code),
    'active',
    now(),
    v_end_date
  ) RETURNING id INTO v_subscription_id;

  -- Record coupon usage
  INSERT INTO public.coupon_usage (user_id, coupon_code, subscription_id)
  VALUES (p_user_id, UPPER(p_code), v_subscription_id);

  -- Update coupon usage count (only if max_uses is set)
  IF v_coupon.max_uses IS NOT NULL THEN
    UPDATE public.coupon_codes
    SET current_uses = current_uses + 1
    WHERE code = UPPER(p_code);
  END IF;

  RETURN QUERY SELECT TRUE, 'बधाई हो! Premium सदस्यता सक्रिय हो गई है'::TEXT, v_subscription_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;