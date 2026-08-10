import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

const SITE_URL = "https://www.itobyinfotech.com";
const DEFAULT_IMAGE = "https://www.itobyinfotech.com/images/logo.png";
const BRAND_TAGLINE = "Itoby Infotech Pvt Ltd (IIPL) - Global Digital Agency & SaaS Lab";

export const SEOHead = ({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
  noindex = false,
}: SEOHeadProps) => {
  let fullTitle = title;
  if (!fullTitle.includes("Itoby Infotech Pvt Ltd (IIPL)")) {
    if (fullTitle.includes("Itoby Infotech")) {
      fullTitle = fullTitle.replace("Itoby Infotech", "Itoby Infotech Pvt Ltd (IIPL)");
    } else {
      fullTitle = `${title} | ${BRAND_TAGLINE}`;
    }
  }
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Itoby Infotech" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@itobyinfotech" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
