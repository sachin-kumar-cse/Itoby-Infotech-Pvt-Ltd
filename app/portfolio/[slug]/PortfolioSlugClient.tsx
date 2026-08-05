"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CTASection } from "@/components/sections/CTASection";

import B2BSaas from "@/views/portfolio/B2BSaas";
import Easy2Buy from "@/views/portfolio/Easy2Buy";
import FitTrack from "@/views/portfolio/FitTrack";
import FreightXpress from "@/views/portfolio/FreightXpress";
import HealthcarePortal from "@/views/portfolio/HealthcarePortal";
import Juxtudio from "@/views/portfolio/Juxtudio";
import KaspereyeSecurity from "@/views/portfolio/KaspereyeSecurity";
import LawFirmM365 from "@/views/portfolio/LawFirmM365";
import LeadItoby from "@/views/portfolio/LeadItoby";
import LuxeFashion from "@/views/portfolio/LuxeFashion";
import ManufacturingERP from "@/views/portfolio/ManufacturingERP";
import QuickPay from "@/views/portfolio/QuickPay";
import RainfraStudio from "@/views/portfolio/RainfraStudio";
import RentItoby from "@/views/portfolio/RentItoby";
import RestaurantChain from "@/views/portfolio/RestaurantChain";
import RetailM365 from "@/views/portfolio/RetailM365";
import SolidEdgeConstructions from "@/views/portfolio/SolidEdgeConstructions";
import TechFlow from "@/views/portfolio/TechFlow";

interface DbProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results: string;
  tech: string[];
  client: string;
}

const staticComponents: Record<string, React.ComponentType> = {
  "b2b-saas": B2BSaas,
  "easy2buy": Easy2Buy,
  "fittrack": FitTrack,
  "freightxpress": FreightXpress,
  "healthcare-portal": HealthcarePortal,
  "juxtudio": Juxtudio,
  "kaspereye-security": KaspereyeSecurity,
  "law-firm-m365": LawFirmM365,
  "lead-itoby": LeadItoby,
  "luxe-fashion": LuxeFashion,
  "manufacturing-erp": ManufacturingERP,
  "quickpay": QuickPay,
  "rainfra-studio": RainfraStudio,
  "rent-itoby": RentItoby,
  "restaurant-chain": RestaurantChain,
  "retail-m365": RetailM365,
  "solidedgeconstructions": SolidEdgeConstructions,
  "techflow": TechFlow,
};

export default function PortfolioSlugClient({ slug }: { slug: string }) {
  const router = useRouter();
  const StaticComponent = staticComponents[slug];

  const [dbProject, setDbProject] = useState<DbProject | null>(null);
  const [isLoading, setIsLoading] = useState(!StaticComponent);

  useEffect(() => {
    if (StaticComponent) return;

    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("slug, title, category, description, image, results, tech, client")
        .eq("slug", slug)
        .eq("is_active", true)
        .maybeSingle();

      if (!error && data) {
        setDbProject(data as DbProject);
      } else {
        router.replace("/portfolio");
      }
      setIsLoading(false);
    };

    fetchProject();
  }, [slug, StaticComponent, router]);

  if (StaticComponent) {
    return <StaticComponent />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!dbProject) return null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container-wide relative z-10">
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            asChild
          >
            <Link href="/portfolio">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-primary/90">{dbProject.category}</Badge>
              {dbProject.client && (
                <Badge variant="outline">{dbProject.client}</Badge>
              )}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {dbProject.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {dbProject.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      {dbProject.image && (
        <section className="pb-16">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border/50"
            >
              <img
                src={dbProject.image}
                alt={dbProject.title}
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
            {dbProject.results && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Key Results</h2>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={24} />
                  <span className="text-2xl font-bold text-primary">{dbProject.results}</span>
                </div>
              </motion.div>
            )}

            {/* Tech Stack */}
            {dbProject.tech && dbProject.tech.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50"
              >
                <h2 className="font-display text-2xl font-bold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {dbProject.tech.map((t) => (
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
    </>
  );
}
