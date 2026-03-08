import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Zap, Shield, Clock, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/sections/CTASection";

import { TimelineSection } from "@/components/sections/TimelineSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import aboutTeam from "@/assets/about-team.jpg";

const whyChooseUs = [
  { icon: Zap, title: "Transparent Process", description: "Clear communication and regular updates throughout the project lifecycle." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect deadlines and deliver projects when promised, every time." },
  { icon: Shield, title: "Modern Tech Stack", description: "Using latest technologies to build future-proof digital solutions." },
  { icon: HeartHandshake, title: "Growth-Focused Strategy", description: "Every solution is designed with your business growth in mind." },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "11+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

const values = [
  { title: "Innovation", description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions." },
  { title: "Integrity", description: "Transparency and honesty form the foundation of all our client relationships." },
  { title: "Excellence", description: "We strive for perfection in every project, no matter how big or small." },
  { title: "Collaboration", description: "We work as an extension of your team, ensuring seamless communication and partnership." },
];

const About = () => {
  return (
    <Layout>
      <SEOHead title="About Us" description="Learn about Itoby Infotech — a premier digital agency based in Patna, India. Transforming visions into digital reality since 2013." path="/about" jsonLd={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About Itoby Infotech", description: "Premier digital agency delivering exceptional web design, app development, and marketing solutions since 2013." }} />
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(75_100%_50%/0.1),transparent_50%)]" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Transforming Ideas Into <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're a passionate team of designers, developers, and strategists dedicated to 
              helping businesses thrive in the digital age since 2013.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={aboutTeam}
                alt="Itoby Infotech team"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary flex flex-col items-center justify-center text-primary-foreground">
                <span className="text-3xl font-display font-bold">11+</span>
                <span className="text-sm">Years</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                Building Digital <span className="gradient-text">Excellence</span> Since 2013
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Itoby Infotech started with a simple vision: to help businesses navigate the 
                digital landscape with innovative, scalable solutions. What began as a small 
                web design studio in Patna has grown into a full-service digital agency with 
                a global footprint.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey has been marked by continuous learning, adaptation, and an unwavering 
                commitment to client success. We've partnered with startups, SMEs, and enterprises 
                across diverse industries, helping them achieve their digital transformation goals.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {["ISO 9001 Certified", "Microsoft Partner", "Agile Methodology", "24/7 Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting impact. We aim to be strategic 
                partners in our clients' success, not just service providers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted digital partner for businesses worldwide, 
                known for innovation, technical excellence, and commitment to results. 
                We envision a future where every business has access to world-class digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <span className="text-2xl font-display font-bold text-primary group-hover:text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="text-primary group-hover:text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />


      {/* Stats */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStackSection />

      {/* Testimonials */}
      <TestimonialsSection />

      <CTASection />
    </Layout>
  );
};

export default About;
