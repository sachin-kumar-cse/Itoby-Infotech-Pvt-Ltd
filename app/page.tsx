"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsMarqueeSection } from "@/components/sections/ClientsMarqueeSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import { useDbProjects } from "@/hooks/useDbProjects";

export default function HomePage() {
  // Preload projects immediately when the page loads
  useDbProjects();

  return (
    <>
      <HeroSection />
      <ClientsMarqueeSection />
      <StatsCounterSection />
      <AboutPreviewSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <AwardsSection />
      <TestimonialsSection />
      <TechStackSection />
      <FAQSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
