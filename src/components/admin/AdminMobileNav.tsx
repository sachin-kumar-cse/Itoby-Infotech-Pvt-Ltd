import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  Menu,
  RefreshCw,
  Zap,
  Calendar,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminMobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userEmail: string;
  unreadContacts: number;
  unreadApplications: number;
  unreadQuotes: number;
  onLogout: () => void;
  onRefresh: () => void;
  refreshing: boolean;
}

export const AdminMobileNav = ({
  activeTab,
  setActiveTab,
  userEmail,
  unreadContacts,
  unreadApplications,
  unreadQuotes,
  onLogout,
  onRefresh,
  refreshing,
}: AdminMobileNavProps) => {
  const [open, setOpen] = useState(false);

  const navGroups = [
    {
      label: "Dashboard",
      items: [
        { id: "overview", label: "Overview", icon: Activity },
      ],
    },
    {
      label: "Inbox",
      items: [
        { id: "contacts", label: "Contacts", icon: Mail, badge: unreadContacts },
        { id: "quotes", label: "Quotes", icon: IndianRupee, badge: unreadQuotes },
        { id: "applications", label: "Applications", icon: Briefcase, badge: unreadApplications },
        { id: "appointments", label: "Appointments", icon: Calendar },
      ],
    },
    {
      label: "Content",
      items: [
        { id: "blog-mgmt", label: "Blog CMS", icon: FileText },
        { id: "jobs-mgmt", label: "Job Postings", icon: Briefcase },
        { id: "subscribers", label: "Subscribers", icon: Newspaper },
        { id: "drip-campaigns", label: "Drip Campaigns", icon: Zap },
      ],
    },
    {
      label: "Insights",
      items: [
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "web-analytics", label: "Web Analytics", icon: Globe },
      ],
    },
    {
      label: "Account",
      items: [
        { id: "profile", label: "Profile", icon: User },
      ],
    },
  ];

  const totalUnread = unreadContacts + unreadApplications + unreadQuotes;

  const handleNav = (id: string) => {
    setActiveTab(id);
    setOpen(false);
  };

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="w-5 h-5" />
                {totalUnread > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[9px] flex items-center justify-center font-bold">
                    {totalUnread}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 bg-card/95 backdrop-blur-xl">
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-glow-secondary rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-display font-bold text-lg">Itoby Admin</h1>
                  <p className="text-[10px] text-muted-foreground">Dashboard v2.0</p>
                </div>
              </div>

              <Separator className="bg-border/50" />

              <nav className="p-3 space-y-3 overflow-y-auto flex-1">
                {navGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-3 mb-1.5">
                      {group.label}
                    </p>
                    <div className="space-y-0.5">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNav(item.id)}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                            activeTab === item.id
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "hover:bg-secondary/80 text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <item.icon className="w-[18px] h-[18px]" />
                          <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                          {item.badge && item.badge > 0 && (
                            <Badge
                              variant={activeTab === item.id ? "secondary" : "destructive"}
                              className="text-[10px] px-1.5 h-5"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>

              <Separator className="bg-border/50" />

              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-9 h-9 border-2 border-primary/30">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
                      {userEmail.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{userEmail}</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Shield className="w-3 h-3" /> Administrator
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs" onClick={onLogout}>
                  <LogOut className="w-3.5 h-3.5 mr-2" />
                  Sign Out
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <div>
            <h1 className="font-display font-bold text-base">Admin</h1>
          </div>
        </div>

        <Button variant="ghost" size="icon" onClick={onRefresh} disabled={refreshing}>
          <RefreshCw className={cn("w-5 h-5", refreshing && "animate-spin")} />
        </Button>
      </div>
    </header>
  );
};
