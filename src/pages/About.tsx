import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Zap, Shield, Clock, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/sections/CTASection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import aboutTeam from "@/assets/about-team.webp";

const whyChooseUs = [
  { icon: Zap, title: "Transparent Process", description: "Clear communication and regular updates throughout the project lifecycle.", color: "from-yellow-500/20 to-amber-500/20" },
  { icon: Clock, title: "On-Time Delivery", description: "We respect deadlines and deliver projects when promised, every time.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Shield, title: "Modern Tech Stack", description: "Using latest technologies to build future-proof digital solutions.", color: "from-green-500/20 to-emerald-500/20" },
  { icon: HeartHandshake, title: "Growth-Focused Strategy", description: "Every solution is designed with your business growth in mind.", color: "from-purple-500/20 to-pink-500/20" },
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: "🚀" },
  { value: "150+", label: "Happy Clients", icon: "😊" },
  { value: "11+", label: "Years Experience", icon: "⏳" },
  { value: "50+", label: "Team Members", icon: "👥" },
];

const values = [
  { title: "Innovation", description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.", emoji: "💡" },
  { title: "Integrity", description: "Transparency and honesty form the foundation of all our client relationships.", emoji: "🤝" },
  { title: "Excellence", description: "We strive for perfection in every project, no matter how big or small.", emoji: "⭐" },
  { title: "Collaboration", description: "We work as an extension of your team, ensuring seamless communication and partnership.", emoji: "🎯" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <Layout>
      <SEOHead title="About Us" description="Learn about Itoby Infotech — a premier digital agency based in Patna, India. Transforming visions into digital reality since 2013." path="/about" jsonLd={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About Itoby Infotech", description: "Premier digital agency delivering exceptional web design, app development, and marketing solutions since 2013." }} />

      {/* Hero with ambient glows */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="text-primary" size={16} />
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">About Us</span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Transforming Ideas Into <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're a passionate team of designers, developers, and strategists dedicated to
              helping businesses thrive in the digital age since 2013.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Glassmorphism */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={aboutTeam}
                  alt="Itoby Infotech team"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 flex flex-col items-center justify-center shadow-2xl"
              >
                <span className="text-2xl sm:text-3xl font-display font-bold text-primary">11+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Years</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Story</span>
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
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 pt-4"
              >
                {["ISO 9001 Certified", "Microsoft Partner", "Agile Methodology", "24/7 Support"].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-2 p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                  >
                    <CheckCircle className="text-primary shrink-0" size={18} />
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Glassmorphism Cards */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact. We aim to be strategic partners in our clients' success, not just service providers." },
              { icon: Eye, title: "Our Vision", text: "To become the most trusted digital partner for businesses worldwide, known for innovation, technical excellence, and commitment to results. We envision a future where every business has access to world-class digital solutions." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="relative p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-xl overflow-hidden group"
              >
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Glassmorphism */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all text-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Glassmorphism */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-6 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all text-center group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <TimelineSection />

      {/* Stats - Glassmorphism */}
      <section className="section-padding bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
        <div className="container-wide relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="relative text-center p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all group"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <p className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default About;
