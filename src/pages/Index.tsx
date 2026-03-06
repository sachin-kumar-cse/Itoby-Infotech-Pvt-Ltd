import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
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

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Premium Web Design, App Development & Digital Marketing Agency"
        description="Itoby Infotech is a leading digital agency specializing in premium web design, mobile app development, digital marketing, and custom software solutions. Transform your business with cutting-edge technology."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Itoby Infotech",
          url: "https://itobyinfotech.in",
          logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/uploads/1768299997879-logo.png",
          description: "Premier digital agency delivering exceptional web design, app development, and marketing solutions.",
          foundingDate: "2013",
          address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" },
          contactPoint: { "@type": "ContactPoint", telephone: "+91-98765-43210", contactType: "sales", email: "info@itobyinfotech.in" },
          sameAs: [
            "https://linkedin.com/company/itobyinfotech",
            "https://twitter.com/itobyinfotech",
            "https://instagram.com/itobyinfotech",
            "https://facebook.com/itobyinfotech",
          ],
        }}
      />
      <HeroSection />
      <TrustedBySection />
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
    </Layout>
  );
};

export default Index;
