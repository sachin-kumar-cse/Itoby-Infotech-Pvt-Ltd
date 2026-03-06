import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://itobyinfotech.in";
const DEFAULT_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/NuIqdmrGTlSdYJak86UeamHtiDq1/social-images/social-1768300030161-logo.png";

export const SEOHead = ({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
  jsonLd,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Itoby Infotech`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

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
