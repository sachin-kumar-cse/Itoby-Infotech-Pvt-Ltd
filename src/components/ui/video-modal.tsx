import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Star, Quote, Sparkles, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface VideoTestimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  fullStory?: string;
  rating: number;
  thumbnail: string;
  videoUrl?: string;
  metric?: string;
  techUsed?: string[];
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: VideoTestimonial | null;
}

export const VideoModal = ({ isOpen, onClose, testimonial }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!testimonial) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-4xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Video Player Side */}
            <div className="w-full md:w-3/5 relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[450px]">
              {/* Simulated Video Player */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden group">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isPlaying ? "scale-105 opacity-90" : "scale-100 opacity-60 blur-[1px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Animated Waveform Overlay when Playing */}
                {isPlaying && (
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">Client Interview Recording</span>
                  </div>
                )}

                {/* Center Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute z-10 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/50 hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </button>

                {/* Bottom Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-xs text-white/80 font-mono font-medium">01:45 / 03:20</span>
                  </div>

                  {testimonial.metric && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {testimonial.metric}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Testimonial & Case Details Side */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto custom-scrollbar bg-card">
              <div>
                {/* Header close & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>

                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <h4 className="font-display text-xl font-bold text-foreground mb-3 leading-snug">
                  "{testimonial.quote}"
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {testimonial.fullStory ||
                    "Working with Itoby Infotech was an absolute game-changer. They built our platform with extreme precision, high speed, and delivered measurable business results within weeks of launch."}
                </p>

                {/* Key Metrics Card */}
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Impact & Deliverables
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>300% Conversion Boost</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>On-Time Milestone Delivery</span>
                  </div>
                </div>
              </div>

              {/* Client Info & Action */}
              <div className="pt-4 border-t border-border/60">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/40"
                  />
                  <div>
                    <h5 className="font-display font-bold text-foreground text-sm leading-tight">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl gap-2 text-xs border-primary/30 hover:border-primary hover:bg-primary/5"
                  onClick={() => window.open("/portfolio", "_blank")}
                >
                  Explore Related Case Study <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
