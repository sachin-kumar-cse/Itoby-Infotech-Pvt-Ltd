import { useState, useEffect } from "react";
import { JobListSkeleton } from "@/components/ui/skeleton-cards";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  Zap,
  Coffee,
  Laptop,
  GraduationCap,
  Plane,
  Gift,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
}

const benefits = [
  { icon: Laptop, title: "Remote Work", description: "Flexible work-from-home options with hybrid arrangements available.", emoji: "🏠" },
  { icon: GraduationCap, title: "Learning Budget", description: "₹50,000 annual budget for courses, certifications, and conferences.", emoji: "📚" },
  { icon: Heart, title: "Health Insurance", description: "Comprehensive health coverage for you and your family.", emoji: "💊" },
  { icon: Plane, title: "Paid Time Off", description: "25 days annual leave plus public holidays and sick leave.", emoji: "✈️" },
  { icon: Gift, title: "Performance Bonus", description: "Quarterly bonuses based on individual and company performance.", emoji: "🎁" },
  { icon: Coffee, title: "Office Perks", description: "Free meals, snacks, gaming zone, and wellness programs.", emoji: "☕" },
];

const cultureValues = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in everything we do, from code quality to client communication." },
  { icon: Lightbulb, title: "Innovation", description: "We encourage creative thinking and embrace new technologies and methodologies." },
  { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and open communication across all levels." },
  { icon: Rocket, title: "Growth", description: "We invest in our people's growth through mentorship and learning opportunities." },
  { icon: Shield, title: "Integrity", description: "We maintain the highest ethical standards in all our business practices." },
  { icon: Zap, title: "Agility", description: "We adapt quickly to change and deliver results with speed and efficiency." },
];

const hiringProcess = [
  { step: 1, title: "Application Review", description: "Our team reviews your application and portfolio within 3-5 business days." },
  { step: 2, title: "Initial Screening", description: "A 30-minute call with HR to discuss your background and expectations." },
  { step: 3, title: "Technical Assessment", description: "Role-specific assessment or coding challenge to evaluate your skills." },
  { step: 4, title: "Team Interview", description: "Meet the team you'll be working with and discuss the role in detail." },
  { step: 5, title: "Final Interview", description: "Discussion with leadership about culture fit and career goals." },
  { step: 6, title: "Offer", description: "Receive your offer letter and join the Itoby family!" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("id, title, department, location, type, experience, salary, description, skills")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (!error && data) setJobs(data as Job[]);
      setIsLoading(false);
    };
    fetchJobs();
  }, []);

  return (
    <Layout>
      <SEOHead title="Careers - Join Our Team" description="Explore career opportunities at Itoby Infotech. Join our team of designers, developers, and marketers in Patna, India." path="/careers" jsonLd={{ "@context": "https://schema.org", "@type": "JobPosting", hiringOrganization: { "@type": "Organization", name: "Itoby Infotech" } }} />

      {/* Hero - Enhanced */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />

        <div className="container-wide relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <Briefcase className="text-primary" size={16} />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Join Our Team</span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Build Your <span className="gradient-text">Career</span> With Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join a team of passionate innovators, creative thinkers, and problem solvers.
              Together, we're building the digital future.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#culture">Our Culture</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Glassmorphism */}
      <section className="py-12 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50+", label: "Team Members", icon: "👥" },
              { value: "12+", label: "Countries", icon: "🌍" },
              { value: "95%", label: "Retention Rate", icon: "💎" },
              { value: "4.8★", label: "Glassdoor Rating", icon: "⭐" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="text-center p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section - Glassmorphism */}
      <section id="culture" className="section-padding relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Culture</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              At Itoby, we've built a culture where innovation thrives, collaboration is celebrated, and every voice matters.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cultureValues.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits - Glassmorphism */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Benefits & Perks</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              We Take Care of <span className="gradient-text">Our Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">Competitive compensation is just the beginning.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{benefit.emoji}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings - Glassmorphism */}
      <section id="openings" className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Open Positions</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Find Your <span className="gradient-text">Perfect Role</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented individuals to join our team.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50">
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-muted-foreground">Loading positions...</p>
              </div>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50">
                <p className="text-muted-foreground">No open positions at the moment. Check back soon!</p>
              </div>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {jobs.map((job) => (
                <motion.div key={job.id} variants={fadeUp}>
                  <Link to={`/careers/${job.id}`}>
                    <div className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] group cursor-pointer overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs">{job.department}</Badge>
                            <Badge variant="outline" className="text-xs bg-secondary/30 backdrop-blur-sm">{job.type}</Badge>
                          </div>
                          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{job.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} className="text-primary" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} className="text-primary" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 lg:items-end">
                          <div className="flex flex-wrap gap-2">
                            {job.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs bg-secondary/30 backdrop-blur-sm">{skill}</Badge>
                            ))}
                            {job.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs bg-secondary/30 backdrop-blur-sm">+{job.skills.length - 3}</Badge>
                            )}
                          </div>
                          <Button variant="default" className="w-full lg:w-auto rounded-xl">
                            View Details
                            <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Hiring Process - Glassmorphism Timeline */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Hiring Process</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your Journey <span className="gradient-text">Starts Here</span>
            </h2>
            <p className="text-lg text-muted-foreground">Our hiring process is designed to be transparent, efficient, and respectful of your time.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hiringProcess.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="font-display text-xl font-bold text-primary">{step.step}</span>
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="font-display text-lg font-bold mb-2 pr-12">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Glassmorphism */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 sm:p-14 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-xl overflow-hidden text-center"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="relative z-10">
              <Sparkles className="text-primary mx-auto mb-4" size={28} />
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Don't See a Perfect Match?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We're always looking for exceptional talent. Send us your resume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Send Your Resume
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href="mailto:careers@itobyinfotech.in">Email Us Directly</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
