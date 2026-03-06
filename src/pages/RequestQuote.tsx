import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Globe,
  Smartphone,
  Megaphone,
  Code,
  Shield,
  IndianRupee,
  Clock,
  Sparkles,
  Send,
} from "lucide-react";

const services = [
  { id: "web-design", label: "Web Design & Development", icon: Globe, price: 25000 },
  { id: "mobile-app", label: "Mobile App Development", icon: Smartphone, price: 50000 },
  { id: "digital-marketing", label: "Digital Marketing", icon: Megaphone, price: 15000 },
  { id: "software-solutions", label: "Custom Software", icon: Code, price: 75000 },
  { id: "microsoft-365", label: "Microsoft 365 Solutions", icon: Shield, price: 20000 },
];

const budgets = [
  { id: "under-50k", label: "Under ₹50,000", range: [0, 50000] },
  { id: "50k-1l", label: "₹50,000 - ₹1,00,000", range: [50000, 100000] },
  { id: "1l-3l", label: "₹1,00,000 - ₹3,00,000", range: [100000, 300000] },
  { id: "3l-5l", label: "₹3,00,000 - ₹5,00,000", range: [300000, 500000] },
  { id: "5l-plus", label: "₹5,00,000+", range: [500000, 1000000] },
];

const timelines = [
  { id: "urgent", label: "Urgent (1-2 weeks)", multiplier: 1.5 },
  { id: "standard", label: "Standard (1-2 months)", multiplier: 1.0 },
  { id: "relaxed", label: "Relaxed (2-4 months)", multiplier: 0.9 },
  { id: "flexible", label: "Flexible / No deadline", multiplier: 0.85 },
];

const RequestQuote = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    const baseTotal = selectedServices.reduce((sum, id) => {
      const service = services.find((s) => s.id === id);
      return sum + (service?.price || 0);
    }, 0);
    const timeline = timelines.find((t) => t.id === selectedTimeline);
    const multiplier = timeline?.multiplier || 1;
    const estimated = Math.round(baseTotal * multiplier);
    const min = Math.round(estimated * 0.8);
    const max = Math.round(estimated * 1.3);
    return { min, max, estimated };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const canProceed = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return selectedBudget && selectedTimeline;
    if (step === 3) return name && email && description;
    return false;
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setIsSubmitting(true);

    const estimate = calculateEstimate();
    const estimatedCost = `${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}`;

    try {
      const { error } = await supabase.from("quote_requests").insert({
        name,
        email,
        phone: phone || null,
        company: company || null,
        services: selectedServices,
        budget: selectedBudget,
        timeline: selectedTimeline,
        description,
        estimated_cost: estimatedCost,
      });

      if (error) throw error;
      setIsSubmitted(true);
      toast.success("Quote request submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const estimate = calculateEstimate();

  if (isSubmitted) {
    return (
    <Layout>
      <SEOHead title="Request a Quote" description="Get a free project estimate from Itoby Infotech. Select your services, budget, and timeline to receive a custom quote." path="/request-quote" />
        <section className="section-padding min-h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-lg mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">
              Thank You! 🎉
            </h2>
            <p className="text-muted-foreground mb-2">
              Your quote request has been submitted successfully.
            </p>
            <p className="text-muted-foreground mb-6">
              Estimated project cost:{" "}
              <span className="text-primary font-semibold">
                {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
              </span>
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Our team will review your requirements and get back to you within 24 hours.
            </p>
            <Button variant="default" onClick={() => window.location.href = "/"}>
              Back to Home
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get Started
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Request a <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your project and get an instant estimate. Our team will follow up with a detailed proposal.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 sm:w-24 h-1 rounded-full transition-all ${
                      step > s ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Services */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-2xl font-bold">
                      Select Services You Need
                    </h2>
                    <p className="text-muted-foreground">
                      Choose one or more services for your project.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                          <motion.button
                            key={service.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleService(service.id)}
                            className={`p-5 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                                : "border-border bg-card hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  isSelected
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-muted-foreground"
                                }`}
                              >
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm">{service.label}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Starting from {formatCurrency(service.price)}
                                </p>
                              </div>
                              {isSelected && (
                                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Budget & Timeline */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">Budget Range</h2>
                      <p className="text-muted-foreground mb-4">
                        What's your approximate budget for this project?
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {budgets.map((b) => (
                          <motion.button
                            key={b.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedBudget(b.id)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                              selectedBudget === b.id
                                ? "border-primary bg-primary/10"
                                : "border-border bg-card hover:border-primary/50"
                            }`}
                          >
                            <IndianRupee
                              className={`w-5 h-5 ${
                                selectedBudget === b.id
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                            <span className="font-medium text-sm">{b.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="font-display text-2xl font-bold mb-2">Timeline</h2>
                      <p className="text-muted-foreground mb-4">
                        When do you need the project completed?
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {timelines.map((t) => (
                          <motion.button
                            key={t.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedTimeline(t.id)}
                            className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                              selectedTimeline === t.id
                                ? "border-primary bg-primary/10"
                                : "border-border bg-card hover:border-primary/50"
                            }`}
                          >
                            <Clock
                              className={`w-5 h-5 ${
                                selectedTimeline === t.id
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                            <span className="font-medium text-sm">{t.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-2xl font-bold">Your Details</h2>
                    <p className="text-muted-foreground">
                      Tell us about yourself and your project requirements.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                        rows={5}
                        required
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                {step < 3 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Estimate Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-lg">Live Estimate</h3>
                </div>

                {selectedServices.length > 0 ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Selected Services</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map((id) => {
                          const service = services.find((s) => s.id === id);
                          return (
                            <Badge key={id} variant="secondary" className="text-xs">
                              {service?.label}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>

                    {selectedTimeline && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                        <p className="text-sm font-medium">
                          {timelines.find((t) => t.id === selectedTimeline)?.label}
                        </p>
                      </div>
                    )}

                    <div className="border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground mb-2">
                        Estimated Cost Range
                      </p>
                      <p className="text-2xl font-display font-bold text-primary">
                        {formatCurrency(estimate.min)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        to {formatCurrency(estimate.max)}
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      * This is an approximate estimate. Final pricing may vary based on project complexity.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <IndianRupee className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Select services to see estimate</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RequestQuote;
