-- Allow authenticated admin users to read resumes
CREATE POLICY "Admins can read resumes"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'resumes' 
  AND public.is_admin(auth.uid())
);

-- Allow admins to delete resumes
CREATE POLICY "Admins can delete resumes"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'resumes'
  AND public.is_admin(auth.uid())
);