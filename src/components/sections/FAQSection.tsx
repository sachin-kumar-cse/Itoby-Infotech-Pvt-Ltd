import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "A standard business website takes 2-4 weeks. Complex web applications with custom features may take 6-12 weeks. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use modern, industry-leading technologies including React, Next.js, Node.js, Laravel, Flutter, and more. Our tech stack is chosen based on your project's specific requirements.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer 12 months of premium support with all projects. We also provide maintenance packages for continued updates, security patches, and feature enhancements.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain transparent communication through regular updates, weekly calls, and a dedicated project manager. You'll have full visibility into your project's progress.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing options including fixed-price projects, hourly rates, and retainer packages. We provide detailed quotes after understanding your requirements.",
  },
  {
    question: "Can you help with digital marketing after the website launch?",
    answer: "Absolutely! We offer comprehensive digital marketing services including SEO, PPC advertising, social media marketing, and content strategy to drive traffic and conversions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const FAQSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-primary font-semibold uppercase tracking-wider text-sm inline-block"
            >
              FAQs
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Got questions? We've got answers. If you don't find what you're 
              looking for, feel free to reach out to our team.
            </motion.p>
            
            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div 
                className="p-4 rounded-xl bg-card border border-border"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-2xl font-display font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </motion.div>
              <motion.div 
                className="p-4 rounded-xl bg-card border border-border"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-2xl font-display font-bold text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            ref={rightRef}
            variants={containerVariants}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors bg-card"
                  >
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
