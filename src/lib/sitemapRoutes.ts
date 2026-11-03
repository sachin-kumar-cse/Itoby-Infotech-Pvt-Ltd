import { fallbackBlogs } from "@/data/blogsData";
import { detailedServicesList } from "@/data/servicesData";
import { productsList } from "@/data/productsData";
import { caseStudiesList } from "@/data/caseStudiesData";
import { industriesList } from "@/data/industriesData";
import { technologyList } from "@/data/technologyData";
import { pricingGuidesList } from "@/data/pricingData";
import { comparisonList } from "@/data/comparisonData";
import { resourcesList } from "@/data/resourcesData";
import { locationsList } from "@/data/locationsData";
import sitemapLastmod from "@/data/sitemapLastmod.json";

export const SITE_URL = "https://www.itobyinfotech.com";

export interface SitemapRoute {
  path: string;
  lastModified?: Date;
}

const LASTMOD: Record<string, string> = sitemapLastmod;

const STATIC_ROUTES = [
  "",
  "/about",
  "/products",
  "/case-studies",
  "/services",
  "/services/web-design",
  "/services/mobile-app",
  "/services/digital-marketing",
  "/services/software-solutions",
  "/services/microsoft-365",
  "/portfolio",
  "/portfolio/easy2buy",
  "/portfolio/juxtudio",
  "/portfolio/kaspereye-security",
  "/portfolio/rainfra-studio",
  "/portfolio/solidedgeconstructions",
  "/portfolio/rent-itoby",
  "/portfolio/lead-itoby",
  "/blog",
  "/careers",
  "/contact",
  "/request-quote",
  "/book-appointment",
  "/privacy",
  "/terms",
  "/install",
  "/industries",
  "/technology",
  "/pricing",
  "/comparison",
  "/resources",
  "/locations",
];

const HUB_DATA_FILES: Record<string, string> = {
  "/products": "src/data/productsData.ts",
  "/case-studies": "src/data/caseStudiesData.ts",
  "/services": "src/data/servicesData.ts",
  "/blog": "src/data/blogsData.ts",
  "/industries": "src/data/industriesData.ts",
  "/technology": "src/data/technologyData.ts",
  "/pricing": "src/data/pricingData.ts",
  "/comparison": "src/data/comparisonData.ts",
  "/resources": "src/data/resourcesData.ts",
  "/locations": "src/data/locationsData.ts",
};

const PORTFOLIO_VIEWS: Record<string, string> = {
  easy2buy: "Easy2Buy",
  juxtudio: "Juxtudio",
  "kaspereye-security": "KaspereyeSecurity",
  "rainfra-studio": "RainfraStudio",
  solidedgeconstructions: "SolidEdgeConstructions",
  "rent-itoby": "RentItoby",
  "lead-itoby": "LeadItoby",
};

function latest(...isoDates: (string | undefined)[]): Date | undefined {
  let max: number | undefined;
  for (const iso of isoDates) {
    if (!iso) continue;
    const time = Date.parse(iso);
    if (!Number.isNaN(time) && (max === undefined || time > max)) max = time;
  }
  return max === undefined ? undefined : new Date(max);
}

function latestOfSources(...sources: string[]): Date | undefined {
  return latest(...sources.map((source) => LASTMOD[source]));
}

function staticRouteSources(route: string): string[] {
  if (route === "") return ["app", "src/components/sections"];

  if (route.startsWith("/portfolio/")) {
    const view = PORTFOLIO_VIEWS[route.slice("/portfolio/".length)];
    return ["app/portfolio/[slug]", ...(view ? [`src/views/portfolio/${view}.tsx`] : [])];
  }

  const sources = [`app${route}`];
  if (HUB_DATA_FILES[route]) sources.push(HUB_DATA_FILES[route]);
  return sources;
}

function dynamicRoutes(section: string, dataFile: string, slugs: string[]): SitemapRoute[] {
  const lastModified = latestOfSources(`app/${section}/[slug]`, dataFile);
  return slugs.map((slug) => ({ path: `/${section}/${slug}`, lastModified }));
}

export function getSitemapRoutes(): SitemapRoute[] {
  const staticRoutes: SitemapRoute[] = STATIC_ROUTES.map((path) => ({
    path,
    lastModified: latestOfSources(...staticRouteSources(path)),
  }));

  const blogTemplateDate = LASTMOD["app/blog/[slug]"];
  const blogRoutes: SitemapRoute[] = fallbackBlogs.map((b) => ({
    path: `/blog/${b.slug}`,
    lastModified: latest(b.created_at, blogTemplateDate),
  }));

  const locationsLastModified = latestOfSources(
    "app/locations/[city]/[service]",
    "src/data/locationsData.ts"
  );
  const locationRoutes: SitemapRoute[] = locationsList.map((l) => ({
    path: `/locations/${l.citySlug}/${l.serviceSlug}`,
    lastModified: locationsLastModified,
  }));

  const careerRoutes: SitemapRoute[] = [
    {
      path: "/careers/ui-ux-designer",
      lastModified: latestOfSources("app/careers/[id]", "src/data/jobHelpers.ts"),
    },
  ];

  return [
    ...staticRoutes,
    ...dynamicRoutes("products", "src/data/productsData.ts", productsList.map((p) => p.slug)),
    ...dynamicRoutes("case-studies", "src/data/caseStudiesData.ts", caseStudiesList.map((cs) => cs.slug)),
    ...dynamicRoutes("services", "src/data/servicesData.ts", detailedServicesList.map((s) => s.slug)),
    ...blogRoutes,
    ...dynamicRoutes("industries", "src/data/industriesData.ts", industriesList.map((i) => i.slug)),
    ...dynamicRoutes("technology", "src/data/technologyData.ts", technologyList.map((t) => t.slug)),
    ...dynamicRoutes("pricing", "src/data/pricingData.ts", pricingGuidesList.map((p) => p.slug)),
    ...dynamicRoutes("comparison", "src/data/comparisonData.ts", comparisonList.map((c) => c.slug)),
    ...dynamicRoutes("resources", "src/data/resourcesData.ts", resourcesList.map((r) => r.slug)),
    ...locationRoutes,
    ...careerRoutes,
  ];
}
