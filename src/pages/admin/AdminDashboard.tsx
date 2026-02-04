import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Mail,
  Briefcase,
  LogOut,
  Eye,
  Trash2,
  Download,
  Calendar,
  User,
  Phone,
  MessageSquare,
  FileText,
  CheckCircle,
  Clock,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

interface JobApplication {
  id: string;
  job_id: string;
  job_title: string;
  name: string;
  email: string;
  phone: string | null;
  portfolio_url: string | null;
  experience: string;
  cover_letter: string | null;
  resume_path: string | null;
  is_read: boolean;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
      return;
    }

    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [contactsRes, applicationsRes] = await Promise.all([
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('job_applications').select('*').order('created_at', { ascending: false }),
      ]);

      if (contactsRes.error) throw contactsRes.error;
      if (applicationsRes.error) throw applicationsRes.error;

      setContacts(contactsRes.data || []);
      setApplications(applicationsRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
    toast.success("Data refreshed");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const markContactAsRead = async (contact: ContactSubmission) => {
    if (!contact.is_read) {
      await supabase
        .from('contact_submissions')
        .update({ is_read: true })
        .eq('id', contact.id);
      
      setContacts(prev => prev.map(c => c.id === contact.id ? { ...c, is_read: true } : c));
    }
    setSelectedContact(contact);
  };

  const markApplicationAsRead = async (application: JobApplication) => {
    if (!application.is_read) {
      await supabase
        .from('job_applications')
        .update({ is_read: true })
        .eq('id', application.id);
      
      setApplications(prev => prev.map(a => a.id === application.id ? { ...a, is_read: true } : a));
    }
    setSelectedApplication(application);
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    
    await supabase.from('contact_submissions').delete().eq('id', id);
    setContacts(prev => prev.filter(c => c.id !== id));
    setSelectedContact(null);
    toast.success("Submission deleted");
  };

  const deleteApplication = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    
    await supabase.from('job_applications').delete().eq('id', id);
    setApplications(prev => prev.filter(a => a.id !== id));
    setSelectedApplication(null);
    toast.success("Application deleted");
  };

  const downloadResume = async (resumePath: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download(resumePath);
      
      if (error) throw error;
      
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = resumePath.split('/').pop() || 'resume';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Failed to download resume");
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const unreadContacts = contacts.filter(c => !c.is_read).length;
  const unreadApplications = applications.filter(a => !a.is_read).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container-wide py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-glow-secondary rounded-xl flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground">IT</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-lg">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Itoby Infotech</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container-wide py-8">
        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Contacts</p>
                    <p className="text-3xl font-display font-bold">{contacts.length}</p>
                  </div>
                  <Mail className="w-10 h-10 text-primary opacity-50" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-gradient-to-br from-glow-secondary/10 to-glow-secondary/5 border-glow-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Unread Contacts</p>
                    <p className="text-3xl font-display font-bold">{unreadContacts}</p>
                  </div>
                  <Clock className="w-10 h-10 text-glow-secondary opacity-50" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Job Applications</p>
                    <p className="text-3xl font-display font-bold">{applications.length}</p>
                  </div>
                  <Briefcase className="w-10 h-10 text-green-500 opacity-50" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Unread Applications</p>
                    <p className="text-3xl font-display font-bold">{unreadApplications}</p>
                  </div>
                  <FileText className="w-10 h-10 text-orange-500 opacity-50" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="bg-secondary/50">
            <TabsTrigger value="contacts" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Submissions
              {unreadContacts > 0 && (
                <Badge variant="destructive" className="ml-1 px-1.5 py-0 text-xs">
                  {unreadContacts}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="applications" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Job Applications
              {unreadApplications > 0 && (
                <Badge variant="destructive" className="ml-1 px-1.5 py-0 text-xs">
                  {unreadApplications}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-12">
                    <RefreshCw className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Loading...</p>
                  </div>
                ) : contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <Mail className="w-12 h-12 mx-auto text-muted-foreground opacity-50" />
                    <p className="mt-2 text-muted-foreground">No contact submissions yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <AnimatePresence>
                      {contacts.map((contact, index) => (
                        <motion.div
                          key={contact.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => markContactAsRead(contact)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                            contact.is_read
                              ? 'bg-secondary/30 border-border'
                              : 'bg-primary/5 border-primary/20'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium truncate">{contact.name}</h4>
                                {!contact.is_read && (
                                  <Badge variant="default" className="text-xs">New</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{contact.email}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="secondary">{contact.service}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(contact.created_at)}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); markContactAsRead(contact); }}>
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); deleteContact(contact.id); }}>
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-12">
                    <RefreshCw className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">Loading...</p>
                  </div>
                ) : applications.length === 0 ? (
                  <div className="text-center py-12">
                    <Briefcase className="w-12 h-12 mx-auto text-muted-foreground opacity-50" />
                    <p className="mt-2 text-muted-foreground">No job applications yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <AnimatePresence>
                      {applications.map((application, index) => (
                        <motion.div
                          key={application.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => markApplicationAsRead(application)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                            application.is_read
                              ? 'bg-secondary/30 border-border'
                              : 'bg-primary/5 border-primary/20'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium truncate">{application.name}</h4>
                                {!application.is_read && (
                                  <Badge variant="default" className="text-xs">New</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{application.email}</p>
                              <div className="flex flex-wrap items-center gap-2 mt-2">
                                <Badge variant="outline">{application.job_title}</Badge>
                                <Badge variant="secondary">{application.experience}</Badge>
                                {application.resume_path && (
                                  <Badge variant="default" className="bg-green-500/20 text-green-500 border-green-500/30">
                                    <FileText className="w-3 h-3 mr-1" />
                                    Resume
                                  </Badge>
                                )}
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(application.created_at)}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {application.resume_path && (
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={(e) => { e.stopPropagation(); downloadResume(application.resume_path!); }}
                                >
                                  <Download className="w-4 h-4" />
                                </Button>
                              )}
                              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); markApplicationAsRead(application); }}>
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); deleteApplication(application.id); }}>
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Contact Detail Dialog */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact Submission</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{selectedContact.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedContact.email}</p>
                </div>
              </div>
              
              {selectedContact.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{selectedContact.phone}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{selectedContact.service}</Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDate(selectedContact.created_at)}
                </span>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/50">
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground mt-1" />
                  <p className="text-sm whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`mailto:${selectedContact.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </a>
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteContact(selectedContact.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Application Detail Dialog */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Job Application</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{selectedApplication.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedApplication.email}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{selectedApplication.job_title}</Badge>
                <Badge variant="secondary">{selectedApplication.experience}</Badge>
              </div>
              
              {selectedApplication.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{selectedApplication.phone}</span>
                </div>
              )}
              
              {selectedApplication.portfolio_url && (
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  <a href={selectedApplication.portfolio_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {selectedApplication.portfolio_url}
                  </a>
                </div>
              )}
              
              {selectedApplication.cover_letter && (
                <div className="p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Cover Letter</p>
                      <p className="text-sm whitespace-pre-wrap">{selectedApplication.cover_letter}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-xs text-muted-foreground">
                Applied on {formatDate(selectedApplication.created_at)}
              </p>
              
              <div className="flex gap-2">
                {selectedApplication.resume_path && (
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => downloadResume(selectedApplication.resume_path!)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a href={`mailto:${selectedApplication.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteApplication(selectedApplication.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
