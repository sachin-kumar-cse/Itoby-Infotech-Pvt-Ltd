DROP POLICY IF EXISTS "Anyone can view active projects" ON public.projects;
CREATE POLICY "Anyone can view active projects" ON public.projects
  FOR SELECT TO anon, authenticated
  USING (is_active = true);