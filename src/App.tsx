import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import ErrorBoundary from "@/components/ErrorBoundary";
import initSentry from "@/lib/sentry";
import { CurrencyProvider } from "@/hooks/useCurrency";

// Initialize Sentry monitoring
initSentry();

// Eagerly load the home page for fast first paint
import Index from "./views/Index";

// Lazy load all other pages
const About = lazy(() => import("./views/About"));
const Services = lazy(() => import("./views/Services"));
const Portfolio = lazy(() => import("./views/Portfolio"));
const Blog = lazy(() => import("./views/Blog"));
const BlogPost = lazy(() => import("./views/BlogPost"));
const Contact = lazy(() => import("./views/Contact"));
const NotFound = lazy(() => import("./views/NotFound"));
const WebDesign = lazy(() => import("./views/services/WebDesign"));
const MobileApp = lazy(() => import("./views/services/MobileApp"));
const DigitalMarketing = lazy(() => import("./views/services/DigitalMarketing"));
const SoftwareSolutions = lazy(() => import("./views/services/SoftwareSolutions"));
const Microsoft365 = lazy(() => import("./views/services/Microsoft365"));
const Careers = lazy(() => import("./views/Careers"));
const PrivacyPolicy = lazy(() => import("./views/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./views/TermsOfService"));
const JobDetails = lazy(() => import("./views/JobDetails"));
const AdminLogin = lazy(() => import("./views/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./views/admin/AdminDashboard"));
const RequestQuote = lazy(() => import("./views/RequestQuote"));
const TechFlow = lazy(() => import("./views/portfolio/TechFlow"));
const LuxeFashion = lazy(() => import("./views/portfolio/LuxeFashion"));
const FitTrack = lazy(() => import("./views/portfolio/FitTrack"));
const QuickPay = lazy(() => import("./views/portfolio/QuickPay"));
const RestaurantChain = lazy(() => import("./views/portfolio/RestaurantChain"));
const B2BSaas = lazy(() => import("./views/portfolio/B2BSaas"));
const ManufacturingERP = lazy(() => import("./views/portfolio/ManufacturingERP"));
const HealthcarePortal = lazy(() => import("./views/portfolio/HealthcarePortal"));
const LawFirmM365 = lazy(() => import("./views/portfolio/LawFirmM365"));
const RetailM365 = lazy(() => import("./views/portfolio/RetailM365"));
const KaspereyeSecurity = lazy(() => import("./views/portfolio/KaspereyeSecurity"));
const FreightXpress = lazy(() => import("./views/portfolio/FreightXpress"));
const RainfraStudio = lazy(() => import("./views/portfolio/RainfraStudio"));
const Easy2Buy = lazy(() => import("./views/portfolio/Easy2Buy"));
const SolidEdgeConstructions = lazy(() => import("./views/portfolio/SolidEdgeConstructions"));
const Juxtudio = lazy(() => import("./views/portfolio/Juxtudio"));
const RentItoby = lazy(() => import("./views/portfolio/RentItoby"));
const LeadItoby = lazy(() => import("./views/portfolio/LeadItoby"));
const DynamicPortfolio = lazy(() => import("./views/portfolio/DynamicPortfolio"));
const Install = lazy(() => import("./views/Install"));
const BookAppointment = lazy(() => import("./views/BookAppointment"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <CurrencyProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/home" element={<Navigate to="/" replace />} />
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
                  <Route path="/portfolio/solidedgeconstructions" element={<SolidEdgeConstructions />} />
                  <Route path="/portfolio/juxtudio" element={<Juxtudio />} />
                  <Route path="/portfolio/rent-itoby" element={<RentItoby />} />
                  <Route path="/portfolio/lead-itoby" element={<LeadItoby />} />
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
                  <Route path="/book-appointment" element={<BookAppointment />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </CurrencyProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
