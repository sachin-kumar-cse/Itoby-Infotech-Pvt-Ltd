import { motion } from "framer-motion";
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

export const FAQSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Got questions? We've got answers. If you don't find what you're 
              looking for, feel free to reach out to our team.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-2xl font-display font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-2xl font-display font-bold text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
