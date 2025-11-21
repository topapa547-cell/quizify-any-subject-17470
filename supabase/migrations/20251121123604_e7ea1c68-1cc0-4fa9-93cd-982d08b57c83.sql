-- Add question_type column to ncert_solutions table for distinguishing in-text and exercise questions
ALTER TABLE public.ncert_solutions 
ADD COLUMN question_type TEXT DEFAULT 'exercise' CHECK (question_type IN ('in-text', 'exercise'));

-- Add comment for documentation
COMMENT ON COLUMN public.ncert_solutions.question_type IS 'Type of question: in-text (questions within chapter content) or exercise (end-of-chapter questions)';

-- Update existing records to have exercise type (already set by DEFAULT)
-- Create index for faster filtering by question_type
CREATE INDEX idx_ncert_solutions_question_type ON public.ncert_solutions(question_type);

-- Create index for combined filtering (class, subject, chapter, question_type)
CREATE INDEX idx_ncert_solutions_filters ON public.ncert_solutions(class_level, subject, chapter_number, question_type);