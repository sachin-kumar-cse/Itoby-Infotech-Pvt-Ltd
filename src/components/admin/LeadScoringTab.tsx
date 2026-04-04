import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Search, TrendingUp, Users, Star, Activity } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

interface LeadScore {
  id: string;
  email: string;
  name: string;
  score: number;
  activity_log: any[];
  services_interested: string[];
  budget_range: string | null;
  source: string;
  last_activity_at: string;
  created_at: string;
}

const getScoreBadge = (score: number) => {
  if (score >= 80) return { label: "🔥 Hot", variant: "default" as const, className: "bg-red-500 hover:bg-red-600" };
  if (score >= 40) return { label: "🌟 Warm", variant: "default" as const, className: "bg-orange-500 hover:bg-orange-600" };
  if (score >= 15) return { label: "❄️ Cool", variant: "secondary" as const, className: "" };
  return { label: "🧊 Cold", variant: "outline" as const, className: "" };
};

const LeadScoringTab = () => {
  const [leads, setLeads] = useState<LeadScore[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("lead_scores")
      .select("*")
      .order("score", { ascending: false });

    if (!error && data) setLeads(data as unknown as LeadScore[]);
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead score?")) return;
    await supabase.from("lead_scores").delete().eq("id", id);
    setLeads((prev) => prev.filter((l) => l.id !== id));
    toast.success("Lead deleted");
  };

  const filtered = leads.filter(
    (l) =>
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.name.toLowerCase().includes(search.toLowerCase())
  );

  const hotLeads = leads.filter((l) => l.score >= 80).length;
  const warmLeads = leads.filter((l) => l.score >= 40 && l.score < 80).length;
  const avgScore = leads.length ? Math.round(leads.reduce((a, l) => a + l.score, 0) / leads.length) : 0;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <Users className="w-5 h-5 text-primary mb-2" />
          <div className="text-2xl font-bold text-foreground">{leads.length}</div>
          <div className="text-xs text-muted-foreground">Total Leads</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Star className="w-5 h-5 text-red-500 mb-2" />
          <div className="text-2xl font-bold text-foreground">{hotLeads}</div>
          <div className="text-xs text-muted-foreground">Hot Leads</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <TrendingUp className="w-5 h-5 text-orange-500 mb-2" />
          <div className="text-2xl font-bold text-foreground">{warmLeads}</div>
          <div className="text-xs text-muted-foreground">Warm Leads</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Activity className="w-5 h-5 text-primary mb-2" />
          <div className="text-2xl font-bold text-foreground">{avgScore}</div>
          <div className="text-xs text-muted-foreground">Avg Score</div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      {/* Table */}
      <div className="border border-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lead</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="hidden md:table-cell">Services</TableHead>
              <TableHead className="hidden md:table-cell">Activities</TableHead>
              <TableHead className="hidden md:table-cell">Last Active</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={6} className="text-center py-10 text-muted-foreground">Loading...</TableCell></TableRow>
            ) : filtered.length === 0 ? (
              <TableRow><TableCell colSpan={6} className="text-center py-10 text-muted-foreground">No leads found</TableCell></TableRow>
            ) : (
              filtered.map((lead) => {
                const badge = getScoreBadge(lead.score);
                return (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{lead.name || "—"}</div>
                        <div className="text-xs text-muted-foreground">{lead.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{lead.score}</span>
                        <Badge variant={badge.variant} className={badge.className}>{badge.label}</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {lead.services_interested?.slice(0, 2).map((s, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{s}</Badge>
                        ))}
                        {(lead.services_interested?.length || 0) > 2 && (
                          <Badge variant="outline" className="text-xs">+{lead.services_interested.length - 2}</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                      {lead.activity_log?.length || 0} actions
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                      {format(new Date(lead.last_activity_at), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => deleteLead(lead.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeadScoringTab;
