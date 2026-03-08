import { useState, useEffect, useRef } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { 
  ArrowLeft, MapPin, Clock, Briefcase, DollarSign,
  CheckCircle, Star, Send, Building, Share2, Heart
} from "lucide-react";
import { toast } from "sonner";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  nice_to_have: string[];
  benefits: string[];
}

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchJob = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id || "")
        .eq("is_active", true)
        .maybeSingle();

      if (error || !data) {
        setJob(null);
      } else {
        setJob(data as Job);
        const { data: related } = await supabase
          .from("jobs")
          .select("*")
          .eq("is_active", true)
          .eq("department", data.department)
          .neq("id", data.id)
          .limit(2);
        setRelatedJobs((related as Job[]) || []);
      }
      setIsLoading(false);
    };
    fetchJob();
  }, [id]);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) return "Please upload a PDF or Word document (.pdf, .doc, .docx)";
    if (file.size > MAX_FILE_SIZE) return "File size must be less than 10MB";
    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);
    if (file) {
      const error = validateFile(file);
      if (error) {
        setFileError(error);
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setSelectedFile(file);
      }
    } else {
      setSelectedFile(null);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-muted-foreground">Loading job details...</p>
        </div>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
            <Button asChild><Link to="/careers">View All Jobs</Link></Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      let resumePath: string | null = null;
      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${job.id}/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('resumes').upload(filePath, selectedFile);
        if (uploadError) throw new Error("Failed to upload resume.");
        resumePath = filePath;
      }
      
      const { error: insertError } = await supabase.from('job_applications').insert({
        job_id: job.id,
        job_title: job.title,
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string || null,
        portfolio_url: formData.get('portfolio') as string || null,
        experience: formData.get('experience') as string,
        cover_letter: formData.get('message') as string || null,
        resume_path: resumePath,
      });
      
      if (insertError) throw new Error("Failed to submit application.");
      
      supabase.functions.invoke("send-job-application-email", {
        body: {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string || undefined,
          jobTitle: job.title,
          experience: formData.get('experience') as string,
          portfolioUrl: formData.get('portfolio') as string || undefined,
          coverLetter: formData.get('message') as string || undefined,
        },
      }).catch((err) => console.error("Email notification failed:", err));

      toast.success("Application submitted successfully!");
      (e.target as HTMLFormElement).reset();
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: `${job.title} at Itoby Infotech`, text: job.description, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-wide relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="ghost" className="mb-6 -ml-2" onClick={() => navigate("/careers")}>
              <ArrowLeft size={18} className="mr-2" /> Back to Careers
            </Button>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground mb-6">
              <span className="flex items-center gap-2"><MapPin size={18} className="text-primary" />{job.location}</span>
              <span className="flex items-center gap-2"><Clock size={18} className="text-primary" />{job.experience}</span>
              <span className="flex items-center gap-2"><DollarSign size={18} className="text-primary" />{job.salary}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild><a href="#apply">Apply Now</a></Button>
              <Button variant="outline" size="lg" onClick={handleShare}><Share2 size={18} className="mr-2" />Share</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">About This Role</h2>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {job.responsibilities.length > 0 && (
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
              )}

              {job.requirements.length > 0 && (
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
              )}

              {job.nice_to_have.length > 0 && (
                <ScrollReveal delay={0.4}>
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 sm:p-8">
                      <h2 className="font-display text-2xl font-bold mb-4">Nice to Have</h2>
                      <ul className="space-y-3">
                        {job.nice_to_have.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Star size={20} className="text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )}

              {job.benefits.length > 0 && (
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
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <Card id="apply" className="bg-card border-border sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-4">Apply for this Position</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio / LinkedIn URL</Label>
                        <Input id="portfolio" name="portfolio" type="url" placeholder="https://linkedin.com/in/johndoe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input id="experience" name="experience" placeholder="5 years" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV</Label>
                        <Input ref={fileInputRef} id="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                          className="cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
                        <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (max 10MB)</p>
                        {fileError && <p className="text-xs text-destructive">{fileError}</p>}
                        {selectedFile && !fileError && <p className="text-xs text-primary">✓ {selectedFile.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Cover Letter</Label>
                        <Textarea id="message" name="message" placeholder="Tell us why you're interested..." rows={4} />
                      </div>
                      <Button type="submit" className="w-full" variant="hero" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : <><Send size={18} className="mr-2" />Submit Application</>}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        By applying, you agree to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card className="bg-secondary/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold">Itoby Infotech</h4>
                        <p className="text-sm text-muted-foreground">Digital Solutions Company</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We're a leading digital solutions company specializing in web design, app development, and digital marketing.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-bold mb-8">Similar Openings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedJobs.map((rj) => (
                <Link key={rj.id} to={`/careers/${rj.id}`}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-all group cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">{rj.department}</Badge>
                        <Badge variant="outline" className="text-xs">{rj.type}</Badge>
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{rj.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin size={14} />{rj.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} />{rj.experience}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default JobDetails;
