import { MetadataRoute } from 'next';
import { fallbackBlogs } from '@/data/blogsData';
import { detailedServicesList } from '@/data/servicesData';
import { industriesList } from '@/data/industriesData';
import { technologyList } from '@/data/technologyData';
import { pricingGuidesList } from '@/data/pricingData';
import { comparisonList } from '@/data/comparisonData';
import { resourcesList } from '@/data/resourcesData';
import { locationsList } from '@/data/locationsData';

const baseUrl = 'https://itobyinfotech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/web-design',
    '/services/mobile-app',
    '/services/digital-marketing',
    '/services/software-solutions',
    '/services/microsoft-365',
    '/portfolio',
    '/portfolio/techflow',
    '/portfolio/luxe-fashion',
    '/portfolio/fittrack',
    '/portfolio/quickpay',
    '/portfolio/restaurant-chain',
    '/portfolio/b2b-saas',
    '/portfolio/manufacturing-erp',
    '/portfolio/healthcare-portal',
    '/portfolio/law-firm-m365',
    '/portfolio/retail-m365',
    '/portfolio/kaspereye-security',
    '/portfolio/freightxpress',
    '/portfolio/rainfra-studio',
    '/portfolio/easy2buy',
    '/portfolio/solidedgeconstructions',
    '/portfolio/juxtudio',
    '/portfolio/rent-itoby',
    '/portfolio/lead-itoby',
    '/blog',
    '/careers',
    '/contact',
    '/request-quote',
    '/book-appointment',
    '/privacy',
    '/terms',
    '/install',
    '/industries',
    '/technology',
    '/pricing',
    '/comparison',
    '/resources',
    '/locations',
  ];

  const serviceRoutes = detailedServicesList.map((s) => `/services/${s.slug}`);
  const blogRoutes = fallbackBlogs.map((b) => `/blog/${b.slug}`);
  const industryRoutes = industriesList.map((i) => `/industries/${i.slug}`);
  const techRoutes = technologyList.map((t) => `/technology/${t.slug}`);
  const pricingRoutes = pricingGuidesList.map((p) => `/pricing/${p.slug}`);
  const compareRoutes = comparisonList.map((c) => `/comparison/${c.slug}`);
  const resourceRoutes = resourcesList.map((r) => `/resources/${r.slug}`);
  const locationRoutes = locationsList.map((l) => `/locations/${l.citySlug}/${l.serviceSlug}`);

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...industryRoutes,
    ...techRoutes,
    ...pricingRoutes,
    ...compareRoutes,
    ...resourceRoutes,
    ...locationRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : route.startsWith('/blog') ? 0.8 : 0.7,
  }));
}
