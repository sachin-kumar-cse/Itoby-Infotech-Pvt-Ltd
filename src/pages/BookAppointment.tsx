import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, Building2, MessageSquare, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { format, addDays, isSunday } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const services = [
  "Web Design & Development",
  "Mobile App Development",
  "Digital Marketing",
  "Custom Software Solutions",
  "Microsoft 365 Services",
  "General Consultation",
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
];

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [message, setMessage] = useState("");

  const canProceedStep1 = name.trim() && email.trim() && email.includes("@") && service;
  const canProceedStep2 = date && timeSlot;

  const handleSubmit = async () => {
    if (!date || !timeSlot || !name || !email || !service) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("appointments").insert({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || null,
        company: company.trim() || null,
        service,
        date: format(date, "yyyy-MM-dd"),
        time_slot: timeSlot,
        message: message.trim(),
      });
      if (error) throw error;

      // Trigger webhook
      supabase.functions.invoke("send-webhook-notification", {
        body: {
          type: "appointment",
          data: { name, email, service, date: format(date, "PPP"), time_slot: timeSlot, company },
        },
      }).catch((e) => console.error("Webhook failed:", e));

      // Lead scoring
      supabase.functions.invoke("update-lead-score", {
        body: { email: email.trim(), name: name.trim(), action: "appointment_booked", service },
      }).catch((e) => console.error("Lead score update failed:", e));

      setIsSubmitted(true);
      toast.success("Appointment booked successfully!");
    } catch {
      toast.error("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <SEOHead title="Appointment Booked | Itoby Infotech" description="Your appointment has been booked." path="/book-appointment" />
        <section className="section-padding min-h-[70vh] flex items-center justify-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Appointment Confirmed! 🎉</h2>
            <p className="text-muted-foreground mb-2">
              <strong>{format(date!, "PPPP")}</strong> at <strong>{timeSlot}</strong>
            </p>
            <p className="text-muted-foreground mb-6">for <strong>{service}</strong></p>
            <p className="text-sm text-muted-foreground mb-8">
              We'll send a confirmation email to <strong>{email}</strong> shortly. Our team will reach out before the meeting.
            </p>
            <Button variant="hero" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Book a Discovery Call | Itoby Infotech"
        description="Schedule a free discovery call with Itoby Infotech. Discuss your project requirements with our experts."
        path="/book-appointment"
      />

      <section className="section-padding min-h-screen pt-28">
        <div className="container-wide max-w-3xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              📅 Schedule a Call
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Book a Free Discovery Call
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Let's discuss your project. Pick a time that works for you and our team will be ready.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                  step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>{s}</div>
                {s < 3 && <div className={cn("w-12 h-0.5 rounded-full transition-all", step > s ? "bg-primary" : "bg-muted")} />}
              </div>
            ))}
          </div>

          {/* Steps */}
          <motion.div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" /> Your Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <Input placeholder="Your Company" value={company} onChange={(e) => setCompany(e.target.value)} className="bg-background" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Service Interested In *</label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-background"><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="hero" onClick={() => setStep(2)} disabled={!canProceedStep1}>
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" /> Pick Date & Time
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Select Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                            <Calendar className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => d < addDays(new Date(), 1) || isSunday(d) || d > addDays(new Date(), 60)}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Select Time Slot * <span className="text-xs text-muted-foreground">(IST)</span></label>
                      <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto pr-1">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setTimeSlot(slot)}
                            className={cn(
                              "px-3 py-2 rounded-lg text-sm font-medium border transition-all",
                              timeSlot === slot
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background border-border text-foreground hover:border-primary/50"
                            )}
                          >
                            <Clock className="w-3 h-3 inline mr-1" />{slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <Button variant="hero" onClick={() => setStep(3)} disabled={!canProceedStep2}>
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" /> Confirm & Book
                  </h2>

                  {/* Summary */}
                  <div className="bg-muted/50 rounded-xl p-5 space-y-3">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Booking Summary</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="text-muted-foreground">Name:</span> <span className="font-medium text-foreground">{name}</span></div>
                      <div><span className="text-muted-foreground">Email:</span> <span className="font-medium text-foreground">{email}</span></div>
                      <div><span className="text-muted-foreground">Service:</span> <span className="font-medium text-foreground">{service}</span></div>
                      <div><span className="text-muted-foreground">Date:</span> <span className="font-medium text-foreground">{date ? format(date, "PPP") : ""}</span></div>
                      <div><span className="text-muted-foreground">Time:</span> <span className="font-medium text-foreground">{timeSlot} IST</span></div>
                      {company && <div><span className="text-muted-foreground">Company:</span> <span className="font-medium text-foreground">{company}</span></div>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Notes (Optional)</label>
                    <Textarea placeholder="Tell us about your project or questions..." value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="bg-background" />
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    <Button variant="hero" onClick={handleSubmit} disabled={isSubmitting}>
                      {isSubmitting ? "Booking..." : "Confirm Booking ✓"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
