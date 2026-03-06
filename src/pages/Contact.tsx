import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { ContactInfoCards } from "@/components/sections/ContactInfoCards";
import { OfficeLocations } from "@/components/sections/OfficeLocations";
import { FAQSection } from "@/components/sections/FAQSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@itobyinfotech.in",
    href: "mailto:info@itobyinfotech.in",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Patna, Bihar, India",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919876543210",
  },
];

const services = [
  "Web Design & Development",
  "Mobile App Development",
  "Digital Marketing",
  "Software Solutions",
  "Microsoft Office 365",
  "UI/UX Design",
  "E-commerce Development",
  "API Development",
  "Cloud Solutions",
  "Other",
];

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          service: formData.service,
          message: `Company: ${formData.company || 'N/A'}\nBudget: ${formData.budget || 'N/A'}\n\n${formData.message.trim()}`,
        });

      if (dbError) {
        throw new Error("Failed to save your message. Please try again.");
      }

      // Send email notifications
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          service: formData.service,
          message: formData.message.trim(),
        },
      });

      if (emailError) {
        console.error("Email notification failed:", emailError);
      }

      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully! ✨",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", service: "", company: "", budget: "", message: "" });
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
    <Layout>
      <SEOHead title="Contact Us" description="Get in touch with Itoby Infotech. Reach us via phone, email, or WhatsApp for web design, app development, and digital marketing inquiries." path="/contact" jsonLd={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Itoby Infotech" }} />
        <section className="min-h-screen flex items-center justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="text-primary" size={48} />
            </motion.div>
            <h1 className="font-display text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8">
              Your message has been sent successfully. Our team will review your inquiry 
              and get back to you within 24-48 hours.
            </p>
            <Button variant="hero" onClick={() => setIsSuccess(false)}>
              Send Another Message
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title="Contact Us" description="Get in touch with Itoby Infotech for web design, app development, and digital marketing inquiries." path="/contact" />
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
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Share your ideas with us 
              and let's create exceptional digital experiences together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <ContactInfoCards />

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Ready to start your project? Reach out to us through any of the following 
                  channels or fill out the form and we'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <item.icon className="text-primary group-hover:text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.97175012093!2d85.05584705!3d25.612677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1704700000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Itoby Infotech Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold mb-2">Tell Us About Your Project</h2>
                <p className="text-muted-foreground mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`h-12 bg-secondary border-border ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`h-12 bg-secondary border-border ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`h-12 bg-secondary border-border ${errors.phone ? 'border-destructive' : ''}`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12 bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className={`h-12 bg-secondary border-border ${errors.service ? 'border-destructive' : ''}`}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-destructive text-sm">{errors.service}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Estimated Budget
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger className="h-12 bg-secondary border-border">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`min-h-[150px] bg-secondary border-border resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <OfficeLocations />

      {/* FAQ Section */}
      <FAQSection />

      {/* Schedule Meeting CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto p-10 rounded-2xl bg-card border border-border"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Prefer a <span className="gradient-text">Direct Call?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Schedule a free 30-minute consultation with our team. We'll discuss your 
              requirements and provide expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="xl">
                Schedule a Meeting
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="tel:+919876543210">
                  <Phone size={20} />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
