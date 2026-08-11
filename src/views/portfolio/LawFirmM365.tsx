import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/law-firm-m365.webp";
import retailImage from "@/assets/portfolio/retail-m365.webp";
import healthcareImage from "@/assets/portfolio/healthcare-portal.webp";

const caseStudy = {
  title: "Law Firm M365 Migration",
  category: "Professional Services",
  client: "Sterling & Associates LLP",
  duration: "3 months",
  year: "2025",
  heroImage: heroImage,
  alt: "Microsoft 365 migration solution for law firms",
  overview: "A seamless Microsoft 365 migration for a 150-person law firm that reduced IT costs by 50% while improving collaboration and security.",
  challenge: [
    "Aging on-premises infrastructure requiring significant capital investment to maintain or upgrade.",
    "Remote work demands exposed limitations of the existing email and file sharing systems.",
    "Sensitive client data required enterprise-grade security and compliance (attorney-client privilege).",
    "Partners were resistant to change and concerned about learning new technology."
  ],
  solution: [
    "Designed a phased migration approach that minimized disruption to billable work.",
    "Migrated 15 years of email archives and documents to Microsoft 365 with zero data loss.",
    "Implemented advanced security features including DLP, conditional access, and litigation hold.",
    "Created practice-group-specific SharePoint sites for matter management and collaboration.",
    "Provided tailored training programs for different user groups, from partners to paralegals."
  ],
  results: [
    { metric: "IT Cost Reduction", value: "50%" },
    { metric: "Remote Productivity", value: "+40%" },
    { metric: "Data Migration", value: "100%" },
    { metric: "User Adoption", value: "95%" }
  ],
  techStack: ["Microsoft 365", "SharePoint Online", "Teams", "Azure AD", "Intune", "Power Automate", "Compliance Center", "BitTitan"],
  testimonial: {
    quote: "We were skeptical about moving to the cloud, but the migration was flawless. Our attorneys can now work from anywhere without compromising security or efficiency.",
    author: "James Sterling",
    role: "Managing Partner, Sterling & Associates LLP"
  },
  relatedProjects: [
    {
      title: "Retail Chain Collaboration",
      category: "Retail",
      image: retailImage,
      path: "/portfolio/retail-m365"
    },
    {
      title: "Healthcare Patient Portal",
      category: "Custom Portal",
      image: healthcareImage,
      path: "/portfolio/healthcare-portal"
    }
  ]
};

const LawFirmM365 = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default LawFirmM365;
