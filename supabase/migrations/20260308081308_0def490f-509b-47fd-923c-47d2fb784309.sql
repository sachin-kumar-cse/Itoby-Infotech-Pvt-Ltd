
-- Fix CRITICAL: All RLS policies are RESTRICTIVE, making them non-functional.
-- Drop all existing policies and recreate as PERMISSIVE (default).

-- ===== contact_submissions =====
DROP POLICY IF EXISTS "Admins can delete contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can update contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update contact submissions" ON public.contact_submissions FOR UPDATE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can delete contact submissions" ON public.contact_submissions FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

-- ===== quote_requests =====
DROP POLICY IF EXISTS "Admins can delete quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "Admins can update quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "Admins can view quote requests" ON public.quote_requests;
DROP POLICY IF EXISTS "Anyone can submit quote request" ON public.quote_requests;

CREATE POLICY "Admins can view quote requests" ON public.quote_requests FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update quote requests" ON public.quote_requests FOR UPDATE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can delete quote requests" ON public.quote_requests FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Anyone can submit quote request" ON public.quote_requests FOR INSERT TO anon, authenticated WITH CHECK (true);

-- ===== job_applications =====
DROP POLICY IF EXISTS "Admins can delete job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Admins can update job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Admins can view all job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Anyone can submit job applications" ON public.job_applications;

CREATE POLICY "Admins can view all job applications" ON public.job_applications FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update job applications" ON public.job_applications FOR UPDATE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can delete job applications" ON public.job_applications FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Anyone can submit job applications" ON public.job_applications FOR INSERT TO anon, authenticated WITH CHECK (true);

-- ===== newsletter_subscribers =====
DROP POLICY IF EXISTS "Admins can delete subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can update subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can view subscribers" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;

CREATE POLICY "Admins can view subscribers" ON public.newsletter_subscribers FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can update subscribers" ON public.newsletter_subscribers FOR UPDATE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Admins can delete subscribers" ON public.newsletter_subscribers FOR DELETE TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);

-- ===== blog_posts =====
DROP POLICY IF EXISTS "Admins can do everything with blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;

CREATE POLICY "Admins can do everything with blog posts" ON public.blog_posts FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts FOR SELECT TO anon, authenticated USING (is_published = true);

-- ===== jobs =====
DROP POLICY IF EXISTS "Admins can do everything with jobs" ON public.jobs;
DROP POLICY IF EXISTS "Anyone can view active jobs" ON public.jobs;

CREATE POLICY "Admins can do everything with jobs" ON public.jobs FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
CREATE POLICY "Anyone can view active jobs" ON public.jobs FOR SELECT TO anon, authenticated USING (is_active = true);

-- ===== user_roles =====
DROP POLICY IF EXISTS "Users can view own role" ON public.user_roles;

CREATE POLICY "Users can view own role" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
