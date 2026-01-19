import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "15+ years in digital innovation",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Tech architect & innovator",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Amit Verma",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning UI/UX designer",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sneha Patel",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Agile methodology expert",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vikram Singh",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack development guru",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Anita Desai",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Digital marketing strategist",
    linkedin: "#",
    twitter: "#",
  },
];

export const TeamSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our talented team of designers, developers, and strategists work together to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Social Links Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={member.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@itobyinfotech.in`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Mail size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
