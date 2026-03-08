import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Plus, Trash2, Mail, Clock, ChevronDown, ChevronUp,
  Send, Sparkles, GripVertical, Edit2, Save, X, Zap,
  MailPlus, Activity,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

interface DripSequence {
  id: string;
  name: string;
  trigger_event: string;
  is_active: boolean;
  created_at: string;
}

interface DripEmail {
  id: string;
  sequence_id: string;
  subject: string;
  body_html: string;
  delay_hours: number;
  sort_order: number;
  created_at: string;
}

interface DripLog {
  id: string;
  sequence_id: string;
  email_id: string;
  recipient_email: string;
  sent_at: string;
  status: string;
}

const triggerLabels: Record<string, string> = {
  contact_form: "Contact Form Submission",
  quote_request: "Quote Request",
  newsletter: "Newsletter Signup",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const DripCampaignTab = () => {
  const [sequences, setSequences] = useState<DripSequence[]>([]);
  const [emails, setEmails] = useState<Record<string, DripEmail[]>>({});
  const [logs, setLogs] = useState<DripLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [selectedSequenceId, setSelectedSequenceId] = useState<string | null>(null);
  const [editingEmail, setEditingEmail] = useState<DripEmail | null>(null);

  // Create sequence form
  const [newName, setNewName] = useState("");
  const [newTrigger, setNewTrigger] = useState("contact_form");

  // Create/edit email form
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailDelay, setEmailDelay] = useState(24);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [seqRes, logRes] = await Promise.all([
        supabase.from("email_drip_sequences").select("*").order("created_at", { ascending: false }),
        supabase.from("email_drip_log").select("*").order("sent_at", { ascending: false }).limit(100),
      ]);

      if (seqRes.error) throw seqRes.error;
      if (logRes.error) throw logRes.error;

      const seqs = (seqRes.data || []) as DripSequence[];
      setSequences(seqs);
      setLogs((logRes.data || []) as DripLog[]);

      // Fetch emails for all sequences
      if (seqs.length > 0) {
        const { data: allEmails, error: emailsError } = await supabase
          .from("email_drip_emails")
          .select("*")
          .in("sequence_id", seqs.map((s) => s.id))
          .order("sort_order", { ascending: true });

        if (emailsError) throw emailsError;

        const grouped: Record<string, DripEmail[]> = {};
        (allEmails || []).forEach((e: DripEmail) => {
          if (!grouped[e.sequence_id]) grouped[e.sequence_id] = [];
          grouped[e.sequence_id].push(e);
        });
        setEmails(grouped);
      }
    } catch (error) {
      console.error("Error fetching drip data:", error);
      toast.error("Failed to load drip campaigns");
    } finally {
      setIsLoading(false);
    }
  };

  const createSequence = async () => {
    if (!newName.trim()) {
      toast.error("Please enter a sequence name");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("email_drip_sequences")
        .insert({ name: newName.trim(), trigger_event: newTrigger })
        .select()
        .single();

      if (error) throw error;
      setSequences((prev) => [data as DripSequence, ...prev]);
      setShowCreateDialog(false);
      setNewName("");
      setNewTrigger("contact_form");
      toast.success("Drip sequence created!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create sequence");
    }
  };

  const toggleSequence = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from("email_drip_sequences")
        .update({ is_active: !isActive })
        .eq("id", id);

      if (error) throw error;
      setSequences((prev) =>
        prev.map((s) => (s.id === id ? { ...s, is_active: !isActive } : s))
      );
      toast.success(isActive ? "Sequence paused" : "Sequence activated");
    } catch {
      toast.error("Failed to update sequence");
    }
  };

  const deleteSequence = async (id: string) => {
    if (!confirm("Delete this sequence and all its emails?")) return;

    try {
      const { error } = await supabase
        .from("email_drip_sequences")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setSequences((prev) => prev.filter((s) => s.id !== id));
      const newEmails = { ...emails };
      delete newEmails[id];
      setEmails(newEmails);
      toast.success("Sequence deleted");
    } catch {
      toast.error("Failed to delete sequence");
    }
  };

  const openAddEmail = (sequenceId: string) => {
    setSelectedSequenceId(sequenceId);
    setEditingEmail(null);
    setEmailSubject("");
    setEmailBody("");
    setEmailDelay(24);
    setShowEmailDialog(true);
  };

  const openEditEmail = (email: DripEmail) => {
    setSelectedSequenceId(email.sequence_id);
    setEditingEmail(email);
    setEmailSubject(email.subject);
    setEmailBody(email.body_html);
    setEmailDelay(email.delay_hours);
    setShowEmailDialog(true);
  };

  const saveEmail = async () => {
    if (!emailSubject.trim() || !emailBody.trim() || !selectedSequenceId) {
      toast.error("Subject and body are required");
      return;
    }

    try {
      if (editingEmail) {
        const { error } = await supabase
          .from("email_drip_emails")
          .update({
            subject: emailSubject.trim(),
            body_html: emailBody.trim(),
            delay_hours: emailDelay,
          })
          .eq("id", editingEmail.id);

        if (error) throw error;
        setEmails((prev) => ({
          ...prev,
          [selectedSequenceId]: (prev[selectedSequenceId] || []).map((e) =>
            e.id === editingEmail.id
              ? { ...e, subject: emailSubject.trim(), body_html: emailBody.trim(), delay_hours: emailDelay }
              : e
          ),
        }));
        toast.success("Email updated!");
      } else {
        const currentEmails = emails[selectedSequenceId] || [];
        const sortOrder = currentEmails.length;

        const { data, error } = await supabase
          .from("email_drip_emails")
          .insert({
            sequence_id: selectedSequenceId,
            subject: emailSubject.trim(),
            body_html: emailBody.trim(),
            delay_hours: emailDelay,
            sort_order: sortOrder,
          })
          .select()
          .single();

        if (error) throw error;
        setEmails((prev) => ({
          ...prev,
          [selectedSequenceId]: [...(prev[selectedSequenceId] || []), data as DripEmail],
        }));
        toast.success("Email added to sequence!");
      }

      setShowEmailDialog(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save email");
    }
  };

  const deleteEmail = async (email: DripEmail) => {
    if (!confirm("Delete this email from the sequence?")) return;

    try {
      const { error } = await supabase
        .from("email_drip_emails")
        .delete()
        .eq("id", email.id);

      if (error) throw error;
      setEmails((prev) => ({
        ...prev,
        [email.sequence_id]: (prev[email.sequence_id] || []).filter((e) => e.id !== email.id),
      }));
      toast.success("Email deleted");
    } catch {
      toast.error("Failed to delete email");
    }
  };

  const getSequenceStats = (seqId: string) => {
    const seqLogs = logs.filter((l) => l.sequence_id === seqId);
    return {
      totalSent: seqLogs.filter((l) => l.status === "sent").length,
      totalFailed: seqLogs.filter((l) => l.status === "failed").length,
      uniqueRecipients: new Set(seqLogs.map((l) => l.recipient_email)).size,
    };
  };

  const totalSent = logs.filter((l) => l.status === "sent").length;
  const totalSequences = sequences.length;
  const activeSequences = sequences.filter((s) => s.is_active).length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-primary mx-auto" />
          </motion.div>
          <p className="text-muted-foreground text-sm">Loading drip campaigns...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      key="drip"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { title: "Total Sequences", value: totalSequences, icon: Zap, color: "text-primary" },
          { title: "Active Sequences", value: activeSequences, icon: Activity, color: "text-emerald-500" },
          { title: "Emails Sent", value: totalSent, icon: Send, color: "text-blue-500" },
        ].map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-bold">Drip Sequences</h3>
          <p className="text-xs text-muted-foreground">Automate follow-up emails for leads</p>
        </div>
        <Button onClick={() => setShowCreateDialog(true)} className="gap-2">
          <Plus className="w-4 h-4" /> New Sequence
        </Button>
      </motion.div>

      {/* Sequences List */}
      {sequences.length === 0 ? (
        <motion.div variants={itemVariants}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="py-16 text-center">
              <MailPlus className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <h4 className="font-display text-lg font-semibold mb-2">No Drip Sequences Yet</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Create your first automated email sequence to follow up with leads.
              </p>
              <Button onClick={() => setShowCreateDialog(true)} variant="outline" className="gap-2">
                <Plus className="w-4 h-4" /> Create First Sequence
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {sequences.map((seq) => {
            const seqEmails = emails[seq.id] || [];
            const stats = getSequenceStats(seq.id);

            return (
              <motion.div key={seq.id} variants={itemVariants}>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${seq.is_active ? "bg-primary/10" : "bg-secondary/50"}`}>
                          <Zap className={`w-5 h-5 ${seq.is_active ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div>
                          <CardTitle className="text-base">{seq.name}</CardTitle>
                          <CardDescription className="text-xs">
                            Trigger: {triggerLabels[seq.trigger_event] || seq.trigger_event}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={seq.is_active ? "default" : "secondary"} className="text-[10px]">
                          {seq.is_active ? "Active" : "Paused"}
                        </Badge>
                        <Switch
                          checked={seq.is_active}
                          onCheckedChange={() => toggleSequence(seq.id, seq.is_active)}
                        />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Stats row */}
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{seqEmails.length} email{seqEmails.length !== 1 ? "s" : ""}</span>
                      <span>•</span>
                      <span>{stats.totalSent} sent</span>
                      <span>•</span>
                      <span>{stats.uniqueRecipients} recipients</span>
                      {stats.totalFailed > 0 && (
                        <>
                          <span>•</span>
                          <span className="text-destructive">{stats.totalFailed} failed</span>
                        </>
                      )}
                    </div>

                    {/* Emails timeline */}
                    {seqEmails.length > 0 && (
                      <div className="space-y-2">
                        {seqEmails.map((email, idx) => (
                          <div
                            key={email.id}
                            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30 group hover:border-primary/20 transition-all"
                          >
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                {idx + 1}
                              </div>
                              {idx < seqEmails.length - 1 && (
                                <div className="w-px h-4 bg-border/50 mt-1" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{email.subject}</p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {idx === 0 ? "Immediately" : `After ${email.delay_hours}h`}
                              </p>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => openEditEmail(email)}
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-destructive"
                                onClick={() => deleteEmail(email)}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs"
                        onClick={() => openAddEmail(seq.id)}
                      >
                        <MailPlus className="w-3.5 h-3.5" /> Add Email
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 text-xs text-destructive hover:text-destructive"
                        onClick={() => deleteSequence(seq.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete Sequence
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Create Sequence Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border-border/50">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" /> Create Drip Sequence
            </DialogTitle>
            <DialogDescription>
              Set up an automated email sequence triggered by user actions.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Sequence Name</Label>
              <Input
                placeholder="e.g., Contact Follow-up Series"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="bg-secondary/50"
              />
            </div>
            <div className="space-y-2">
              <Label>Trigger Event</Label>
              <Select value={newTrigger} onValueChange={setNewTrigger}>
                <SelectTrigger className="bg-secondary/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contact_form">Contact Form Submission</SelectItem>
                  <SelectItem value="quote_request">Quote Request</SelectItem>
                  <SelectItem value="newsletter">Newsletter Signup</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setShowCreateDialog(false)}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={createSequence}>
                Create Sequence
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Email Dialog */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="max-w-lg bg-card/95 backdrop-blur-xl border-border/50">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              {editingEmail ? "Edit Email" : "Add Email to Sequence"}
            </DialogTitle>
            <DialogDescription>
              Use {"{{name}}"} and {"{{email}}"} as placeholders for personalization.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Subject Line</Label>
              <Input
                placeholder="e.g., {{name}}, here's your project roadmap"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="bg-secondary/50"
              />
            </div>
            <div className="space-y-2">
              <Label>Delay (hours after previous email)</Label>
              <Input
                type="number"
                min={0}
                value={emailDelay}
                onChange={(e) => setEmailDelay(parseInt(e.target.value) || 0)}
                className="bg-secondary/50 w-32"
              />
              <p className="text-[10px] text-muted-foreground">
                Set to 0 for first email (sent immediately on trigger)
              </p>
            </div>
            <div className="space-y-2">
              <Label>Email Body (HTML)</Label>
              <Textarea
                placeholder="<h2>Hi {{name}},</h2><p>Thank you for reaching out...</p>"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                rows={8}
                className="bg-secondary/50 font-mono text-xs"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setShowEmailDialog(false)}>
                Cancel
              </Button>
              <Button className="flex-1 gap-2" onClick={saveEmail}>
                <Save className="w-4 h-4" />
                {editingEmail ? "Update Email" : "Add Email"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
