import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";

// Eagerly load the home page for fast first paint
import Index from "./pages/Index";

// Lazy load all other pages
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDesign = lazy(() => import("./pages/services/WebDesign"));
const MobileApp = lazy(() => import("./pages/services/MobileApp"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const SoftwareSolutions = lazy(() => import("./pages/services/SoftwareSolutions"));
const Microsoft365 = lazy(() => import("./pages/services/Microsoft365"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const RequestQuote = lazy(() => import("./pages/RequestQuote"));
const TechFlow = lazy(() => import("./pages/portfolio/TechFlow"));
const LuxeFashion = lazy(() => import("./pages/portfolio/LuxeFashion"));
const FitTrack = lazy(() => import("./pages/portfolio/FitTrack"));
const QuickPay = lazy(() => import("./pages/portfolio/QuickPay"));
const RestaurantChain = lazy(() => import("./pages/portfolio/RestaurantChain"));
const B2BSaas = lazy(() => import("./pages/portfolio/B2BSaas"));
const ManufacturingERP = lazy(() => import("./pages/portfolio/ManufacturingERP"));
const HealthcarePortal = lazy(() => import("./pages/portfolio/HealthcarePortal"));
const LawFirmM365 = lazy(() => import("./pages/portfolio/LawFirmM365"));
const RetailM365 = lazy(() => import("./pages/portfolio/RetailM365"));
const KaspereyeSecurity = lazy(() => import("./pages/portfolio/KaspereyeSecurity"));
const FreightXpress = lazy(() => import("./pages/portfolio/FreightXpress"));
const RainfraStudio = lazy(() => import("./pages/portfolio/RainfraStudio"));
const Easy2Buy = lazy(() => import("./pages/portfolio/Easy2Buy"));
const DynamicPortfolio = lazy(() => import("./pages/portfolio/DynamicPortfolio"));
const Install = lazy(() => import("./pages/Install"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
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
              <Route path="/portfolio/:slug" element={<DynamicPortfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:id" element={<JobDetails />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/install" element={<Install />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
