-- Add columns for PDF URLs and metadata
ALTER TABLE previous_year_papers
ADD COLUMN IF NOT EXISTS pdf_url text,
ADD COLUMN IF NOT EXISTS marking_scheme_url text,
ADD COLUMN IF NOT EXISTS source text DEFAULT 'CBSE Official',
ADD COLUMN IF NOT EXISTS is_sample_paper boolean DEFAULT true;

-- Remove the 5 fake papers that were added earlier
DELETE FROM previous_year_papers 
WHERE paper_data IS NOT NULL 
AND (paper_data->>'sections') IS NOT NULL;