import { MetadataRoute } from 'next';
import { getSitemapRoutes, SITE_URL } from '@/lib/sitemapRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapRoutes().map(({ path: route, lastModified }) => ({
    url: `${SITE_URL}${route}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: route === '' ? 'daily' : route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : route.startsWith('/blog') ? 0.8 : 0.7,
  }));
}
