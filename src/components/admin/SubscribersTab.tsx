import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Newspaper,
  Trash2,
  RefreshCw,
  Mail,
  Calendar,
  UserX,
  UserCheck,
  Download,
} from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  is_active: boolean;
  subscribed_at: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export const SubscribersTab = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .order("subscribed_at", { ascending: false });

    if (error) {
      toast.error("Failed to load subscribers");
    } else {
      setSubscribers(data || []);
    }
    setIsLoading(false);
  };

  const toggleActive = async (sub: Subscriber) => {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .update({ is_active: !sub.is_active })
      .eq("id", sub.id);

    if (error) {
      toast.error("Failed to update subscriber");
    } else {
      setSubscribers((prev) =>
        prev.map((s) => (s.id === sub.id ? { ...s, is_active: !s.is_active } : s))
      );
      toast.success(sub.is_active ? "Subscriber deactivated" : "Subscriber activated");
    }
  };

  const deleteSubscriber = async (id: string) => {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;

    const { error } = await supabase
      .from("newsletter_subscribers")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Failed to delete subscriber");
    } else {
      setSubscribers((prev) => prev.filter((s) => s.id !== id));
      toast.success("Subscriber deleted");
    }
  };

  const exportCSV = () => {
    const csv = [
      "Email,Status,Subscribed At",
      ...subscribers.map(
        (s) =>
          `${s.email},${s.is_active ? "Active" : "Inactive"},${new Date(s.subscribed_at).toISOString()}`
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "newsletter-subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const activeCount = subscribers.filter((s) => s.is_active).length;

  return (
    <motion.div
      key="subscribers"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-primary" />
              Newsletter Subscribers
              <Badge variant="secondary" className="ml-2">
                {activeCount} active
              </Badge>
            </CardTitle>
            <CardDescription>
              Manage newsletter email subscribers ({subscribers.length} total)
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={exportCSV} disabled={subscribers.length === 0}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm" onClick={fetchSubscribers}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="mt-3 text-muted-foreground">Loading subscribers...</p>
            </div>
          ) : subscribers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-medium mb-1">No subscribers yet</h3>
              <p className="text-sm text-muted-foreground">
                Newsletter subscribers will appear here
              </p>
            </div>
          ) : (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
              {subscribers.map((sub, index) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                    sub.is_active
                      ? "bg-secondary/30 border-border/50"
                      : "bg-destructive/5 border-destructive/20 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <Avatar className="w-10 h-10 shrink-0">
                        <AvatarFallback
                          className={`text-sm ${
                            sub.is_active
                              ? "bg-primary/10 text-primary"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {sub.email.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-medium text-sm truncate flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                            {sub.email}
                          </p>
                          <Badge variant={sub.is_active ? "default" : "destructive"} className="text-xs shrink-0">
                            {sub.is_active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(sub.subscribed_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleActive(sub)}
                        title={sub.is_active ? "Deactivate" : "Activate"}
                      >
                        {sub.is_active ? (
                          <UserX className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <UserCheck className="w-4 h-4 text-primary" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteSubscriber(sub.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
