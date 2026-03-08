import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
  Shield
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
  { icon: Laptop, title: "Remote Work", description: "Flexible work-from-home options with hybrid arrangements available." },
  { icon: GraduationCap, title: "Learning Budget", description: "₹50,000 annual budget for courses, certifications, and conferences." },
  { icon: Heart, title: "Health Insurance", description: "Comprehensive health coverage for you and your family." },
  { icon: Plane, title: "Paid Time Off", description: "25 days annual leave plus public holidays and sick leave." },
  { icon: Gift, title: "Performance Bonus", description: "Quarterly bonuses based on individual and company performance." },
  { icon: Coffee, title: "Office Perks", description: "Free meals, snacks, gaming zone, and wellness programs." },
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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="container-wide relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/50">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Build Your <span className="gradient-text">Career</span> With Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join a team of passionate innovators, creative thinkers, and problem solvers. 
              Together, we're building the digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#culture">Our Culture</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Team Members" },
              { value: "12+", label: "Countries" },
              { value: "95%", label: "Retention Rate" },
              { value: "4.8★", label: "Glassdoor Rating" },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Our Culture</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At Itoby, we've built a culture where innovation thrives, collaboration is celebrated, and every voice matters.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Benefits & Perks</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                We Take Care of <span className="gradient-text">Our Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Competitive compensation is just the beginning.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full bg-card border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Open Positions</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Find Your <span className="gradient-text">Perfect Role</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for talented individuals to join our team.
              </p>
            </div>
          </ScrollReveal>

          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Loading positions...</div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">No open positions at the moment. Check back soon!</div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 0.1}>
                  <Link to={`/careers/${job.id}`}>
                    <Card className="bg-card border-border/50 hover:border-primary/50 transition-all group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">{job.department}</Badge>
                              <Badge variant="outline" className="text-xs">{job.type}</Badge>
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
                                <Badge key={skill} variant="outline" className="text-xs bg-secondary/50">{skill}</Badge>
                              ))}
                              {job.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs bg-secondary/50">+{job.skills.length - 3}</Badge>
                              )}
                            </div>
                            <Button variant="default" className="w-full lg:w-auto">
                              View Details
                              <ArrowRight size={16} className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Hiring Process</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Your Journey <span className="gradient-text">Starts Here</span>
              </h2>
              <p className="text-lg text-muted-foreground">Our hiring process is designed to be transparent, efficient, and respectful of your time.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringProcess.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full bg-card border-border/50 relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-primary">{step.step}</span>
                  </div>
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-display text-lg font-bold mb-2 pr-12">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-card to-glow-secondary/10 border-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <CardContent className="relative z-10 p-8 sm:p-12 text-center">
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
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
