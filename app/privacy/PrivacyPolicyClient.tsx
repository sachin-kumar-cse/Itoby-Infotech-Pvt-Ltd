"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Bell, Mail, Globe, UserCheck, Clock, Trash2, Users, Smartphone } from "lucide-react";

/**
 * Each section renders as a card and carries an `id`, so a section can be linked
 * to directly. Google Play asks for an account deletion URL separately from the
 * privacy policy URL, and #account-deletion is only a valid answer while that
 * anchor exists — do not rename it.
 */
const sections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal Information: Name, email address, phone number, and company details when you contact us or use our services.",
      "Usage Data: Information about how you interact with our website, including pages visited, time spent, and navigation patterns.",
      "Technical Data: IP address, browser type, device information, and operating system.",
      "Cookies: This website uses cookies and similar technologies to enhance your browsing experience. The Itoby mobile app uses none — it stores only a sign-in token and your appearance preference on your device.",
    ],
  },
  {
    id: "information-in-the-itoby-app",
    icon: Smartphone,
    title: "Information in the Itoby App",
    content: [
      "Your account: your email address, the role your organisation has been given, and the name and contact details recorded against your account.",
      "If you are billed through IIPL Renting: your lease and the unit it covers, the invoices raised against it, payments made and their gateway reference, receipts issued, maintenance complaints you raise together with any photographs or files attached to them, and documents shared with you or uploaded by you.",
      "Activity: actions taken inside the product — who changed what, and when — are written to an audit log, which is how a billing or complaint record can be explained later.",
      "The app carries no advertising, no analytics and no tracking. We do not sell personal information or share it with data brokers.",
    ],
  },
  {
    id: "how-we-use-your-information",
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
    id: "data-security",
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
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "Access: You have the right to request copies of your personal data.",
      "Rectification: You can request correction of inaccurate or incomplete data.",
      "Erasure: You can request deletion of your personal data under certain circumstances.",
      "Data Portability: You can request transfer of your data to another service provider.",
      "Write to info@itobyinfotech.com and we will respond within thirty days. We may ask you to confirm your identity first, so that we are not handing your records to someone else.",
      "Under India's Digital Personal Data Protection Act, Itoby Infotech Pvt Ltd is the Data Fiduciary for this information, and Sector-4, Noida, UP, India is where a grievance should be sent. If we do not resolve it, you may escalate to the Data Protection Board of India.",
    ],
  },
  {
    id: "third-party-services",
    icon: Globe,
    title: "Third-Party Services",
    content: [
      "Supabase hosts the database, authentication and file storage behind the Itoby app. Data is held in their managed infrastructure.",
      "Razorpay processes card, UPI and netbanking payments. Payment details are entered on Razorpay's own checkout and are never handled by us. We receive and store only the outcome and its reference, so an invoice can be marked paid and a receipt issued.",
      "Neither is given your data for their own purposes, and we do not add others without changing this page first. We will also disclose information where the law requires it, or to establish or defend a legal claim.",
      "Our providers may store and process data outside India, including in the European Union and the United States. Where personal data leaves the country it was collected in, it is protected by the contractual terms we hold with those providers.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "how-long-we-keep-it",
    icon: Clock,
    title: "How Long We Keep It",
    content: [
      "Enquiries: up to two years from your last contact with us, unless you ask for removal sooner.",
      "Account and rental records: for as long as your lease or relationship with us is active.",
      "Invoices, payments and receipts: eight years after the financial year they belong to, as Indian tax law requires. These cannot be deleted on request while that period runs.",
      "Audit log entries: for as long as the records they explain are held.",
    ],
  },
  {
    id: "account-deletion",
    icon: Trash2,
    title: "Deleting Your Account",
    content: [
      "Itoby accounts are created by an administrator at your organisation rather than by self sign-up, so they are closed the same way. Ask your administrator, or write to us directly.",
      "To request deletion, email info@itobyinfotech.com from the address on the account with the subject \"Delete my account\". We will action it within thirty days.",
      "Closing an account removes your access and your profile.",
      "Financial records we are required to retain — invoices, payments and receipts — are kept for the period described above and then deleted.",
    ],
  },
  {
    id: "children",
    icon: Users,
    title: "Children",
    content: [
      "The Itoby app is a business tool. It is not directed at children, it is not designed for them, and we do not knowingly collect information from anyone under 18.",
      "If you believe a child has given us information, write to us and we will remove it.",
    ],
  },
  {
    id: "updates-to-this-policy",
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

export default function PrivacyPolicyClient() {
  return (
    <>
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
              Last updated: September 2026
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
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 scroll-mt-32"
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
                href="mailto:info@itobyinfotech.com" 
                className="text-primary hover:underline font-medium"
              >
                info@itobyinfotech.com
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <a 
                href="tel:+919142773500" 
                className="text-primary hover:underline font-medium"
              >
                +91 91427 73500
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
