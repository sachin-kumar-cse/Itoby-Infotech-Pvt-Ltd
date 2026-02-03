import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getJobById, jobOpenings } from "@/data/jobs";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign,
  CheckCircle,
  Star,
  Send,
  Building,
  Share2,
  Heart
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = id ? getJobById(id) : undefined;
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/careers">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at Itoby Infotech`,
        text: job.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  // Get related jobs (same department, excluding current)
  const relatedJobs = jobOpenings
    .filter((j) => j.department === job.department && j.id !== job.id)
    .slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              className="mb-6 -ml-2"
              onClick={() => navigate("/careers")}
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Careers
            </Button>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                {job.experience}
              </span>
              <span className="flex items-center gap-2">
                <DollarSign size={18} className="text-primary" />
                {job.salary}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#apply">Apply Now</a>
              </Button>
              <Button variant="outline" size="lg" onClick={handleShare}>
                <Share2 size={18} className="mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <ScrollReveal>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">About This Role</h2>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Skills */}
              <ScrollReveal delay={0.1}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Responsibilities */}
              <ScrollReveal delay={0.2}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">What You'll Do</h2>
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Requirements */}
              <ScrollReveal delay={0.3}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Nice to Have */}
              <ScrollReveal delay={0.4}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">Nice to Have</h2>
                    <ul className="space-y-3">
                      {job.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.5}>
                <Card className="bg-gradient-to-r from-primary/10 to-glow-secondary/10 border-primary/20">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">Benefits & Perks</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {job.benefits.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Heart size={20} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <ScrollReveal>
                <Card id="apply" className="bg-card border-border sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-4">Apply for this Position</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio / LinkedIn URL</Label>
                        <Input id="portfolio" type="url" placeholder="https://linkedin.com/in/johndoe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input id="experience" placeholder="5 years" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Cover Letter</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us why you're interested in this role..."
                          rows={4}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full" 
                        variant="hero"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By applying, you agree to our{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Company Info */}
              <ScrollReveal delay={0.1}>
                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold">Itoby Infotech</h4>
                        <p className="text-sm text-muted-foreground">Software & Digital Agency</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      A premier digital agency delivering exceptional web design, app development, 
                      and marketing solutions since 2013.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/about">Learn About Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Related Jobs */}
              {relatedJobs.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <h4 className="font-display text-lg font-bold mb-4">Related Positions</h4>
                      <div className="space-y-3">
                        {relatedJobs.map((relatedJob) => (
                          <Link
                            key={relatedJob.id}
                            to={`/careers/${relatedJob.id}`}
                            className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                          >
                            <h5 className="font-medium group-hover:text-primary transition-colors">
                              {relatedJob.title}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {relatedJob.location}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetails;
