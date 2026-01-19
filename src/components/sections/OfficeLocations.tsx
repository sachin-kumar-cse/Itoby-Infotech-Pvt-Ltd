import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    city: "Patna",
    country: "India (HQ)",
    address: "123 Tech Park, Boring Road, Patna, Bihar 800001",
    phone: "+91 98765 43210",
    email: "patna@itobyinfotech.in",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
  {
    city: "Delhi NCR",
    country: "India",
    address: "456 Cyber Hub, DLF Phase 2, Gurugram, Haryana 122002",
    phone: "+91 11 4567 8901",
    email: "delhi@itobyinfotech.in",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "789 Business Bay, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@itobyinfotech.in",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
  },
];

export const OfficeLocations = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Offices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Visit Us <span className="gradient-text">Globally</span>
          </h2>
          <p className="text-muted-foreground">
            We have offices across multiple locations to serve you better.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MapPin className="text-primary group-hover:text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{office.city}</h3>
                    <p className="text-primary text-sm">{office.country}</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground flex items-start gap-3">
                    <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                    {office.address}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-3">
                    <Phone size={18} className="shrink-0 text-primary" />
                    <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-3">
                    <Mail size={18} className="shrink-0 text-primary" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </p>
                  <p className="text-muted-foreground flex items-center gap-3">
                    <Clock size={18} className="shrink-0 text-primary" />
                    {office.hours}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
