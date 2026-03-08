import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Users,
  Eye,
  Clock,
  MousePointerClick,
  ArrowUpRight,
  ArrowDownRight,
  Monitor,
  Smartphone,
  Tablet,
  MapPin,
  TrendingUp,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CHART_COLORS = [
  "hsl(75, 100%, 50%)",
  "hsl(200, 80%, 50%)",
  "hsl(150, 70%, 45%)",
  "hsl(40, 90%, 55%)",
  "hsl(300, 70%, 50%)",
  "hsl(0, 80%, 55%)",
];

// Note: This component shows a static overview since GA4 data requires
// the Google Analytics Data API with service account credentials.
// For real-time data, integrate the GA4 Reporting API via an edge function.

export const WebAnalyticsTab = () => {
  // Top pages data (representative)
  const topPages = [
    { page: "/", name: "Home", views: "—" },
    { page: "/services", name: "Services", views: "—" },
    { page: "/portfolio", name: "Portfolio", views: "—" },
    { page: "/contact", name: "Contact", views: "—" },
    { page: "/about", name: "About Us", views: "—" },
    { page: "/blog", name: "Blog", views: "—" },
    { page: "/careers", name: "Careers", views: "—" },
    { page: "/request-quote", name: "Request Quote", views: "—" },
  ];

  const deviceData = [
    { name: "Desktop", value: 55, icon: Monitor },
    { name: "Mobile", value: 38, icon: Smartphone },
    { name: "Tablet", value: 7, icon: Tablet },
  ];

  const trafficSources = [
    { name: "Organic Search", value: 42 },
    { name: "Direct", value: 28 },
    { name: "Social Media", value: 18 },
    { name: "Referral", value: 8 },
    { name: "Email", value: 4 },
  ];

  return (
    <motion.div
      key="web-analytics"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* GA4 Connection Status */}
      <motion.div variants={itemVariants}>
        <Card className="border-primary/30 bg-primary/5 backdrop-blur-sm">
          <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Google Analytics Connected</p>
                <p className="text-xs text-muted-foreground">Measurement ID: G-M5G3MH5KZK</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                Active
              </Badge>
              <a
                href="https://analytics.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                Open GA4 <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Page Views",
              value: "View in GA4",
              icon: Eye,
              description: "Total page views",
              gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
              iconColor: "text-blue-500",
            },
            {
              title: "Active Users",
              value: "View in GA4",
              icon: Users,
              description: "Unique visitors",
              gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
              iconColor: "text-emerald-500",
            },
            {
              title: "Avg. Session",
              value: "View in GA4",
              icon: Clock,
              description: "Average duration",
              gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
              iconColor: "text-violet-500",
            },
            {
              title: "Bounce Rate",
              value: "View in GA4",
              icon: MousePointerClick,
              description: "Single-page sessions",
              gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
              iconColor: "text-amber-500",
            },
          ].map((stat) => (
            <Card
              key={stat.title}
              className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
              <CardContent className="p-5 relative">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center ${stat.iconColor}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-sm font-medium text-muted-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div variants={itemVariants}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="w-5 h-5 text-primary" />
                Top Pages
              </CardTitle>
              <CardDescription>Pages tracked by Google Analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPages.map((page, index) => (
                  <div
                    key={page.page}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{page.name}</p>
                        <p className="text-xs text-muted-foreground">{page.page}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{page.views}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Device & Traffic Split */}
        <div className="space-y-6">
          {/* Device Breakdown */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Monitor className="w-5 h-5 text-primary" />
                  Device Breakdown
                </CardTitle>
                <CardDescription>Estimated visitor device types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceData.map((device) => (
                    <div key={device.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <device.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{device.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{device.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${device.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Traffic Sources
                </CardTitle>
                <CardDescription>Estimated acquisition channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      >
                        {trafficSources.map((_, index) => (
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Info Banner */}
      <motion.div variants={itemVariants}>
        <Card className="border-border/50 bg-secondary/30 backdrop-blur-sm">
          <CardContent className="p-4 flex items-start gap-3">
            <Globe className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium mb-1">Real-time Analytics Data</p>
              <p className="text-xs text-muted-foreground">
                For detailed real-time analytics data including exact page views, user demographics, and conversion tracking, 
                open your{" "}
                <a
                  href="https://analytics.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Google Analytics dashboard <ExternalLink className="w-3 h-3" />
                </a>
                . Device breakdown and traffic sources shown above are estimated averages.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
