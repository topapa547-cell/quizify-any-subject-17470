-- Make paper_data nullable since we're now using PDF URLs instead of JSON data
ALTER TABLE previous_year_papers
ALTER COLUMN paper_data DROP NOT NULL;