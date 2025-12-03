-- Create exam_timetable table for CBSE exam schedules
CREATE TABLE public.exam_timetable (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_level INTEGER NOT NULL,
  subject TEXT NOT NULL,
  subject_hi TEXT NOT NULL,
  exam_date DATE NOT NULL,
  exam_time TEXT,
  exam_duration TEXT,
  year INTEGER NOT NULL,
  is_practical BOOLEAN DEFAULT false,
  notes TEXT,
  notes_hi TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create cbse_news table for CBSE announcements
CREATE TABLE public.cbse_news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_hi TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_hi TEXT,
  description_en TEXT,
  source_url TEXT,
  category TEXT DEFAULT 'general',
  is_important BOOLEAN DEFAULT false,
  publish_date DATE NOT NULL,
  expiry_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on both tables
ALTER TABLE public.exam_timetable ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cbse_news ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (anyone can view)
CREATE POLICY "Anyone can view exam timetable"
ON public.exam_timetable FOR SELECT
USING (true);

CREATE POLICY "Anyone can view CBSE news"
ON public.cbse_news FOR SELECT
USING ((expiry_date IS NULL OR expiry_date >= CURRENT_DATE));

-- Insert sample exam timetable data for 2025
INSERT INTO public.exam_timetable (class_level, subject, subject_hi, exam_date, exam_time, exam_duration, year, is_practical, notes, notes_hi) VALUES
(10, 'Hindi', 'हिंदी', '2025-02-15', '10:30 AM', '3 hours', 2025, false, 'Bring admit card', 'प्रवेश पत्र लाएं'),
(10, 'English', 'अंग्रेजी', '2025-02-18', '10:30 AM', '3 hours', 2025, false, 'Bring admit card', 'प्रवेश पत्र लाएं'),
(10, 'Mathematics', 'गणित', '2025-02-21', '10:30 AM', '3 hours', 2025, false, 'Calculator not allowed', 'कैलकुलेटर की अनुमति नहीं'),
(10, 'Science', 'विज्ञान', '2025-02-25', '10:30 AM', '3 hours', 2025, false, 'Practical marks included', 'प्रैक्टिकल अंक शामिल'),
(10, 'Social Science', 'सामाजिक विज्ञान', '2025-02-28', '10:30 AM', '3 hours', 2025, false, 'Map work included', 'मानचित्र कार्य शामिल'),
(10, 'IT/ITes', 'IT/ITes', '2025-03-03', '10:30 AM', '2 hours', 2025, false, 'Optional subject', 'वैकल्पिक विषय'),
(9, 'Hindi', 'हिंदी', '2025-02-17', '10:30 AM', '3 hours', 2025, false, 'School level exam', 'स्कूल स्तर की परीक्षा'),
(9, 'English', 'अंग्रेजी', '2025-02-20', '10:30 AM', '3 hours', 2025, false, 'School level exam', 'स्कूल स्तर की परीक्षा'),
(9, 'Mathematics', 'गणित', '2025-02-23', '10:30 AM', '3 hours', 2025, false, 'School level exam', 'स्कूल स्तर की परीक्षा'),
(9, 'Science', 'विज्ञान', '2025-02-26', '10:30 AM', '3 hours', 2025, false, 'School level exam', 'स्कूल स्तर की परीक्षा'),
(9, 'Social Science', 'सामाजिक विज्ञान', '2025-03-01', '10:30 AM', '3 hours', 2025, false, 'School level exam', 'स्कूल स्तर की परीक्षा');

-- Insert sample CBSE news
INSERT INTO public.cbse_news (title_hi, title_en, description_hi, description_en, source_url, category, is_important, publish_date, expiry_date) VALUES
('CBSE बोर्ड परीक्षा 2025 की तारीखें घोषित', 'CBSE Board Exam 2025 Dates Announced', 'CBSE ने कक्षा 10 और 12 के लिए बोर्ड परीक्षा 2025 की तारीखें घोषित कर दी हैं। परीक्षाएं 15 फरवरी से शुरू होंगी।', 'CBSE has announced the Board Exam 2025 dates for Class 10 and 12. Exams will begin from February 15.', 'https://cbse.gov.in', 'exam', true, '2024-12-01', '2025-03-31'),
('प्रवेश पत्र 1 फरवरी से डाउनलोड करें', 'Download Admit Card from February 1', 'कक्षा 10 और 12 के छात्र 1 फरवरी से अपना प्रवेश पत्र डाउनलोड कर सकते हैं।', 'Class 10 and 12 students can download their admit cards from February 1.', 'https://cbse.gov.in', 'exam', true, '2024-12-15', '2025-02-28'),
('CBSE सैंपल पेपर 2025 जारी', 'CBSE Sample Papers 2025 Released', 'CBSE ने सभी विषयों के लिए सैंपल पेपर जारी किए हैं। छात्रों को अभ्यास के लिए इन्हें हल करना चाहिए।', 'CBSE has released sample papers for all subjects. Students should solve these for practice.', 'https://cbseacademic.nic.in', 'syllabus', false, '2024-11-15', NULL),
('प्रैक्टिकल परीक्षा जनवरी में होगी', 'Practical Exams to be held in January', 'कक्षा 10 और 12 की प्रैक्टिकल परीक्षाएं जनवरी 2025 में आयोजित की जाएंगी।', 'Practical exams for Class 10 and 12 will be conducted in January 2025.', 'https://cbse.gov.in', 'exam', false, '2024-12-01', '2025-01-31');