import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string;
  date: string;
  time_slot: string;
  message: string;
  status: string;
  created_at: string;
}

const statusConfig: Record<string, { icon: any; color: string; label: string }> = {
  pending: { icon: AlertCircle, color: "bg-yellow-500", label: "Pending" },
  confirmed: { icon: CheckCircle, color: "bg-green-500", label: "Confirmed" },
  completed: { icon: CheckCircle, color: "bg-primary", label: "Completed" },
  cancelled: { icon: XCircle, color: "bg-red-500", label: "Cancelled" },
};

const AppointmentsTab = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("date", { ascending: true });

    if (!error && data) setAppointments(data as unknown as Appointment[]);
    setLoading(false);
  };

  useEffect(() => { fetchAppointments(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("appointments").update({ status }).eq("id", id);
    if (!error) {
      setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
      toast.success(`Status updated to ${status}`);
    }
  };

  const deleteAppointment = async (id: string) => {
    if (!confirm("Delete this appointment?")) return;
    await supabase.from("appointments").delete().eq("id", id);
    setAppointments((prev) => prev.filter((a) => a.id !== id));
    toast.success("Appointment deleted");
  };

  const upcoming = appointments.filter((a) => a.status === "pending" || a.status === "confirmed").length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <Calendar className="w-5 h-5 text-primary mb-2" />
          <div className="text-2xl font-bold text-foreground">{appointments.length}</div>
          <div className="text-xs text-muted-foreground">Total Appointments</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Clock className="w-5 h-5 text-yellow-500 mb-2" />
          <div className="text-2xl font-bold text-foreground">{upcoming}</div>
          <div className="text-xs text-muted-foreground">Upcoming</div>
        </div>
      </div>

      {/* Table */}
      <div className="border border-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={5} className="text-center py-10 text-muted-foreground">Loading...</TableCell></TableRow>
            ) : appointments.length === 0 ? (
              <TableRow><TableCell colSpan={5} className="text-center py-10 text-muted-foreground">No appointments yet</TableCell></TableRow>
            ) : (
              appointments.map((apt) => {
                const cfg = statusConfig[apt.status] || statusConfig.pending;
                return (
                  <TableRow key={apt.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{apt.name}</div>
                        <div className="text-xs text-muted-foreground">{apt.email}</div>
                        {apt.company && <div className="text-xs text-muted-foreground">{apt.company}</div>}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{apt.service}</TableCell>
                    <TableCell>
                      <div className="text-sm font-medium text-foreground">{format(new Date(apt.date), "MMM d, yyyy")}</div>
                      <div className="text-xs text-muted-foreground">{apt.time_slot} IST</div>
                    </TableCell>
                    <TableCell>
                      <Select value={apt.status} onValueChange={(val) => updateStatus(apt.id, val)}>
                        <SelectTrigger className="w-[130px] h-8">
                          <SelectValue>
                            <Badge className={`${cfg.color} text-white`}>{cfg.label}</Badge>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => deleteAppointment(apt.id)}>
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

export default AppointmentsTab;
