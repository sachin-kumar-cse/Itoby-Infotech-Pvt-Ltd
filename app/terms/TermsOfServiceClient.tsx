"use client";

import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, CreditCard, RefreshCw, ShieldCheck, Gavel, HelpCircle } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Services Overview",
    content: [
      "Itoby Infotech provides web design, mobile app development, software solutions, digital marketing, and Microsoft 365 consulting services.",
      "All services are provided on a project basis with specific deliverables outlined in individual agreements.",
      "We reserve the right to modify or discontinue services with reasonable notice to clients.",
      "Service specifications, timelines, and costs are defined in individual project proposals and contracts.",
    ],
  },
  {
    icon: Scale,
    title: "2. Client Responsibilities",
    content: [
      "Provide accurate and complete information necessary for project execution.",
      "Review and approve deliverables within the agreed timeframes.",
      "Ensure timely payment according to the agreed payment schedule.",
      "Obtain necessary rights and permissions for any content provided for use in projects.",
    ],
  },
  {
    icon: CreditCard,
    title: "3. Payment Terms",
    content: [
      "Payment schedules are outlined in individual project agreements, typically including an advance payment.",
      "Invoices are due within 15 days of issuance unless otherwise specified.",
      "Late payments may incur interest charges as specified in the project agreement.",
      "We accept payments via bank transfer, credit/debit cards, and approved digital payment methods.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "4. Intellectual Property",
    content: [
      "Upon full payment, clients receive ownership of custom-developed deliverables as specified in the agreement.",
      "We retain rights to reusable code, frameworks, and proprietary tools used in development.",
      "Pre-existing intellectual property remains the property of its original owner.",
      "We may showcase completed projects in our portfolio unless explicitly prohibited by the client.",
    ],
  },
  {
    icon: RefreshCw,
    title: "5. Revisions & Changes",
    content: [
      "Each project includes a specified number of revision rounds as outlined in the proposal.",
      "Additional revisions beyond the agreed scope may incur extra charges.",
      "Major scope changes require a change order and may affect project timelines and costs.",
      "Revision requests must be submitted in writing within the specified review period.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "6. Limitation of Liability",
    content: [
      "We are not liable for indirect, incidental, or consequential damages arising from service use.",
      "Our total liability is limited to the amount paid for the specific service in question.",
      "We are not responsible for delays or failures caused by circumstances beyond our control.",
      "Clients are responsible for backing up their data and content provided during projects.",
    ],
  },
  {
    icon: Gavel,
    title: "7. Termination",
    content: [
      "Either party may terminate services with 30 days written notice.",
      "Early termination may require payment for work completed and costs incurred.",
      "Upon termination, clients receive all completed deliverables for which payment has been made.",
      "Confidentiality obligations survive termination of the service agreement.",
    ],
  },
  {
    icon: HelpCircle,
    title: "8. Dispute Resolution",
    content: [
      "Disputes shall first be addressed through good-faith negotiation between the parties.",
      "If negotiation fails, disputes may be submitted to mediation before pursuing legal action.",
      "All disputes are governed by the laws of India and subject to the jurisdiction of Patna courts.",
      "We encourage open communication to resolve any concerns before they become disputes.",
    ],
  },
];

const additionalTerms = [
  {
    title: "Confidentiality",
    description: "Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This includes but is not limited to business strategies, technical specifications, and client data.",
  },
  {
    title: "Warranties",
    description: "We warrant that our services will be performed in a professional manner consistent with industry standards. We provide a 30-day warranty period for bug fixes on delivered software, excluding issues caused by client modifications.",
  },
  {
    title: "Force Majeure",
    description: "Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including natural disasters, government actions, or technical failures affecting internet infrastructure.",
  },
  {
    title: "Indemnification",
    description: "Clients agree to indemnify and hold harmless Itoby Infotech from claims arising from content provided by the client, including any intellectual property infringement claims.",
  },
];

export default function TermsOfServiceClient() {
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
              <FileText size={16} />
              <span className="text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before engaging our services. By using our 
              services, you agree to be bound by these terms and conditions.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Effective Date: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="font-display text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Itoby Infotech Pvt. Ltd. ("Company," "we," "our," or "us"). These Terms of 
              Service ("Terms") govern your use of our website and engagement with our professional 
              services including web design, mobile application development, software solutions, 
              digital marketing, and Microsoft 365 consulting.
            </p>
            <p className="text-muted-foreground">
              By accessing our website or engaging our services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms. If you do not agree with any part of 
              these Terms, please do not use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
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
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-12">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl font-bold text-center mb-8"
            >
              Additional Terms
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalTerms.map((term, index) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/50 border border-border rounded-xl p-6"
                >
                  <h3 className="font-display text-lg font-bold mb-3">{term.title}</h3>
                  <p className="text-sm text-muted-foreground">{term.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-glow-secondary/10 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service or need clarification 
              on any clause, our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:legal@itobyinfotech.in" 
                className="text-primary hover:underline font-medium"
              >
                legal@itobyinfotech.in
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
    </>
  );
}
