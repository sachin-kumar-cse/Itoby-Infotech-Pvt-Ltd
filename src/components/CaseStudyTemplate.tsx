"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

interface CaseStudy {
  title: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  heroImage: any;
  overview: string;
  challenge: string[];
  solution: string[];
  results: {
    metric: string;
    value: string;
  }[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  relatedProjects: {
    title: string;
    category: string;
    image: any;
    path: string;
  }[];
}

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
}

const getImgSrc = (img: any) => typeof img === "string" ? img : img?.src || img;

export const CaseStudyTemplate = ({ caseStudy }: CaseStudyTemplateProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(75_100%_50%/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  {caseStudy.category}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {caseStudy.overview}
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="text-muted-foreground text-sm">Client</span>
                    <p className="font-semibold">{caseStudy.client}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Duration</span>
                    <p className="font-semibold">{caseStudy.duration}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Year</span>
                    <p className="font-semibold">{caseStudy.year}</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-border"
              >
                <img
                  src={getImgSrc(caseStudy.heroImage)}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl lg:text-5xl font-bold gradient-text">
                  {result.value}
                </span>
                <p className="text-muted-foreground mt-2">{result.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                The Challenge
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-8">
                What We <span className="gradient-text">Faced</span>
              </h2>
              <div className="space-y-4">
                {caseStudy.challenge.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-destructive text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Solution
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-8">
                How We <span className="gradient-text">Solved It</span>
              </h2>
              <div className="space-y-4">
                {caseStudy.solution.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={24} />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Technologies Used
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {caseStudy.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="text-6xl text-primary mb-6">"</div>
              <blockquote className="font-display text-2xl sm:text-3xl font-medium mb-8">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div>
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-muted-foreground">{caseStudy.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {caseStudy.relatedProjects.length > 0 && (
        <section className="section-padding bg-card/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                More Work
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
                Related <span className="gradient-text">Projects</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudy.relatedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={project.path}
                    className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={getImgSrc(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">{project.category}</span>
                      <h3 className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};
