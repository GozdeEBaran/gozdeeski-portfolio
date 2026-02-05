-- ===================================
-- Supabase Table Creation SQL
-- ===================================
-- Run this in your Supabase SQL Editor
-- (Database → SQL Editor → New Query)

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for contact form)
CREATE POLICY "Allow public insert"
    ON contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated reads (for you to view in dashboard)
CREATE POLICY "Allow authenticated read"
    ON contact_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Create an index on submitted_at for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at 
    ON contact_submissions(submitted_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
    ON contact_submissions(status);

-- Success message
SELECT 'Table created successfully! 🎉' AS result;
