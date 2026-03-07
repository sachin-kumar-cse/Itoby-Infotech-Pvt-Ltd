import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import restaurantImage from "@/assets/portfolio/restaurant-marketing.jpg";
import b2bSaasImage from "@/assets/portfolio/b2b-saas-marketing.jpg";
import { Button } from "@/components/ui/button";
import { 
  Search,
  Target,
  Facebook,
  Share2,
  TrendingUp,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  LineChart,
  Megaphone,
  Rocket
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/CTASection";
import { PricingSection } from "@/components/sections/PricingSection";

const offerings = [
  { icon: Search, title: "SEO Services", description: "Improve your search rankings and drive organic traffic with proven SEO strategies." },
  { icon: Target, title: "Google Ads", description: "Data-driven PPC campaigns that maximize your ROI and bring qualified leads." },
  { icon: Facebook, title: "Meta Ads", description: "Targeted Facebook and Instagram advertising to reach your ideal customers." },
  { icon: Share2, title: "Social Media Marketing", description: "Build brand awareness and engagement across all social platforms." },
  { icon: TrendingUp, title: "Lead Generation", description: "Strategic campaigns designed to capture and nurture high-quality leads." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Comprehensive insights and reporting to track campaign performance." },
];

const benefits = [
  "Increase organic traffic by up to 300%",
  "Lower cost per acquisition with optimized campaigns",
  "Real-time performance tracking and reporting",
  "Targeted audience segmentation",
  "A/B testing for continuous improvement",
  "Multi-channel marketing strategies",
];

const processSteps = [
  { step: "01", title: "Audit", description: "We analyze your current marketing efforts, competitors, and market opportunities.", icon: Lightbulb },
  { step: "02", title: "Strategy", description: "Develop a customized marketing plan aligned with your business goals.", icon: LineChart },
  { step: "03", title: "Execute", description: "Launch campaigns across selected channels with continuous optimization.", icon: Megaphone },
  { step: "04", title: "Scale", description: "Analyze results, refine strategies, and scale successful campaigns.", icon: Rocket },
];

const tools = [
  "Google Ads", "Google Analytics", "Meta Ads Manager", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Hootsuite"
];

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. You can expect to see initial improvements within 3-6 months, with significant results typically appearing after 6-12 months of consistent effort."
  },
  {
    question: "What's the minimum budget for Google Ads?",
    answer: "We recommend a minimum monthly ad spend of $1,000-$2,000 plus management fees. However, optimal budgets vary based on your industry, competition, and goals."
  },
  {
    question: "Do you offer social media management?",
    answer: "Yes, we provide comprehensive social media management including content creation, scheduling, community management, and paid advertising across all major platforms."
  },
  {
    question: "How do you measure campaign success?",
    answer: "We track key metrics aligned with your goals including traffic, conversions, cost per acquisition, ROI, engagement rates, and lead quality. You receive detailed monthly reports."
  },
  {
    question: "Can you work with our existing marketing team?",
    answer: "Absolutely! We frequently collaborate with in-house teams, providing specialized expertise and additional resources while ensuring seamless integration with your existing efforts."
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$1,500",
    period: "month",
    description: "Essential marketing for small businesses",
    features: [
      "SEO optimization (5 keywords)",
      "Social media management (2 platforms)",
      "Monthly blog post",
      "Basic analytics reporting",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "month",
    description: "Comprehensive marketing for scaling businesses",
    features: [
      "SEO optimization (15 keywords)",
      "Google Ads management ($2K spend)",
      "Social media (4 platforms)",
      "Content marketing (4 posts/month)",
      "Lead generation campaigns",
      "Weekly reporting calls",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$7,500",
    period: "month",
    description: "Full-service marketing for large organizations",
    features: [
      "Unlimited keyword SEO",
      "Multi-channel ad management",
      "Complete social media suite",
      "Video content creation",
      "Marketing automation",
      "Conversion rate optimization",
      "Custom integrations",
      "24/7 priority support",
    ],
  },
];

const caseStudies = [
  {
    title: "Local Restaurant Chain",
    category: "Local SEO & Ads",
    result: "250% increase in reservations",
    image: restaurantImage,
    path: "/portfolio/restaurant-chain",
  },
  {
    title: "B2B SaaS Company",
    category: "Lead Generation",
    result: "85% reduction in cost per lead",
    image: b2bSaasImage,
    path: "/portfolio/b2b-saas",
  },
];

const DigitalMarketing = () => {
  return (
    <Layout>
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
              Digital Marketing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Marketing That <span className="gradient-text">Brings Leads</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Data-driven marketing strategies that increase visibility, 
              drive qualified leads, and maximize your return on investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/portfolio">View Results</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Full-Service Marketing <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital marketing services designed to grow your 
              business and outperform competitors.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <offering.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Results That <span className="gradient-text">Speak</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our marketing strategies are designed to deliver measurable 
                results and sustainable growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 border border-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-7xl font-bold gradient-text">300%</span>
                  <p className="text-xl text-muted-foreground mt-4">Average Traffic Growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Strategy to <span className="gradient-text">Success</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our data-driven approach ensures optimal results at every stage.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-card border border-border"
              >
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Tools & Platforms
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Industry-Leading <span className="gradient-text">Tools</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection
        title="Monthly Plans"
        subtitle="Scalable marketing packages that grow with your business."
        tiers={pricingTiers}
      />

      {/* FAQs */}
      <section className="section-padding bg-card/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Case Studies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4">
              Related <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={study.path}
                  className="group block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{study.category}</span>
                    <h3 className="font-display text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 flex items-center gap-2">
                      <ArrowRight size={16} className="text-primary" />
                      {study.result}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default DigitalMarketing;
