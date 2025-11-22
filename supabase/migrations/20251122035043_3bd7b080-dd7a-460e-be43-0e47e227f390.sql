-- Add INSERT policy for ncert_solutions table to allow service role insertions
-- This fixes the RLS policy violation error during NCERT solutions insertion

CREATE POLICY "Allow service role to insert NCERT solutions"
ON public.ncert_solutions
FOR INSERT
TO service_role
WITH CHECK (true);

-- Also add a policy for authenticated users to insert (for admin operations)
CREATE POLICY "Allow authenticated users to insert NCERT solutions"
ON public.ncert_solutions
FOR INSERT
TO authenticated
WITH CHECK (true);