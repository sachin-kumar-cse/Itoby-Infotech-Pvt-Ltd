import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Star, Quote } from "lucide-react";

const videoTestimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO, TechStart Solutions",
    quote: "Itoby Infotech transformed our digital presence completely. Exceptional work!",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Director, GrowthHub",
    quote: "300% increase in organic traffic. Game-changing results!",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&crop=face",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Founder, RetailPro",
    quote: "The custom ERP streamlined our entire operation beautifully.",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const VideoTestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Video Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Hear From Our <span className="gradient-text">Happy Clients</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from real clients who transformed their business with us.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videoTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                  
                  {/* Play Button */}
                  <motion.button
                    onClick={() => setActiveVideo(testimonial.videoUrl)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                  >
                    <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
                  </motion.button>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex gap-0.5 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <Quote className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-display font-bold text-sm">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X size={20} />
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Client Testimonial Video"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
