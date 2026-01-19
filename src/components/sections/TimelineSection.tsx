import { motion } from "framer-motion";
import { Rocket, Users, Trophy, Building, Globe, Star } from "lucide-react";

const milestones = [
  {
    year: "2013",
    title: "Company Founded",
    description: "Started as a small web design studio in Patna with a vision to help local businesses go digital.",
    icon: Rocket,
  },
  {
    year: "2015",
    title: "Team Expansion",
    description: "Grew to 10+ team members and expanded services to include mobile app development.",
    icon: Users,
  },
  {
    year: "2017",
    title: "First Major Award",
    description: "Recognized as 'Best Digital Agency' at Bihar IT Awards for our innovative solutions.",
    icon: Trophy,
  },
  {
    year: "2019",
    title: "New Office",
    description: "Moved to a larger office space to accommodate our growing team of 25+ professionals.",
    icon: Building,
  },
  {
    year: "2021",
    title: "Global Reach",
    description: "Expanded services internationally, serving clients across 15+ countries.",
    icon: Globe,
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Completed 500+ projects and became a Microsoft 365 certified partner.",
    icon: Star,
  },
];

export const TimelineSection = () => {
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
            Our Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Milestones & <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A decade of innovation, growth, and commitment to excellence in digital solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-display text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </motion.div>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(75_100%_50%/0.3)]"
                  >
                    <milestone.icon className="text-primary-foreground" size={16} />
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
