-- ===================================
-- Complete Supabase Contact Form Fix
-- ===================================

-- Step 1: Drop all existing policies (start fresh)
DROP POLICY IF EXISTS "Allow public contact form submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow public insert" ON public.contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read" ON public.contact_submissions;

-- Step 2: Make sure RLS is enabled
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 3: Create the correct policy for anonymous users to submit forms
CREATE POLICY "allow_anon_insert_contact"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Step 4: Allow you (authenticated user) to view submissions
CREATE POLICY "allow_authenticated_select_contact"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Step 5: Verify the policies were created
SELECT schemaname, tablename, policyname, roles, cmd
FROM pg_policies
WHERE tablename = 'contact_submissions';
