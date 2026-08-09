import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsMarqueeSection } from "@/components/sections/ClientsMarqueeSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SaasProductsSection } from "@/components/sections/SaasProductsSection";
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

const Index = () => {
  // Preload projects immediately when the page loads
  useDbProjects();

  return (
    <Layout>
      <SEOHead
        title="Itoby Infotech Pvt Ltd (IIPL) - Global Digital Agency & Enterprise SaaS Lab"
        description="Itoby Infotech Pvt Ltd (IIPL) is a premier global digital agency & SaaS software lab. We engineer Next.js web applications, mobile apps, custom software, digital marketing & proprietary SaaS (IIPL Lead, Renting, Billing, Cashmemo & Calling) for clients across India, USA, Canada, Australia, Dubai (UAE), UK & worldwide."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Itoby Infotech Pvt Ltd (IIPL)",
          alternateName: ["IIPL", "Itoby Infotech", "Itoby Infotech Private Limited"],
          url: "https://www.itobyinfotech.com",
          logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/uploads/1768299997879-logo.png",
          description: "Global digital agency & SaaS software builder behind IIPL Lead, IIPL Renting, IIPL Billing, IIPL Cashmemo and IIPL Calling AI voice agents.",
          foundingDate: "2013",
          areaServed: ["IN", "US", "CA", "AU", "AE", "GB"],
          address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
          contactPoint: { "@type": "ContactPoint", telephone: "+91-9142773500", contactType: "sales", email: "info@itobyinfotech.com" },
          sameAs: [
            "https://linkedin.com/company/itobyinfotech",
            "https://twitter.com/itobyinfotech",
            "https://instagram.com/itobyinfotech",
            "https://facebook.com/itobyinfotech",
          ],
        }}
      />
      <HeroSection />
      <ClientsMarqueeSection />
      <StatsCounterSection />
      <AboutPreviewSection />
      <ServicesSection />
      <SaasProductsSection />
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
    </Layout>
  );
};

export default Index;
