"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Zap, Shield, Clock, HeartHandshake, ArrowRight, Sparkles, Globe2, MapPin, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PageHeroBanner } from "@/components/ui/page-hero-banner";
import { Floating3DBubbles } from "@/components/ui/floating-3d-bubbles";
import aboutTeam from "@/assets/about-team.webp";

const getImgSrc = (img: any) => typeof img === "string" ? img : img?.src || img;

const whyChooseUs = [
  { icon: Zap, title: "Transparent Process", description: "Clear communication and regular updates throughout the project lifecycle.", color: "from-yellow-500/20 to-amber-500/20" },
  { icon: Clock, title: "On-Time Delivery", description: "We respect deadlines and deliver projects when promised, every time.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Shield, title: "Modern Tech Stack", description: "Using latest technologies to build future-proof digital solutions.", color: "from-green-500/20 to-emerald-500/20" },
  { icon: HeartHandshake, title: "Growth-Focused Strategy", description: "Every solution is designed with your business growth in mind.", color: "from-purple-500/20 to-pink-500/20" },
];

const geoLocations = [
  { region: "North America", countries: "USA & Canada", desc: "Serving enterprise clients, SaaS startups & SMEs across New York, California, Texas & Toronto.", flag: "🇺🇸 🇨🇦" },
  { region: "Asia Pacific & Australia", countries: "Australia & NZ", desc: "Delivering bespoke web & mobile applications for businesses in Sydney, Melbourne & Auckland.", flag: "🇦🇺 🇳🇿" },
  { region: "Europe & UK", countries: "United Kingdom & EU", desc: "Providing GDPR-compliant cloud solutions, web design & software engineering in London & Berlin.", flag: "🇬🇧 🇪🇺" },
  { region: "Middle East & Asia", countries: "India & UAE", desc: "Global development hubs in Noida, Delhi-NCR & Patna providing 24/7 dedicated engineering.", flag: "🇮🇳 🇦🇪" },
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

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Itoby Infotech Pvt. Ltd.",
  url: "https://www.itobyinfotech.com/about",
  description: "Learn about Itoby Infotech — a premier global digital agency engineering custom web design, mobile apps, software solutions, and AI SaaS platforms.",
  publisher: {
    "@type": "Organization",
    name: "Itoby Infotech Pvt. Ltd.",
    logo: "https://www.itobyinfotech.com/images/logo.png"
  }
};

export default function AboutClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageHeroBanner
        badge="Who We Are"
        title="Engineering Digital Solutions for Global Leaders"
        description="We are Itoby Infotech — a full-service digital agency and software engineering firm transforming business visions into high-impact digital experiences."
        breadcrumbs={[
          { label: "About Us", path: "/about" },
        ]}
      />

      {/* Hero / Overview Section */}
      <section className="section-padding relative overflow-hidden">
        <Floating3DBubbles count={16} />
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={13} className="animate-pulse" />
                Est. 2013 — 11+ Years of Innovation
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Empowering Brands with <span className="gradient-text">World-Class Software</span> & Digital Strategy
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Founded in 2013, Itoby Infotech (IIPL) has grown into a premier global technology agency. 
                We specialize in custom web applications, native & cross-platform mobile apps, enterprise software, 
                and result-driven digital marketing.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our multidisciplinary team of software architects, UI/UX designers, cloud engineers, and growth marketers 
                work cohesively to craft custom digital products tailored to your exact business objectives.
              </p>

              {/* Highlights List */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Global Engineering Hubs",
                  "100% In-House Expert Team",
                  "Agile Development Methodology",
                  "Dedicated Post-Launch Support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">Explore Our Work</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Image / Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl group">
                <img
                  src={getImgSrc(aboutTeam)}
                  alt="Itoby Infotech Engineering Team & Modern Office"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider">Global Delivery</p>
                      <h3 className="font-display text-base sm:text-lg font-bold text-foreground">Client-Centric Excellence</h3>
                    </div>
                    <Award size={28} className="text-primary shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Footprint / Multi-Regional Targeting Section */}
      <section className="section-padding bg-card/30 border-y border-border/40 relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-1.5">
              <Globe2 size={16} /> Global Presence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
              Serving Clients Across <span className="gradient-text">North America, Europe, Australia & Asia</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              We operate across multiple time zones, delivering seamless communication and agile software development for international enterprises and high-growth startups.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {geoLocations.map((geo, idx) => (
              <motion.div
                key={geo.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-300 relative group"
              >
                <div className="text-3xl mb-3">{geo.flag}</div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {geo.region}
                </h3>
                <p className="text-xs text-primary font-semibold mb-2">{geo.countries}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{geo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To empower businesses worldwide by designing and engineering scalable, secure, and intuitive digital solutions that solve real-world problems and unlock sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Eye size={28} />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To be the world's most trusted digital transformation agency, known for technical excellence, creative design innovation, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-card/30 border-y border-border/40 relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">What Guides Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Principles that shape our culture, decisions, and how we collaborate with our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{val.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">The IIPL Advantage</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
              Why Companies Trust <span className="gradient-text">Itoby Infotech</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card/40 border border-border/50 hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />

      {/* Stats Counter Section */}
      <section className="section-padding bg-card/20 border-y border-border/40">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
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
    </>
  );
}
