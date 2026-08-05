import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import { VideoModal, VideoTestimonial } from "@/components/ui/video-modal";

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO, TechStart Solutions",
    quote: "Itoby Infotech transformed our digital presence completely. Exceptional work!",
    fullStory: "We partnered with Itoby Infotech to redesign our SaaS workflow engine. The team delivered ahead of schedule and our user retention spiked by 300% within the first month.",
    rating: 5,
    metric: "300% Retention",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Director, GrowthHub",
    quote: "300% increase in organic traffic. Game-changing results!",
    fullStory: "Their SEO and digital marketing campaigns gave us top rankings in North America & India. Lead generation went from 50 to over 400 qualified inquiries per month.",
    rating: 5,
    metric: "400+ Leads/mo",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Founder, RetailPro",
    quote: "The custom ERP streamlined our entire operation beautifully.",
    fullStory: "Itoby built a robust multi-store inventory and rental CRM solution. We eliminated overbooking and saved 150+ hours of manual administrative labor every single month.",
    rating: 5,
    metric: "150 Hours Saved",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
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
  const [selectedTestimonial, setSelectedTestimonial] = useState<VideoTestimonial | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        testimonial={selectedTestimonial}
      />

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
            Real stories from real clients who transformed their business with us. Click any card to play client interview.
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
              onClick={() => setSelectedTestimonial(testimonial)}
              className="group rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>

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
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  {testimonial.metric && (
                    <span className="text-[11px] font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {testimonial.metric}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
