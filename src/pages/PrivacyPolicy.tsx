import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Bell, Mail, Globe, UserCheck } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal Information: Name, email address, phone number, and company details when you contact us or use our services.",
      "Usage Data: Information about how you interact with our website, including pages visited, time spent, and navigation patterns.",
      "Technical Data: IP address, browser type, device information, and operating system.",
      "Cookies: We use cookies and similar tracking technologies to enhance your browsing experience.",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To provide and maintain our services, including web development, mobile app development, and digital marketing solutions.",
      "To communicate with you about projects, updates, and promotional offers.",
      "To improve our website and services based on your feedback and usage patterns.",
      "To comply with legal obligations and protect our rights.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information.",
      "All data transmissions are encrypted using SSL/TLS protocols.",
      "Access to personal data is restricted to authorized personnel only.",
      "We regularly review and update our security practices to ensure data protection.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Access: You have the right to request copies of your personal data.",
      "Rectification: You can request correction of inaccurate or incomplete data.",
      "Erasure: You can request deletion of your personal data under certain circumstances.",
      "Data Portability: You can request transfer of your data to another service provider.",
    ],
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: [
      "We may use third-party services for analytics, payment processing, and communication.",
      "These services have their own privacy policies governing the use of your information.",
      "We ensure that our partners comply with applicable data protection regulations.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    icon: Bell,
    title: "Updates to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices.",
      "Significant changes will be communicated via email or prominent website notice.",
      "Continued use of our services after updates constitutes acceptance of the revised policy.",
      "We encourage you to review this policy periodically.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEOHead title="Privacy Policy" description="Read Itoby Infotech's privacy policy. Learn how we collect, use, and protect your personal information." path="/privacy" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/10 rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Shield size={16} />
              <span className="text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At Itoby Infotech, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This policy explains how we collect, 
              use, and safeguard your data.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-primary/10 to-glow-secondary/10 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:privacy@itobyinfotech.in" 
                className="text-primary hover:underline font-medium"
              >
                privacy@itobyinfotech.in
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a 
                href="tel:+919876543210" 
                className="text-primary hover:underline font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
