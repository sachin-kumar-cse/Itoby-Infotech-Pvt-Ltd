import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Sparkles, KeyRound } from "lucide-react";
import { Floating3DBubbles } from "@/components/ui/floating-3d-bubbles";
import { SEOHead } from "@/components/SEOHead";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if user is admin
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', data.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (roleError) throw roleError;

      if (!roleData) {
        await supabase.auth.signOut();
        throw new Error("You don't have admin access privileges");
      }

      toast.success("Welcome back, Administrator!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <SEOHead
        title="Admin Portal Login"
        description="Admin portal authentication page."
        path="/admin"
        noindex={true}
      />
      {/* 3D Glass Orbs Background */}
      <Floating3DBubbles count={22} />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-glow-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="bg-card/80 backdrop-blur-2xl border-primary/25 shadow-[0_0_60px_rgba(132,204,22,0.15)] rounded-3xl overflow-hidden p-2 sm:p-4">
          <CardHeader className="text-center pb-4 pt-6 space-y-3">
            {/* Top Shield Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
              className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-primary/30 ring-4 ring-primary/20 hover:scale-105 transition-transform duration-300"
            >
              <ShieldCheck className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            {/* Protected Portal Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={13} className="animate-pulse text-primary" /> Protected Portal
              </span>
            </div>

            {/* Titles */}
            <div>
              <CardTitle className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                Admin Executive Portal
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm font-medium mt-1">
                Secure sign-in for Itoby Infotech management
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Mail size={13} className="text-primary" /> Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@itobyinfotech.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-4 rounded-xl bg-background/60 backdrop-blur-md border-border/60 focus-visible:ring-2 focus-visible:ring-primary/50 text-sm font-medium transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
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
                    className="h-12 pl-4 pr-11 rounded-xl bg-background/60 backdrop-blur-md border-border/60 focus-visible:ring-2 focus-visible:ring-primary/50 text-sm font-medium transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 mt-2"
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
                    <KeyRound size={18} /> Sign In to Executive Dashboard
                  </span>
                )}
              </Button>
            </form>

            {/* Footer & Security Note */}
            <div className="mt-6 pt-4 border-t border-border/40 text-center space-y-3">
              <p className="text-[11px] text-muted-foreground/80 flex items-center justify-center gap-1.5">
                🔒 256-Bit SSL Encrypted Management Access
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to Main Website
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
