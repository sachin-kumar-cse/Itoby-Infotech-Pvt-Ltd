import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import heroImage from "@/assets/portfolio/healthcare-portal.webp";
import manufacturingImage from "@/assets/portfolio/manufacturing-erp.webp";
import lawFirmImage from "@/assets/portfolio/law-firm-m365.webp";

const caseStudy = {
  title: "Healthcare Patient Portal",
  category: "Custom Portal",
  client: "MedCare Health Network",
  duration: "8 months",
  year: "2024",
  heroImage: heroImage,
  overview: "A HIPAA-compliant patient portal that reduced administrative time by 60% and significantly improved patient satisfaction scores.",
  challenge: [
    "Paper-based patient intake and record management consuming excessive staff time.",
    "Patients had no way to access their health records, schedule appointments, or message providers online.",
    "HIPAA compliance requirements added complexity to any digital solution.",
    "Integration with existing EMR (Electronic Medical Records) system was critical but technically challenging."
  ],
  solution: [
    "Built a secure, HIPAA-compliant portal with end-to-end encryption and comprehensive audit logging.",
    "Implemented digital patient intake forms that auto-populate into the EMR system.",
    "Created a patient-facing dashboard for viewing records, test results, and care instructions.",
    "Added online appointment scheduling with automated reminders via email and SMS.",
    "Developed secure messaging between patients and care providers with appropriate routing."
  ],
  results: [
    { metric: "Admin Time Saved", value: "60%" },
    { metric: "Patient Satisfaction", value: "+45%" },
    { metric: "Digital Adoption", value: "82%" },
    { metric: "No-Show Rate", value: "-35%" }
  ],
  techStack: ["React", "Node.js", "PostgreSQL", "AWS (HIPAA)", "Epic FHIR", "Twilio", "Auth0", "DataDog"],
  testimonial: {
    quote: "Our staff can finally focus on patient care instead of paperwork. Patients love the convenience, and we've seen measurable improvements in care outcomes.",
    author: "Dr. Amanda Foster",
    role: "Chief Medical Officer, MedCare Health Network"
  },
  relatedProjects: [
    {
      title: "Manufacturing ERP System",
      category: "Enterprise Software",
      image: manufacturingImage,
      path: "/portfolio/manufacturing-erp"
    },
    {
      title: "Law Firm M365 Migration",
      category: "M365 Integration",
      image: lawFirmImage,
      path: "/portfolio/law-firm-m365"
    }
  ]
};

const HealthcarePortal = () => <CaseStudyTemplate caseStudy={caseStudy} />;

export default HealthcarePortal;
