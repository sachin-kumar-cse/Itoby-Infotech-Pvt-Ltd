import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WebDesign from "./pages/services/WebDesign";
import MobileApp from "./pages/services/MobileApp";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SoftwareSolutions from "./pages/services/SoftwareSolutions";
import Microsoft365 from "./pages/services/Microsoft365";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import JobDetails from "./pages/JobDetails";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TechFlow from "./pages/portfolio/TechFlow";
import LuxeFashion from "./pages/portfolio/LuxeFashion";
import FitTrack from "./pages/portfolio/FitTrack";
import QuickPay from "./pages/portfolio/QuickPay";
import RestaurantChain from "./pages/portfolio/RestaurantChain";
import B2BSaas from "./pages/portfolio/B2BSaas";
import ManufacturingERP from "./pages/portfolio/ManufacturingERP";
import HealthcarePortal from "./pages/portfolio/HealthcarePortal";
import LawFirmM365 from "./pages/portfolio/LawFirmM365";
import RetailM365 from "./pages/portfolio/RetailM365";
import KaspereyeSecurity from "./pages/portfolio/KaspereyeSecurity";
import FreightXpress from "./pages/portfolio/FreightXpress";
import RainfraStudio from "./pages/portfolio/RainfraStudio";
import Easy2Buy from "./pages/portfolio/Easy2Buy";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/mobile-app" element={<MobileApp />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/software-solutions" element={<SoftwareSolutions />} />
            <Route path="/services/microsoft-365" element={<Microsoft365 />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/techflow" element={<TechFlow />} />
            <Route path="/portfolio/luxe-fashion" element={<LuxeFashion />} />
            <Route path="/portfolio/fittrack" element={<FitTrack />} />
            <Route path="/portfolio/quickpay" element={<QuickPay />} />
            <Route path="/portfolio/restaurant-chain" element={<RestaurantChain />} />
            <Route path="/portfolio/b2b-saas" element={<B2BSaas />} />
            <Route path="/portfolio/manufacturing-erp" element={<ManufacturingERP />} />
            <Route path="/portfolio/healthcare-portal" element={<HealthcarePortal />} />
            <Route path="/portfolio/law-firm-m365" element={<LawFirmM365 />} />
            <Route path="/portfolio/retail-m365" element={<RetailM365 />} />
            <Route path="/portfolio/kaspereye-security" element={<KaspereyeSecurity />} />
            <Route path="/portfolio/freightxpress" element={<FreightXpress />} />
            <Route path="/portfolio/rainfra-studio" element={<RainfraStudio />} />
            <Route path="/portfolio/easy2buy" element={<Easy2Buy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetails />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
