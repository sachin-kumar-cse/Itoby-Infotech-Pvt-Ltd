import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ClientsMarqueeSection } from "@/components/sections/ClientsMarqueeSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <ClientsMarqueeSection />
      <AboutPreviewSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <AwardsSection />
      <TestimonialsSection />
      <TechStackSection />
      <FAQSection />
      <BlogPreviewSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
