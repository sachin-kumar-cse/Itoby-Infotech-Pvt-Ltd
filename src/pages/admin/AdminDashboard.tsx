import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Mail, Briefcase, Eye, EyeOff, Trash2, Download, Calendar, User,
  Phone, MessageSquare, FileText, ExternalLink, RefreshCw, Settings,
  Shield, Lock, CheckCircle, Sparkles, TrendingUp, Activity,
  IndianRupee, BarChart3,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SubscribersTab } from "@/components/admin/SubscribersTab";
import { WebAnalyticsTab } from "@/components/admin/WebAnalyticsTab";
import { AnalyticsTab } from "@/components/admin/AnalyticsTab";
import { BlogManagementTab } from "@/components/admin/BlogManagementTab";
import { JobsManagementTab } from "@/components/admin/JobsManagementTab";
import { ProjectsManagementTab } from "@/components/admin/ProjectsManagementTab";
import { DripCampaignTab } from "@/components/admin/DripCampaignTab";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminMobileNav } from "@/components/admin/AdminMobileNav";
import { cn } from "@/lib/utils";

interface ContactSubmission {
  id: string; name: string; email: string; phone: string | null;
  service: string; message: string; is_read: boolean; created_at: string;
}
interface JobApplication {
  id: string; job_id: string; job_title: string; name: string; email: string;
  phone: string | null; portfolio_url: string | null; experience: string;
  cover_letter: string | null; resume_path: string | null; is_read: boolean; created_at: string;
}
interface QuoteRequest {
  id: string; name: string; email: string; phone: string | null; company: string | null;
  services: string[]; budget: string; timeline: string; description: string;
  estimated_cost: string | null; is_read: boolean; created_at: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tabMeta: Record<string, { title: string; desc: string }> = {
  overview: { title: "Dashboard Overview", desc: "Welcome back! Here's what's happening." },
  contacts: { title: "Contact Submissions", desc: "Manage and respond to contact inquiries." },
  quotes: { title: "Quote Requests", desc: "Review and manage project quote requests." },
  applications: { title: "Job Applications", desc: "Review and process job applications." },
  "blog-mgmt": { title: "Blog Management", desc: "Create, edit and manage blog posts." },
  "projects-mgmt": { title: "Portfolio Projects", desc: "Add and manage portfolio case studies." },
  "jobs-mgmt": { title: "Job Postings", desc: "Manage career listings and job openings." },
  subscribers: { title: "Newsletter Subscribers", desc: "View and manage newsletter subscribers." },
  "drip-campaigns": { title: "Drip Campaigns", desc: "Create and manage automated email sequences." },
  analytics: { title: "Analytics", desc: "Visualize submission trends and insights." },
  "web-analytics": { title: "Website Analytics", desc: "Monitor website traffic via Google Analytics." },
  profile: { title: "Profile Settings", desc: "Manage your account settings." },
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [userEmail, setUserEmail] = useState("");
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  useEffect(() => { checkAuth(); fetchData(); }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/admin"); return; }
    setUserEmail(session.user.email || "");
    const { data: roleData } = await supabase
      .from('user_roles').select('role')
      .eq('user_id', session.user.id).eq('role', 'admin').maybeSingle();
    if (!roleData) { await supabase.auth.signOut(); navigate("/admin"); }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [contactsRes, applicationsRes, quotesRes] = await Promise.all([
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('job_applications').select('*').order('created_at', { ascending: false }),
        supabase.from('quote_requests').select('*').order('created_at', { ascending: false }),
      ]);
      if (contactsRes.error) throw contactsRes.error;
      if (applicationsRes.error) throw applicationsRes.error;
      if (quotesRes.error) throw quotesRes.error;
      setContacts(contactsRes.data || []);
      setApplications(applicationsRes.data || []);
      setQuotes((quotesRes.data as any[]) || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true); await fetchData(); setRefreshing(false); toast.success("Data refreshed");
  };
  const handleLogout = async () => { await supabase.auth.signOut(); navigate("/admin"); };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { toast.error("New passwords don't match"); return; }
    if (newPassword.length < 8) { toast.error("Password must be at least 8 characters"); return; }
    setIsUpdatingPassword(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      toast.success("Password updated successfully!");
      setShowPasswordDialog(false); setNewPassword(""); setConfirmPassword("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update password");
    } finally { setIsUpdatingPassword(false); }
  };

  const markContactAsRead = async (contact: ContactSubmission) => {
    if (!contact.is_read) {
      await supabase.from('contact_submissions').update({ is_read: true }).eq('id', contact.id);
      setContacts(prev => prev.map(c => c.id === contact.id ? { ...c, is_read: true } : c));
    }
    setSelectedContact(contact);
  };
  const markApplicationAsRead = async (application: JobApplication) => {
    if (!application.is_read) {
      await supabase.from('job_applications').update({ is_read: true }).eq('id', application.id);
      setApplications(prev => prev.map(a => a.id === application.id ? { ...a, is_read: true } : a));
    }
    setSelectedApplication(application);
  };
  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    await supabase.from('contact_submissions').delete().eq('id', id);
    setContacts(prev => prev.filter(c => c.id !== id));
    setSelectedContact(null); toast.success("Submission deleted");
  };
  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    await supabase.from('job_applications').delete().eq('id', id);
    setApplications(prev => prev.filter(a => a.id !== id));
    setSelectedApplication(null); toast.success("Application deleted");
  };
  const markQuoteAsRead = async (quote: QuoteRequest) => {
    if (!quote.is_read) {
      await supabase.from('quote_requests').update({ is_read: true }).eq('id', quote.id);
      setQuotes(prev => prev.map(q => q.id === quote.id ? { ...q, is_read: true } : q));
    }
    setSelectedQuote(quote);
  };
  const deleteQuote = async (id: string) => {
    if (!confirm("Are you sure you want to delete this quote request?")) return;
    await supabase.from('quote_requests').delete().eq('id', id);
    setQuotes(prev => prev.filter(q => q.id !== id));
    setSelectedQuote(null); toast.success("Quote request deleted");
  };

  // Bulk actions
  const bulkMarkContactsRead = async () => {
    const unread = contacts.filter(c => !c.is_read);
    if (unread.length === 0) return;
    const ids = unread.map(c => c.id);
    const { error } = await supabase.from('contact_submissions').update({ is_read: true }).in('id', ids);
    if (!error) {
      setContacts(prev => prev.map(c => ({ ...c, is_read: true })));
      toast.success(`${unread.length} contacts marked as read`);
    }
  };
  const bulkMarkApplicationsRead = async () => {
    const unread = applications.filter(a => !a.is_read);
    if (unread.length === 0) return;
    const ids = unread.map(a => a.id);
    const { error } = await supabase.from('job_applications').update({ is_read: true }).in('id', ids);
    if (!error) {
      setApplications(prev => prev.map(a => ({ ...a, is_read: true })));
      toast.success(`${unread.length} applications marked as read`);
    }
  };
  const bulkMarkQuotesRead = async () => {
    const unread = quotes.filter(q => !q.is_read);
    if (unread.length === 0) return;
    const ids = unread.map(q => q.id);
    const { error } = await supabase.from('quote_requests').update({ is_read: true }).in('id', ids);
    if (!error) {
      setQuotes(prev => prev.map(q => ({ ...q, is_read: true })));
      toast.success(`${unread.length} quotes marked as read`);
    }
  };

  const downloadResume = async (resumePath: string) => {
    try {
      const { data, error } = await supabase.storage.from('resumes').download(resumePath);
      if (error) throw error;
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url; a.download = resumePath.split('/').pop() || 'resume';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch { toast.error("Failed to download resume"); }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });

  const unreadContacts = contacts.filter(c => !c.is_read).length;
  const unreadApplications = applications.filter(a => !a.is_read).length;
  const unreadQuotes = quotes.filter(q => !q.is_read).length;

  const chartData = useMemo(() => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(); date.setDate(date.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });
    return last7Days.map(day => ({
      name: new Date(day).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
      contacts: contacts.filter(c => c.created_at.startsWith(day)).length,
      applications: applications.filter(a => a.created_at.startsWith(day)).length,
      quotes: quotes.filter(q => q.created_at.startsWith(day)).length,
    }));
  }, [contacts, applications, quotes]);

  const serviceDistribution = useMemo(() => {
    const map: Record<string, number> = {};
    contacts.forEach(c => { map[c.service] = (map[c.service] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [contacts]);

  const CHART_COLORS = ["hsl(75, 100%, 50%)", "hsl(200, 80%, 50%)", "hsl(150, 70%, 45%)", "hsl(40, 90%, 55%)", "hsl(300, 70%, 50%)"];

  const stats = [
    { title: "Total Inquiries", value: contacts.length + applications.length + quotes.length, icon: Activity, gradient: "from-primary/20 via-primary/10 to-transparent", iconColor: "text-primary" },
    { title: "Contact Submissions", value: contacts.length, icon: Mail, gradient: "from-blue-500/20 via-blue-500/10 to-transparent", iconColor: "text-blue-500", badge: unreadContacts > 0 ? unreadContacts : null },
    { title: "Quote Requests", value: quotes.length, icon: IndianRupee, gradient: "from-violet-500/20 via-violet-500/10 to-transparent", iconColor: "text-violet-500", badge: unreadQuotes > 0 ? unreadQuotes : null },
    { title: "Job Applications", value: applications.length, icon: Briefcase, gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent", iconColor: "text-emerald-500", badge: unreadApplications > 0 ? unreadApplications : null },
  ];

  const meta = tabMeta[activeTab] || tabMeta.overview;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-glow-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Desktop Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userEmail={userEmail}
        unreadContacts={unreadContacts}
        unreadApplications={unreadApplications}
        unreadQuotes={unreadQuotes}
        onLogout={handleLogout}
      />

      {/* Mobile Nav */}
      <AdminMobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userEmail={userEmail}
        unreadContacts={unreadContacts}
        unreadApplications={unreadApplications}
        unreadQuotes={unreadQuotes}
        onLogout={handleLogout}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 relative z-10 max-w-7xl mx-auto">
          {/* Desktop Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hidden lg:flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="font-display text-3xl font-bold mb-1">{meta.title}</h1>
              <p className="text-muted-foreground text-sm">{meta.desc}</p>
            </div>
            <Button variant="outline" onClick={handleRefresh} disabled={refreshing} className="gap-2">
              <RefreshCw className={cn("w-4 h-4", refreshing && "animate-spin")} />
              Refresh
            </Button>
          </motion.div>

          <AnimatePresence mode="wait">
            {/* Overview */}
            {activeTab === "overview" && (
              <motion.div key="overview" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }} className="space-y-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <motion.div key={stat.title} variants={itemVariants}>
                      <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
                        <CardContent className="p-6 relative">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                              <p className="text-4xl font-display font-bold">{stat.value}</p>
                            </div>
                            <div className="relative">
                              <div className={`w-12 h-12 rounded-2xl bg-background/50 flex items-center justify-center ${stat.iconColor}`}>
                                <stat.icon className="w-6 h-6" />
                              </div>
                              {stat.badge && (
                                <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 animate-pulse">{stat.badge}</Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div><CardTitle className="text-lg">Recent Contacts</CardTitle><CardDescription>Latest contact form submissions</CardDescription></div>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("contacts")}>View All</Button>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {contacts.slice(0, 4).map((contact, index) => (
                          <motion.div key={contact.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                            onClick={() => markContactAsRead(contact)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${contact.is_read ? "bg-secondary/30 border-border/50" : "bg-primary/5 border-primary/20"}`}>
                            <div className="flex items-center gap-3">
                              <Avatar className="w-10 h-10"><AvatarFallback className="bg-primary/10 text-primary text-sm">{contact.name.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="font-medium text-sm truncate">{contact.name}</p>
                                  {!contact.is_read && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                                </div>
                                <p className="text-xs text-muted-foreground truncate">{contact.service}</p>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">{new Date(contact.created_at).toLocaleDateString()}</span>
                            </div>
                          </motion.div>
                        ))}
                        {contacts.length === 0 && (
                          <div className="text-center py-8 text-muted-foreground"><Mail className="w-10 h-10 mx-auto mb-2 opacity-50" /><p>No contacts yet</p></div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div><CardTitle className="text-lg">Recent Applications</CardTitle><CardDescription>Latest job applications received</CardDescription></div>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab("applications")}>View All</Button>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {applications.slice(0, 4).map((app, index) => (
                          <motion.div key={app.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}
                            onClick={() => markApplicationAsRead(app)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${app.is_read ? "bg-secondary/30 border-border/50" : "bg-primary/5 border-primary/20"}`}>
                            <div className="flex items-center gap-3">
                              <Avatar className="w-10 h-10"><AvatarFallback className="bg-emerald-500/10 text-emerald-500 text-sm">{app.name.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="font-medium text-sm truncate">{app.name}</p>
                                  {!app.is_read && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                                </div>
                                <p className="text-xs text-muted-foreground truncate">{app.job_title}</p>
                              </div>
                              {app.resume_path && <Badge variant="secondary" className="text-xs"><FileText className="w-3 h-3 mr-1" />CV</Badge>}
                            </div>
                          </motion.div>
                        ))}
                        {applications.length === 0 && (
                          <div className="text-center py-8 text-muted-foreground"><Briefcase className="w-10 h-10 mx-auto mb-2 opacity-50" /><p>No applications yet</p></div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Contacts Tab */}
            {activeTab === "contacts" && (
              <motion.div key="contacts" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" /> Contact Form Submissions
                      {unreadContacts > 0 && <Badge variant="destructive" className="ml-2">{unreadContacts} new</Badge>}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <CardDescription>All contact inquiries from your website</CardDescription>
                      {unreadContacts > 0 && (
                        <Button variant="outline" size="sm" className="text-xs gap-1.5 ml-auto" onClick={bulkMarkContactsRead}>
                          <CheckCircle className="w-3.5 h-3.5" /> Mark All Read
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="text-center py-12"><RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary" /><p className="mt-3 text-muted-foreground">Loading...</p></div>
                    ) : contacts.length === 0 ? (
                      <div className="text-center py-16">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Mail className="w-10 h-10 text-primary" /></div>
                        <h3 className="font-medium mb-1">No submissions yet</h3><p className="text-sm text-muted-foreground">Contact form submissions will appear here</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {contacts.map((contact, index) => (
                          <motion.div key={contact.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}
                            onClick={() => markContactAsRead(contact)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${contact.is_read ? "bg-secondary/30 border-border/50" : "bg-primary/5 border-primary/20 shadow-md shadow-primary/5"}`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4 flex-1 min-w-0">
                                <Avatar className="w-12 h-12 shrink-0"><AvatarFallback className={`text-lg ${contact.is_read ? 'bg-secondary' : 'bg-primary/10 text-primary'}`}>{contact.name.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold truncate">{contact.name}</h4>
                                    {!contact.is_read && <Badge variant="default" className="text-xs animate-pulse">New</Badge>}
                                  </div>
                                  <p className="text-sm text-muted-foreground truncate mb-2">{contact.email}</p>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <Badge variant="secondary">{contact.service}</Badge>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(contact.created_at)}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" onClick={(e) => { e.stopPropagation(); markContactAsRead(contact); }}><Eye className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" className="hover:bg-destructive/10 hover:text-destructive" onClick={(e) => { e.stopPropagation(); deleteContact(contact.id); }}><Trash2 className="w-4 h-4" /></Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <motion.div key="applications" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-emerald-500" /> Job Applications
                      {unreadApplications > 0 && <Badge variant="destructive" className="ml-2">{unreadApplications} new</Badge>}
                    </CardTitle>
                    <CardDescription>Review and manage all job applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="text-center py-12"><RefreshCw className="w-8 h-8 animate-spin mx-auto text-emerald-500" /><p className="mt-3 text-muted-foreground">Loading...</p></div>
                    ) : applications.length === 0 ? (
                      <div className="text-center py-16">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4"><Briefcase className="w-10 h-10 text-emerald-500" /></div>
                        <h3 className="font-medium mb-1">No applications yet</h3><p className="text-sm text-muted-foreground">Job applications will appear here</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {applications.map((application, index) => (
                          <motion.div key={application.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}
                            onClick={() => markApplicationAsRead(application)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${application.is_read ? "bg-secondary/30 border-border/50" : "bg-emerald-500/5 border-emerald-500/20 shadow-md shadow-emerald-500/5"}`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-4 flex-1 min-w-0">
                                <Avatar className="w-12 h-12 shrink-0"><AvatarFallback className={`text-lg ${application.is_read ? 'bg-secondary' : 'bg-emerald-500/10 text-emerald-500'}`}>{application.name.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold truncate">{application.name}</h4>
                                    {!application.is_read && <Badge variant="default" className="text-xs bg-emerald-500 animate-pulse">New</Badge>}
                                  </div>
                                  <p className="text-sm text-muted-foreground truncate mb-2">{application.email}</p>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <Badge variant="outline">{application.job_title}</Badge>
                                    <Badge variant="secondary">{application.experience}</Badge>
                                    {application.resume_path && <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30"><FileText className="w-3 h-3 mr-1" />Resume</Badge>}
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(application.created_at)}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                {application.resume_path && <Button variant="ghost" size="icon" className="hover:bg-emerald-500/10 hover:text-emerald-500" onClick={(e) => { e.stopPropagation(); downloadResume(application.resume_path!); }}><Download className="w-4 h-4" /></Button>}
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" onClick={(e) => { e.stopPropagation(); markApplicationAsRead(application); }}><Eye className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" className="hover:bg-destructive/10 hover:text-destructive" onClick={(e) => { e.stopPropagation(); deleteApplication(application.id); }}><Trash2 className="w-4 h-4" /></Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Quotes Tab */}
            {activeTab === "quotes" && (
              <motion.div key="quotes" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IndianRupee className="w-5 h-5 text-violet-500" /> Quote Requests
                      {unreadQuotes > 0 && <Badge variant="destructive" className="ml-2">{unreadQuotes} new</Badge>}
                    </CardTitle>
                    <CardDescription>Review project quote requests from potential clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {quotes.length === 0 ? (
                      <div className="text-center py-16">
                        <div className="w-20 h-20 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-4"><IndianRupee className="w-10 h-10 text-violet-500" /></div>
                        <h3 className="font-medium mb-1">No quote requests yet</h3><p className="text-sm text-muted-foreground">Quote requests will appear here</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {quotes.map((quote, index) => (
                          <motion.div key={quote.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}
                            onClick={() => markQuoteAsRead(quote)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${quote.is_read ? "bg-secondary/30 border-border/50" : "bg-violet-500/5 border-violet-500/20 shadow-md shadow-violet-500/5"}`}>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold truncate">{quote.name}</h4>
                                  {!quote.is_read && <Badge variant="default" className="text-xs animate-pulse">New</Badge>}
                                </div>
                                <p className="text-sm text-muted-foreground truncate mb-2">{quote.email}</p>
                                <div className="flex flex-wrap items-center gap-2">
                                  {quote.services.map(s => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}
                                  {quote.estimated_cost && <Badge variant="outline" className="text-xs"><IndianRupee className="w-3 h-3 mr-1" />{quote.estimated_cost}</Badge>}
                                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(quote.created_at)}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="icon" className="hover:bg-destructive/10 hover:text-destructive" onClick={(e) => { e.stopPropagation(); deleteQuote(quote.id); }}><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === "subscribers" && <SubscribersTab />}
            {activeTab === "blog-mgmt" && <BlogManagementTab />}
            {activeTab === "projects-mgmt" && <ProjectsManagementTab />}
            {activeTab === "jobs-mgmt" && <JobsManagementTab />}
            {activeTab === "web-analytics" && <WebAnalyticsTab />}

            {/* Drip Campaigns Tab */}
            {activeTab === "drip-campaigns" && (
              <DripCampaignTab />
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <AnalyticsTab contacts={contacts} applications={applications} quotes={quotes} />
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <motion.div key="profile" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }} className="max-w-2xl space-y-6">
                <motion.div variants={itemVariants}>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                    <div className="h-24 bg-gradient-to-r from-primary via-primary/80 to-glow-secondary relative" />
                    <CardContent className="relative pt-0">
                      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12">
                        <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
                          <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">{userEmail.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="text-center sm:text-left pb-2">
                          <h2 className="font-display text-2xl font-bold">{userEmail.split('@')[0]}</h2>
                          <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-2"><Shield className="w-4 h-4 text-primary" /> Administrator</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><User className="w-5 h-5 text-primary" />Account Information</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4">
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                          <Label className="text-xs text-muted-foreground mb-1 block">Email Address</Label>
                          <p className="font-medium">{userEmail}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                          <Label className="text-xs text-muted-foreground mb-1 block">Role</Label>
                          <Badge variant="default" className="bg-primary"><Shield className="w-3 h-3 mr-1" />Administrator</Badge>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                          <Label className="text-xs text-muted-foreground mb-1 block">Account Status</Label>
                          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /><span className="font-medium text-emerald-500">Active</span></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader><CardTitle className="flex items-center gap-2 text-lg"><Lock className="w-5 h-5 text-primary" />Security Settings</CardTitle><CardDescription>Manage your account security</CardDescription></CardHeader>
                    <CardContent>
                      <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-center justify-between">
                        <div><p className="font-medium">Password</p><p className="text-sm text-muted-foreground">Last changed: Unknown</p></div>
                        <Button onClick={() => setShowPasswordDialog(true)} variant="outline"><Lock className="w-4 h-4 mr-2" />Change Password</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="border-destructive/30 bg-destructive/5">
                    <CardHeader><CardTitle className="flex items-center gap-2 text-lg text-destructive"><Settings className="w-5 h-5" />Danger Zone</CardTitle></CardHeader>
                    <CardContent>
                      <Button variant="destructive" onClick={handleLogout} className="w-full sm:w-auto"><Sparkles className="w-4 h-4 mr-2" />Sign Out of Account</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Contact Detail Dialog */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-lg bg-card/95 backdrop-blur-xl border-border/50">
          <DialogHeader><DialogTitle className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" />Contact Submission</DialogTitle></DialogHeader>
          {selectedContact && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14"><AvatarFallback className="bg-primary/10 text-primary text-xl">{selectedContact.name.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
                <div><h3 className="font-semibold text-lg">{selectedContact.name}</h3><p className="text-sm text-muted-foreground">{selectedContact.email}</p></div>
              </div>
              {selectedContact.phone && <div className="flex items-center gap-2 text-sm p-3 rounded-lg bg-secondary/50"><Phone className="w-4 h-4 text-muted-foreground" /><span>{selectedContact.phone}</span></div>}
              <div className="flex items-center gap-2"><Badge variant="secondary">{selectedContact.service}</Badge><span className="text-xs text-muted-foreground">{formatDate(selectedContact.created_at)}</span></div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                <div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-primary mt-0.5" /><div><p className="text-xs text-muted-foreground mb-2">Message</p><p className="text-sm whitespace-pre-wrap leading-relaxed">{selectedContact.message}</p></div></div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="default" className="flex-1" asChild><a href={`mailto:${selectedContact.email}`}><Mail className="w-4 h-4 mr-2" />Reply via Email</a></Button>
                <Button variant="destructive" size="icon" onClick={() => deleteContact(selectedContact.id)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Application Detail Dialog */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="max-w-lg bg-card/95 backdrop-blur-xl border-border/50">
          <DialogHeader><DialogTitle className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-emerald-500" />Job Application</DialogTitle></DialogHeader>
          {selectedApplication && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14"><AvatarFallback className="bg-emerald-500/10 text-emerald-500 text-xl">{selectedApplication.name.charAt(0).toUpperCase()}</AvatarFallback></Avatar>
                <div><h3 className="font-semibold text-lg">{selectedApplication.name}</h3><p className="text-sm text-muted-foreground">{selectedApplication.email}</p></div>
              </div>
              <div className="flex flex-wrap gap-2"><Badge variant="outline">{selectedApplication.job_title}</Badge><Badge variant="secondary">{selectedApplication.experience}</Badge></div>
              {selectedApplication.phone && <div className="flex items-center gap-2 text-sm p-3 rounded-lg bg-secondary/50"><Phone className="w-4 h-4 text-muted-foreground" /><span>{selectedApplication.phone}</span></div>}
              {selectedApplication.portfolio_url && <div className="flex items-center gap-2 text-sm p-3 rounded-lg bg-secondary/50"><ExternalLink className="w-4 h-4 text-muted-foreground" /><a href={selectedApplication.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline truncate">{selectedApplication.portfolio_url}</a></div>}
              {selectedApplication.cover_letter && <div className="p-4 rounded-xl bg-secondary/50 border border-border/50"><div className="flex items-start gap-3"><MessageSquare className="w-5 h-5 text-emerald-500 mt-0.5" /><div><p className="text-xs text-muted-foreground mb-2">Cover Letter</p><p className="text-sm whitespace-pre-wrap leading-relaxed">{selectedApplication.cover_letter}</p></div></div></div>}
              <p className="text-xs text-muted-foreground">Applied on {formatDate(selectedApplication.created_at)}</p>
              <div className="flex gap-2 pt-2">
                {selectedApplication.resume_path && <Button variant="default" className="flex-1 bg-emerald-500 hover:bg-emerald-600" onClick={() => downloadResume(selectedApplication.resume_path!)}><Download className="w-4 h-4 mr-2" />Download Resume</Button>}
                <Button variant="outline" asChild><a href={`mailto:${selectedApplication.email}`}><Mail className="w-4 h-4 mr-2" />Email</a></Button>
                <Button variant="destructive" size="icon" onClick={() => deleteApplication(selectedApplication.id)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Quote Detail Dialog */}
      <Dialog open={!!selectedQuote} onOpenChange={() => setSelectedQuote(null)}>
        <DialogContent className="max-w-lg bg-card/95 backdrop-blur-xl border-border/50">
          <DialogHeader><DialogTitle className="flex items-center gap-2"><IndianRupee className="w-5 h-5 text-violet-500" />Quote Request Details</DialogTitle></DialogHeader>
          {selectedQuote && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <div><h3 className="font-semibold text-lg">{selectedQuote.name}</h3><p className="text-sm text-muted-foreground">{selectedQuote.email}</p>{selectedQuote.company && <p className="text-sm text-muted-foreground">{selectedQuote.company}</p>}</div>
              {selectedQuote.phone && <div className="flex items-center gap-2 text-sm p-3 rounded-lg bg-secondary/50"><Phone className="w-4 h-4 text-muted-foreground" /><span>{selectedQuote.phone}</span></div>}
              <div className="flex flex-wrap gap-2">{selectedQuote.services.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-secondary/50"><p className="text-xs text-muted-foreground">Budget</p><p className="font-medium text-sm">{selectedQuote.budget}</p></div>
                <div className="p-3 rounded-lg bg-secondary/50"><p className="text-xs text-muted-foreground">Timeline</p><p className="font-medium text-sm">{selectedQuote.timeline}</p></div>
              </div>
              {selectedQuote.estimated_cost && <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20"><p className="text-xs text-muted-foreground">Estimated Cost</p><p className="font-bold text-violet-500">{selectedQuote.estimated_cost}</p></div>}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50"><p className="text-xs text-muted-foreground mb-2">Project Description</p><p className="text-sm whitespace-pre-wrap leading-relaxed">{selectedQuote.description}</p></div>
              <p className="text-xs text-muted-foreground">{formatDate(selectedQuote.created_at)}</p>
              <div className="flex gap-2 pt-2">
                <Button variant="default" className="flex-1" asChild><a href={`mailto:${selectedQuote.email}`}><Mail className="w-4 h-4 mr-2" />Reply via Email</a></Button>
                <Button variant="destructive" size="icon" onClick={() => deleteQuote(selectedQuote.id)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border-border/50">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><Lock className="w-5 h-5 text-primary" />Change Password</DialogTitle>
            <DialogDescription>Enter your new password below</DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordUpdate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="newPassword" type={showNewPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="pl-10 pr-10" placeholder="Enter new password" required minLength={8} />
                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="pl-10" placeholder="Confirm new password" required />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setShowPasswordDialog(false)}>Cancel</Button>
              <Button type="submit" variant="default" className="flex-1" disabled={isUpdatingPassword}>
                {isUpdatingPassword ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
