import { BUSINESS, SERVICE_AREAS, SERVICES, type Service } from "./constants";

// Stable @id used to cross-reference the LocalBusiness node from Service schemas
// so search engines can resolve them to a single business graph.
const LOCAL_BUSINESS_ID = `${BUSINESS.url}/#localbusiness`;
const ORGANIZATION_ID = `${BUSINESS.url}/#organization`;

const DEFAULT_IMAGE = `${BUSINESS.url}/images/hero.jpg`;
const LOGO_URL = `${BUSINESS.url}/images/logo.png`;

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: BUSINESS.address.country,
  };
}

function areaServedCities() {
  return SERVICE_AREAS.map((city, i) => ({
    "@type": "City",
    name: city,
    ...(i === 0
      ? { sameAs: "https://en.wikipedia.org/wiki/Overland_Park,_Kansas" }
      : {}),
  }));
}

function openingHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "17:00",
      description: "By appointment only",
    },
  ];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: LOGO_URL,
    description:
      "Professional mobile car detailing in Overland Park, KS. We come to your home or office.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: postalAddress(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: Object.values(BUSINESS.social),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "@id": LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    description:
      "Professional mobile car detailing in Overland Park, KS. Premium exterior and interior detailing, ceramic coating, and headlight restoration — we come to your home or office.",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: DEFAULT_IMAGE,
    logo: LOGO_URL,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Venmo",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: areaServedCities(),
    openingHoursSpecification: openingHours(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Car Detailing Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${BUSINESS.url}/services/${s.slug}`,
        },
      })),
    },
    sameAs: Object.values(BUSINESS.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

function serviceOfferCatalog(service: Service) {
  const catalogName = `${service.shortTitle} Pricing`;

  if (service.vehicleTiers) {
    return {
      "@type": "OfferCatalog",
      name: catalogName,
      itemListElement: service.vehicleTiers.map((tier) => ({
        "@type": "Offer",
        name: tier.label,
        description: tier.description,
        price: tier.price.toFixed(2),
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: tier.price.toFixed(2),
          priceCurrency: "USD",
        },
      })),
    };
  }

  if (service.coatingTiers) {
    return {
      "@type": "OfferCatalog",
      name: catalogName,
      itemListElement: service.coatingTiers.map((tier) => ({
        "@type": "Offer",
        name: tier.label,
        price: tier.price.toFixed(2),
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: tier.price.toFixed(2),
          priceCurrency: "USD",
        },
      })),
    };
  }

  if (service.standalonePricing) {
    const { standalone, addon } = service.standalonePricing;
    return {
      "@type": "OfferCatalog",
      name: catalogName,
      itemListElement: [
        {
          "@type": "Offer",
          name: "Standalone",
          description: "Both headlights",
          price: standalone.toFixed(2),
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: standalone.toFixed(2),
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          name: "Add-on",
          description: "With any detail package",
          price: addon.toFixed(2),
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: addon.toFixed(2),
            priceCurrency: "USD",
          },
        },
      ],
    };
  }

  return undefined;
}

const SERVICE_TYPE_MAP: Record<string, string> = {
  "exterior-detail": "Exterior Car Detailing",
  "interior-detail": "Interior Car Detailing",
  "full-detail": "Full Car Detailing",
  "ceramic-coating": "Ceramic Coating",
  "headlight-restoration": "Headlight Restoration",
};

export function serviceSchema(service: Service) {
  const catalog = serviceOfferCatalog(service);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${BUSINESS.url}/services/${service.slug}`,
    serviceType: SERVICE_TYPE_MAP[service.slug] ?? service.title,
    provider: {
      "@type": "AutoDetailing",
      "@id": LOCAL_BUSINESS_ID,
    },
    areaServed: areaServedCities(),
    ...(catalog ? { hasOfferCatalog: catalog } : {}),
    offers: {
      "@type": "Offer",
      price: service.startingPrice.toFixed(2),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: service.startingPrice.toFixed(2),
        priceCurrency: "USD",
      },
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.href}`,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const url = `${BUSINESS.url}/blog/${article.slug}`;
  const image = article.image
    ? `${BUSINESS.url}${article.image}`
    : DEFAULT_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
