import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, RefreshCw, Briefcase, MapPin, Clock } from "lucide-react";

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
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const emptyJob = {
  title: "",
  department: "",
  location: "",
  type: "Full-time",
  experience: "",
  salary: "",
  description: "",
  skills: "",
  responsibilities: "",
  requirements: "",
  nice_to_have: "",
  benefits: "",
  is_active: true,
};

export const JobsManagementTab = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState(emptyJob);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) toast.error("Failed to load jobs");
    else setJobs((data as Job[]) || []);
    setIsLoading(false);
  };

  const openCreate = () => {
    setEditingJob(null);
    setFormData(emptyJob);
    setShowDialog(true);
  };

  const openEdit = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary,
      description: job.description,
      skills: job.skills.join(", "),
      responsibilities: job.responsibilities.join("\n"),
      requirements: job.requirements.join("\n"),
      nice_to_have: job.nice_to_have.join("\n"),
      benefits: job.benefits.join("\n"),
      is_active: job.is_active,
    });
    setShowDialog(true);
  };

  const parseArray = (text: string, delimiter = "\n") =>
    text.split(delimiter).map((s) => s.trim()).filter(Boolean);

  const handleSave = async () => {
    if (!formData.title || !formData.department || !formData.description) {
      toast.error("Title, department and description are required");
      return;
    }

    setIsSaving(true);
    const payload = {
      title: formData.title,
      department: formData.department,
      location: formData.location,
      type: formData.type,
      experience: formData.experience,
      salary: formData.salary,
      description: formData.description,
      skills: parseArray(formData.skills, ","),
      responsibilities: parseArray(formData.responsibilities),
      requirements: parseArray(formData.requirements),
      nice_to_have: parseArray(formData.nice_to_have),
      benefits: parseArray(formData.benefits),
      is_active: formData.is_active,
    };

    if (editingJob) {
      const { error } = await supabase
        .from("jobs")
        .update({ ...payload, updated_at: new Date().toISOString() })
        .eq("id", editingJob.id);
      if (error) toast.error("Failed to update job");
      else toast.success("Job updated!");
    } else {
      const { error } = await supabase.from("jobs").insert(payload);
      if (error) toast.error(error.message);
      else toast.success("Job created!");
    }

    setIsSaving(false);
    setShowDialog(false);
    fetchJobs();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job posting?")) return;
    const { error } = await supabase.from("jobs").delete().eq("id", id);
    if (error) toast.error("Failed to delete");
    else {
      toast.success("Job deleted");
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  const toggleActive = async (job: Job) => {
    const { error } = await supabase
      .from("jobs")
      .update({ is_active: !job.is_active })
      .eq("id", job.id);
    if (error) toast.error("Failed to update");
    else {
      setJobs((prev) =>
        prev.map((j) =>
          j.id === job.id ? { ...j, is_active: !j.is_active } : j
        )
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Job Postings
            </CardTitle>
            <CardDescription>{jobs.length} total jobs</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchJobs}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button size="sm" onClick={openCreate}>
              <Plus className="w-4 h-4 mr-2" />
              New Job
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary" />
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase className="w-10 h-10 mx-auto mb-2 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">No job postings yet</p>
              <Button className="mt-4" onClick={openCreate}>
                Create First Job
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl border border-border/50 bg-secondary/30 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm mb-1">{job.title}</h4>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.experience}
                      </span>
                      <Badge
                        variant={job.is_active ? "default" : "outline"}
                        className="text-xs"
                      >
                        {job.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleActive(job)}
                    >
                      {job.is_active ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEdit(job)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(job.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingJob ? "Edit Job Posting" : "Create Job Posting"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title *</Label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Senior Full Stack Developer"
                />
              </div>
              <div className="space-y-2">
                <Label>Department *</Label>
                <Input
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  placeholder="Engineering"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="Remote / Patna, Bihar"
                />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Input
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  placeholder="Full-time"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Experience</Label>
                <Input
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  placeholder="3+ years"
                />
              </div>
              <div className="space-y-2">
                <Label>Salary</Label>
                <Input
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                  placeholder="₹10-18 LPA"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description *</Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={3}
                placeholder="Job description..."
              />
            </div>

            <div className="space-y-2">
              <Label>Skills (comma-separated)</Label>
              <Input
                value={formData.skills}
                onChange={(e) =>
                  setFormData({ ...formData, skills: e.target.value })
                }
                placeholder="React, Node.js, TypeScript"
              />
            </div>

            <div className="space-y-2">
              <Label>Responsibilities (one per line)</Label>
              <Textarea
                value={formData.responsibilities}
                onChange={(e) =>
                  setFormData({ ...formData, responsibilities: e.target.value })
                }
                rows={4}
                placeholder="Design and implement web applications&#10;Lead code reviews..."
              />
            </div>

            <div className="space-y-2">
              <Label>Requirements (one per line)</Label>
              <Textarea
                value={formData.requirements}
                onChange={(e) =>
                  setFormData({ ...formData, requirements: e.target.value })
                }
                rows={4}
                placeholder="5+ years experience&#10;Strong React proficiency..."
              />
            </div>

            <div className="space-y-2">
              <Label>Nice to Have (one per line)</Label>
              <Textarea
                value={formData.nice_to_have}
                onChange={(e) =>
                  setFormData({ ...formData, nice_to_have: e.target.value })
                }
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Benefits (one per line)</Label>
              <Textarea
                value={formData.benefits}
                onChange={(e) =>
                  setFormData({ ...formData, benefits: e.target.value })
                }
                rows={3}
              />
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={formData.is_active}
                onCheckedChange={(val) =>
                  setFormData({ ...formData, is_active: val })
                }
              />
              <Label>Active (visible on careers page)</Label>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : editingJob ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
