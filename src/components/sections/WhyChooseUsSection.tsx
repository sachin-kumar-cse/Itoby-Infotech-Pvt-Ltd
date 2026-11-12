"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden bg-background dark:bg-[#161616] transition-colors duration-300">
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Our Strategic Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5">
            Engineered for Digital{" "}
            <span className="gradient-text">Success &amp; Growth</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We merge technical software engineering with conversion-focused design to deliver
            custom digital products that rank higher, engage audiences, and drive real business growth.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {/* Card 1: AI-powered solutions (Top Left - Spans 2 Columns) */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative md:col-span-2 lg:col-span-2 min-h-[460px] sm:min-h-[480px] lg:h-[500px] rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 lg:p-12 bg-[#F4F6F8] dark:bg-[#1C1C1C] border border-neutral-200/80 dark:border-white/[0.08] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* 3D Robot Head Illustration */}
            <div className="absolute -right-12 sm:-right-4 lg:right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] lg:w-[460px] pointer-events-none select-none z-0">
              <motion.img
                src="/images/services/service-ai.webp"
                alt="AI-powered solutions"
                className="w-full h-auto object-contain transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <div className="relative z-10">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                AI-powered<br />solutions
              </h3>
            </div>

            {/* Tags & Description */}
            <div className="relative z-10 max-w-md mt-auto pt-8">
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {["UI/UX", "Web design", "Packaging", "Motion", "3D models"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide border border-neutral-400/50 dark:border-white/20 text-neutral-800 dark:text-white/90 bg-neutral-200/40 dark:bg-white/5 backdrop-blur-sm group-hover:border-neutral-900/60 dark:group-hover:border-white/40 hover:!bg-neutral-900 hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-all duration-300 cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed">
                Intelligent automation, predictive analytics, and machine learning-driven applications.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Fintech (Top Right - Electric Lime) */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative col-span-1 md:col-span-1 lg:col-span-1 min-h-[460px] sm:min-h-[480px] lg:h-[500px] rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 lg:p-12 bg-[#DDF160] border border-[#DDF160]/40 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#DDF160]/20 transition-all duration-500"
          >
            {/* 3D Geodesic Sphere Illustration */}
            <div className="absolute -top-14 -right-12 sm:-top-16 sm:-right-10 w-[240px] sm:w-[280px] lg:w-[310px] pointer-events-none select-none z-0">
              <motion.img
                src="/images/services/service-fintech.webp"
                alt="Fintech"
                animate={{ y: [-7, 7, -7] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-24">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#121212] leading-tight mb-5">
                Fintech
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {["Frontend", "Interactions", "Backend"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide border border-[#121212]/30 text-[#121212] bg-[#121212]/5 hover:!bg-[#121212] hover:!text-[#DDF160] hover:!border-[#121212] transition-all duration-300 cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[#121212]/80 text-sm sm:text-[15px] leading-relaxed">
                Innovative financial solutions, from digital banking to payment processing and investment platforms.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Blockchain (Bottom Left - Lavender / Soft Purple) */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative col-span-1 md:col-span-1 lg:col-span-1 min-h-[460px] sm:min-h-[480px] lg:h-[500px] rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 lg:p-12 bg-[#9F8BE7] border border-[#9F8BE7]/40 flex flex-col justify-start overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#9F8BE7]/20 transition-all duration-500"
          >
            {/* Top Content */}
            <div className="relative z-10">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-tight mb-5">
                Blockchain
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {["Strategy", "Social media", "SEO"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide border border-white/40 text-white bg-white/10 hover:!bg-white hover:!text-[#9F8BE7] hover:!border-white transition-all duration-300 cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed">
                Secure and transparent decentralized applications, including smart contracts and cryptocurrencies.
              </p>
            </div>

            {/* 3D Network Node Sphere Illustration (Bottom Anchored) */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 sm:-bottom-28 w-[270px] sm:w-[310px] pointer-events-none select-none z-0">
              <motion.img
                src="/images/services/service-blockchain.webp"
                alt="Blockchain"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 4: Cybersecurity (Bottom Center - Crisp White) */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative col-span-1 md:col-span-1 lg:col-span-1 min-h-[460px] sm:min-h-[480px] lg:h-[500px] rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 lg:p-12 bg-[#FFFFFF] border border-neutral-200/80 flex flex-col justify-start overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Top Content */}
            <div className="relative z-10">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#121212] leading-tight mb-5">
                Cybersecurity
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {["Brand strategy", "Logo design", "Guidelines"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide border border-[#121212]/30 text-[#121212] bg-[#121212]/5 hover:!bg-[#121212] hover:!text-white hover:!border-[#121212] transition-all duration-300 cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                Advanced threat detection, encryption solutions, and secure data protection.
              </p>
            </div>

            {/* 3D Metallic Shield Illustration (Bottom Anchored) */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 sm:-bottom-24 w-[250px] sm:w-[290px] pointer-events-none select-none z-0">
              <motion.img
                src="/images/services/service-cybersecurity.webp"
                alt="Cybersecurity"
                className="w-full h-auto object-contain transform group-hover:-translate-y-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 5: Gaming (Bottom Right - Dark Tint) */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative col-span-1 md:col-span-1 lg:col-span-1 min-h-[460px] sm:min-h-[480px] lg:h-[500px] rounded-[32px] sm:rounded-[38px] p-8 sm:p-10 lg:p-12 bg-[#F4F6F8] dark:bg-[#1C1C1C] border border-neutral-200/80 dark:border-white/[0.08] flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* 3D Graphics Card / GPU Illustration (Top Anchored) */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-16 sm:-top-20 w-[270px] sm:w-[310px] pointer-events-none select-none z-0">
              <motion.img
                src="/images/services/service-gaming.webp"
                alt="Gaming"
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-28">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-neutral-900 dark:text-white leading-tight mb-5">
                Gaming
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                {["E-Commerce", "Maintenance", "Support"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide border border-neutral-400/50 dark:border-white/20 text-neutral-800 dark:text-white/90 bg-neutral-200/40 dark:bg-white/5 backdrop-blur-sm group-hover:border-neutral-900/60 dark:group-hover:border-white/40 hover:!bg-neutral-900 hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-all duration-300 cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed">
                Immersive experiences, multiplayer platforms, and game engine development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
