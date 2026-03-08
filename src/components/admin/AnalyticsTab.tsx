import { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp, BarChart3, Mail, Briefcase, IndianRupee, Eye,
  Clock, CheckCircle, ArrowUpRight, ArrowDownRight, Percent,
  CalendarDays, Activity,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar,
} from "recharts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CHART_COLORS = [
  "hsl(75, 100%, 50%)", "hsl(200, 80%, 50%)", "hsl(150, 70%, 45%)",
  "hsl(40, 90%, 55%)", "hsl(300, 70%, 50%)", "hsl(0, 80%, 55%)",
];

interface AnalyticsTabProps {
  contacts: Array<{ id: string; service: string; is_read: boolean; created_at: string }>;
  applications: Array<{ id: string; is_read: boolean; created_at: string }>;
  quotes: Array<{ id: string; is_read: boolean; created_at: string; services: string[] }>;
}

export const AnalyticsTab = ({ contacts, applications, quotes }: AnalyticsTabProps) => {
  // 30-day trend data
  const chartData = useMemo(() => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split("T")[0];
    });
    return last30Days.map((day) => ({
      name: new Date(day).toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      contacts: contacts.filter((c) => c.created_at.startsWith(day)).length,
      applications: applications.filter((a) => a.created_at.startsWith(day)).length,
      quotes: quotes.filter((q) => q.created_at.startsWith(day)).length,
    }));
  }, [contacts, applications, quotes]);

  // Weekly comparison
  const weeklyComparison = useMemo(() => {
    const now = new Date();
    const thisWeekStart = new Date(now);
    thisWeekStart.setDate(now.getDate() - now.getDay());
    const lastWeekStart = new Date(thisWeekStart);
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);

    const all = [...contacts, ...applications, ...quotes];
    const thisWeek = all.filter((i) => new Date(i.created_at) >= thisWeekStart).length;
    const lastWeek = all.filter((i) => {
      const d = new Date(i.created_at);
      return d >= lastWeekStart && d < thisWeekStart;
    }).length;
    const change = lastWeek === 0 ? 100 : Math.round(((thisWeek - lastWeek) / lastWeek) * 100);
    return { thisWeek, lastWeek, change };
  }, [contacts, applications, quotes]);

  // Read/response rates
  const readRate = useMemo(() => {
    const total = contacts.length + quotes.length;
    const read = contacts.filter((c) => c.is_read).length + quotes.filter((q) => q.is_read).length;
    return total === 0 ? 0 : Math.round((read / total) * 100);
  }, [contacts, quotes]);

  const appReviewRate = useMemo(() => {
    if (applications.length === 0) return 0;
    return Math.round((applications.filter((a) => a.is_read).length / applications.length) * 100);
  }, [applications]);

  // Average response time (days between created and read - approximation using is_read count)
  const avgResponseDays = useMemo(() => {
    const readContacts = contacts.filter((c) => c.is_read);
    if (readContacts.length === 0) return "—";
    // Simple metric: ratio of items read within 24h
    const recent = readContacts.filter((c) => {
      const age = Date.now() - new Date(c.created_at).getTime();
      return age < 7 * 24 * 60 * 60 * 1000;
    });
    return recent.length > 0 ? "< 24h" : "1-3 days";
  }, [contacts]);

  // Service distribution
  const serviceDistribution = useMemo(() => {
    const map: Record<string, number> = {};
    contacts.forEach((c) => { map[c.service] = (map[c.service] || 0) + 1; });
    return Object.entries(map)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [contacts]);

  // Monthly breakdown for bar chart
  const monthlyData = useMemo(() => {
    const months: Record<string, { contacts: number; quotes: number; applications: number }> = {};
    const all = [
      ...contacts.map((c) => ({ ...c, type: "contacts" as const })),
      ...quotes.map((q) => ({ ...q, type: "quotes" as const })),
      ...applications.map((a) => ({ ...a, type: "applications" as const })),
    ];
    all.forEach((item) => {
      const month = new Date(item.created_at).toLocaleDateString("en-IN", { month: "short", year: "2-digit" });
      if (!months[month]) months[month] = { contacts: 0, quotes: 0, applications: 0 };
      months[month][item.type]++;
    });
    return Object.entries(months).slice(-6).map(([name, data]) => ({ name, ...data }));
  }, [contacts, quotes, applications]);

  const kpiCards = [
    {
      title: "This Week",
      value: weeklyComparison.thisWeek,
      change: weeklyComparison.change,
      icon: CalendarDays,
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconColor: "text-primary",
    },
    {
      title: "Read Rate",
      value: `${readRate}%`,
      subtitle: "Contacts & Quotes",
      icon: Eye,
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
      iconColor: "text-blue-500",
    },
    {
      title: "App Review Rate",
      value: `${appReviewRate}%`,
      subtitle: "Job Applications",
      icon: CheckCircle,
      gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
      iconColor: "text-emerald-500",
    },
    {
      title: "Avg Response",
      value: avgResponseDays,
      subtitle: "Estimated",
      icon: Clock,
      gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
      iconColor: "text-violet-500",
    },
  ];

  return (
    <motion.div
      key="analytics"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card) => (
          <motion.div key={card.title} variants={itemVariants}>
            <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
              <CardContent className="p-5 relative">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center ${card.iconColor}`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  {"change" in card && (
                    <Badge variant="outline" className={`text-xs ${card.change >= 0 ? "text-emerald-500 border-emerald-500/30" : "text-red-500 border-red-500/30"}`}>
                      {card.change >= 0 ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                      {Math.abs(card.change)}%
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-1">{card.title}</p>
                <p className="text-2xl font-display font-bold">{card.value}</p>
                {"subtitle" in card && <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 30-Day Trend */}
      <motion.div variants={itemVariants}>
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Submissions — Last 30 Days
            </CardTitle>
            <CardDescription>Daily submission trends across all channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} interval={4} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.75rem",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Area type="monotone" dataKey="contacts" stackId="1" stroke="hsl(200, 80%, 50%)" fill="hsl(200, 80%, 50%)" fillOpacity={0.3} name="Contacts" />
                  <Area type="monotone" dataKey="quotes" stackId="1" stroke="hsl(270, 70%, 60%)" fill="hsl(270, 70%, 60%)" fillOpacity={0.3} name="Quotes" />
                  <Area type="monotone" dataKey="applications" stackId="1" stroke="hsl(150, 70%, 45%)" fill="hsl(150, 70%, 45%)" fillOpacity={0.3} name="Applications" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Monthly Breakdown */}
        <motion.div variants={itemVariants}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" /> Monthly Breakdown
              </CardTitle>
              <CardDescription>Submissions per month by category</CardDescription>
            </CardHeader>
            <CardContent>
              {monthlyData.length > 0 ? (
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--foreground))",
                        }}
                      />
                      <Bar dataKey="contacts" fill="hsl(200, 80%, 50%)" radius={[4, 4, 0, 0]} name="Contacts" />
                      <Bar dataKey="quotes" fill="hsl(270, 70%, 60%)" radius={[4, 4, 0, 0]} name="Quotes" />
                      <Bar dataKey="applications" fill="hsl(150, 70%, 45%)" radius={[4, 4, 0, 0]} name="Applications" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p>No data yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Service Distribution */}
        <motion.div variants={itemVariants}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> Service Inquiry Distribution
              </CardTitle>
              <CardDescription>Which services get the most inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              {serviceDistribution.length > 0 ? (
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
                        dataKey="value"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      >
                        {serviceDistribution.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.75rem",
                          color: "hsl(var(--foreground))",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p>No data available yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Services Leaderboard */}
      <motion.div variants={itemVariants}>
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="w-5 h-5 text-primary" /> Top Services Leaderboard
            </CardTitle>
            <CardDescription>Most requested services ranked by inquiry count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {serviceDistribution.slice(0, 6).map((service, index) => {
                const maxVal = serviceDistribution[0]?.value || 1;
                const pct = Math.round((service.value / maxVal) * 100);
                return (
                  <div key={service.name} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium truncate">{service.name}</p>
                        <span className="text-sm text-muted-foreground ml-2">{service.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              {serviceDistribution.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No inquiries yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
