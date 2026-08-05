import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CTASection } from "@/components/sections/CTASection";

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results: string;
  tech: string[];
  client: string;
}

const DynamicPortfolio = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("slug, title, category, description, image, results, tech, client")
        .eq("slug", slug)
        .eq("is_active", true)
        .maybeSingle();

      if (!error && data) {
        setProject(data as Project);
      } else {
        navigate("/portfolio", { replace: true });
      }
      setIsLoading(false);
    };
    fetchProject();
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!project) return null;

  return (
    <Layout>
      <SEOHead
        title={project.title}
        description={project.description}
        path={`/portfolio/${project.slug}`}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container-wide relative z-10">
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => navigate("/portfolio")}
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-primary/90">{project.category}</Badge>
              {project.client && (
                <Badge variant="outline">{project.client}</Badge>
              )}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      {project.image && (
        <section className="pb-16">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Details */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Results */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Key Results</h2>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={24} />
                  <span className="text-2xl font-bold text-primary">{project.results}</span>
                </div>
              </motion.div>
            )}

            {/* Tech Stack */}
            {project.tech && project.tech.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-sm px-3 py-1.5">
                      {t}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default DynamicPortfolio;
