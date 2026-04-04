import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  Mail,
  IndianRupee,
  Briefcase,
  FileText,
  Newspaper,
  BarChart3,
  Globe,
  User,
  LogOut,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  FolderOpen,
  Zap,
  Calendar,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
  group: string;
}

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userEmail: string;
  unreadContacts: number;
  unreadApplications: number;
  unreadQuotes: number;
  onLogout: () => void;
}

export const AdminSidebar = ({
  activeTab,
  setActiveTab,
  userEmail,
  unreadContacts,
  unreadApplications,
  unreadQuotes,
  onLogout,
}: AdminSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const navGroups = [
    {
      label: "Dashboard",
      items: [
        { id: "overview", label: "Overview", icon: Activity, group: "dashboard" },
      ] as NavItem[],
    },
    {
      label: "Inbox",
      items: [
        { id: "contacts", label: "Contacts", icon: Mail, badge: unreadContacts, group: "inbox" },
        { id: "quotes", label: "Quotes", icon: IndianRupee, badge: unreadQuotes, group: "inbox" },
        { id: "applications", label: "Applications", icon: Briefcase, badge: unreadApplications, group: "inbox" },
      ] as NavItem[],
    },
    {
      label: "Content",
      items: [
        { id: "projects-mgmt", label: "Projects", icon: FolderOpen, group: "content" },
        { id: "blog-mgmt", label: "Blog CMS", icon: FileText, group: "content" },
        { id: "jobs-mgmt", label: "Job Postings", icon: Briefcase, group: "content" },
        { id: "subscribers", label: "Subscribers", icon: Newspaper, group: "content" },
        { id: "drip-campaigns", label: "Drip Campaigns", icon: Zap, group: "content" },
      ] as NavItem[],
    },
    {
      label: "Insights",
      items: [
        { id: "analytics", label: "Analytics", icon: BarChart3, group: "insights" },
        { id: "web-analytics", label: "Web Analytics", icon: Globe, group: "insights" },
      ] as NavItem[],
    },
    {
      label: "Account",
      items: [
        { id: "profile", label: "Profile", icon: User, group: "account" },
      ] as NavItem[],
    },
  ];

  const totalUnread = unreadContacts + unreadApplications + unreadQuotes;

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, width: collapsed ? "5rem" : "18rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed left-0 top-0 h-full bg-card/80 backdrop-blur-xl border-r border-border/50 z-50 hidden lg:flex flex-col",
      )}
    >
      {/* Logo */}
      <div className={cn("p-4 flex items-center gap-3", collapsed && "justify-center")}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-10 h-10 bg-gradient-to-br from-primary via-primary to-glow-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 shrink-0"
        >
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </motion.div>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="font-display font-bold text-lg leading-tight">Itoby Admin</h1>
            <p className="text-[10px] text-muted-foreground">Dashboard v2.0</p>
          </motion.div>
        )}
      </div>

      {/* Total unread indicator */}
      {totalUnread > 0 && !collapsed && (
        <div className="mx-4 mb-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-xs text-primary font-medium">{totalUnread} unread messages</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-4">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-3 mb-1.5">
                {group.label}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                    collapsed && "justify-center",
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className={cn(
                    "w-[18px] h-[18px] shrink-0 transition-transform group-hover:scale-110",
                  )} />
                  {!collapsed && (
                    <>
                      <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                      {item.badge && item.badge > 0 && (
                        <Badge
                          variant={activeTab === item.id ? "secondary" : "destructive"}
                          className="text-[10px] px-1.5 h-5 min-w-5 flex items-center justify-center"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                  {collapsed && item.badge && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[9px] flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="px-3 pb-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors text-xs"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>

      <Separator className="bg-border/50" />

      {/* User section */}
      <div className={cn("p-4", collapsed && "px-2")}>
        <div className={cn("flex items-center gap-3 mb-3", collapsed && "justify-center")}>
          <Avatar className="w-9 h-9 border-2 border-primary/30 shrink-0">
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
              {userEmail.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{userEmail}</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Shield className="w-3 h-3" /> Administrator
              </p>
            </div>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          className={cn("w-full text-xs", collapsed && "px-2")}
          onClick={onLogout}
        >
          <LogOut className="w-3.5 h-3.5" />
          {!collapsed && <span className="ml-2">Sign Out</span>}
        </Button>
      </div>
    </motion.aside>
  );
};
