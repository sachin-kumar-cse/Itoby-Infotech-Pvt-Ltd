
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  image text NOT NULL DEFAULT '',
  results text NOT NULL DEFAULT '',
  tech text[] NOT NULL DEFAULT '{}'::text[],
  client text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active projects" ON public.projects
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can do everything with projects" ON public.projects
  FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
