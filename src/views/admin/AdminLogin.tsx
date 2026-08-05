import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Sparkles, KeyRound, ArrowLeft, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Floating3DBubbles } from "@/components/ui/floating-3d-bubbles";
import { SEOHead } from "@/components/SEOHead";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Auto-redirect if already logged in as admin
  useEffect(() => {
    const checkExistingSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const { data: roleData } = await supabase
            .from("user_roles")
            .select("role")
            .eq("user_id", session.user.id)
            .eq("role", "admin")
            .maybeSingle();

          if (roleData) {
            toast.info("Active admin session detected. Redirecting...");
            navigate("/admin/dashboard");
            return;
          }
        }
      } catch (err) {
        console.error("Session check error:", err);
      } finally {
        setIsCheckingAuth(false);
      }
    };
    checkExistingSession();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;

      // Check admin privileges
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", data.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError) throw roleError;

      if (!roleData) {
        await supabase.auth.signOut();
        throw new Error("Access Denied: You do not have administrator permissions.");
      }

      toast.success("Authentication successful! Welcome to Executive Portal.");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between p-6 sm:p-10 lg:p-12 gap-8 sm:gap-12 relative overflow-y-auto selection:bg-primary selection:text-primary-foreground">
      <SEOHead
        title="Admin Portal Login | Itoby Infotech"
        description="Encrypted Administrator Authentication Portal for Itoby Infotech Pvt Ltd."
        path="/admin"
        noindex={true}
      />

      {/* 3D Glass Orbs Background */}
      <Floating3DBubbles count={24} />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Bar with Generous Margins & Glass Border */}
      <header className="w-full max-w-5xl flex items-center justify-between py-4 sm:py-5 px-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-md shadow-sm relative z-10 mb-4 sm:mb-8 mt-2 sm:mt-4">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-display font-extrabold text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            IIPL
          </div>
          <span className="font-display font-bold text-base sm:text-lg text-foreground">
            Itoby <span className="text-primary">Infotech</span>
          </span>
        </a>

        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-card/80 border border-border/70 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
          <ShieldCheck size={14} className="text-primary" />
          <span>256-Bit SSL Encrypted</span>
        </div>
      </header>

      {/* Main Login Box with Top & Bottom Spacing */}
      <main className="w-full max-w-md my-auto relative z-10 py-6 sm:py-10 my-4 sm:my-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="bg-card/85 backdrop-blur-2xl border-primary/30 shadow-[0_20px_80px_-15px_hsl(var(--primary)/0.25)] rounded-3xl overflow-hidden p-3 sm:p-5">
            <CardHeader className="text-center pb-4 pt-6 space-y-3">
              {/* Top Shield Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
                className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-primary/35 ring-4 ring-primary/20 hover:scale-105 transition-transform duration-300"
              >
                <ShieldCheck className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              {/* Protected Portal Badge */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles size={13} className="animate-pulse text-primary" /> Executive Admin Portal
                </span>
              </div>

              <div>
                <CardTitle className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Sign In to Dashboard
                </CardTitle>
                <CardDescription className="text-muted-foreground text-xs sm:text-sm font-medium mt-1">
                  Enter authorized credentials to manage IIPL operations
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6">
              {isCheckingAuth ? (
                <div className="py-12 text-center space-y-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full mx-auto"
                  />
                  <p className="text-xs font-bold text-muted-foreground">Verifying admin session...</p>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Mail size={13} className="text-primary" /> Email Address
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="admin@itobyinfotech.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 pl-4 rounded-xl bg-background/70 backdrop-blur-md border-border/70 focus-visible:ring-2 focus-visible:ring-primary/50 text-sm font-semibold transition-all"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Lock size={13} className="text-primary" /> Password
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 pl-4 pr-11 rounded-xl bg-background/70 backdrop-blur-md border-border/70 focus-visible:ring-2 focus-visible:ring-primary/50 text-sm font-semibold transition-all"
                        required
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 cursor-pointer"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 text-primary" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Security Policy Alert */}
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-2.5 text-[11px] text-muted-foreground">
                    <ShieldAlert size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>
                      Access restricted to authorized personnel of <strong className="text-foreground">Itoby Infotech Pvt Ltd</strong>. All login attempts are logged and monitored.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full h-12 rounded-xl text-base font-extrabold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 cursor-pointer"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <KeyRound size={18} /> Authenticate & Access Portal
                      </span>
                    )}
                  </Button>
                </form>
              )}

              {/* Footer & Security Note */}
              <div className="mt-6 pt-4 border-t border-border/50 text-center space-y-3">
                <a
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Return to Public Website
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Bottom Footer Bar with Spacing & Top Border */}
      <footer className="w-full max-w-5xl py-5 sm:py-6 px-6 mb-2 sm:mb-4 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-md text-center text-xs text-muted-foreground/80 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <p>© {new Date().getFullYear()} Itoby Infotech Pvt Ltd. All rights reserved.</p>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-primary font-semibold">
            <CheckCircle2 size={12} /> System Status: Operational
          </span>
          <span className="text-muted-foreground font-medium">V3.4.0 High-Security</span>
        </div>
      </footer>
    </div>
  );
};

export default AdminLogin;
