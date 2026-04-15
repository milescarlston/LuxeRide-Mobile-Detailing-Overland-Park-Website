export const BUSINESS = {
  name: "LuxeRide Mobile Car Detailing",
  shortName: "LuxeRide",
  tagline: "Premium Mobile Detailing — We Come to You",
  phone: "(913) 555-0147",
  phoneHref: "tel:+19135550147",
  email: "hello@luxeridemobile.com",
  url: "https://www.luxeridemobile.com",
  address: {
    street: "Overland Park",
    city: "Overland Park",
    state: "KS",
    zip: "66212",
    country: "US",
  },
  geo: { lat: 38.9822, lng: -94.6708 },
  hours: "Monday–Saturday 7:00 AM – 7:00 PM, Sunday by appointment",
  openingHours: [
    "Mo-Sa 07:00-19:00",
  ],
  priceRange: "$$",
  social: {
    facebook: "https://www.facebook.com/luxeridemobile",
    instagram: "https://www.instagram.com/luxeridemobile",
    google: "https://g.page/luxeridemobile",
    yelp: "https://www.yelp.com/biz/luxeride-mobile-car-detailing-overland-park",
  },
} as const;

export const SERVICE_AREAS = [
  "Overland Park",
  "Leawood",
  "Olathe",
  "Lenexa",
  "Prairie Village",
  "Shawnee",
  "Mission",
  "Merriam",
  "Gardner",
  "Spring Hill",
] as const;

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  startingPrice: number;
  targetKeyword: string;
  icon: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "exterior-detail",
    title: "Exterior Wash & Detail",
    shortTitle: "Exterior Detail",
    description:
      "A thorough hand wash, clay bar treatment, polish, and protective sealant to restore your vehicle's showroom shine.",
    startingPrice: 75,
    targetKeyword: "exterior car detailing Overland Park",
    icon: "sparkles",
    features: [
      "Hand wash & dry",
      "Clay bar decontamination",
      "One-step polish",
      "Paint sealant application",
      "Tire & wheel cleaning",
      "Window cleaning",
      "Trim dressing",
    ],
  },
  {
    slug: "interior-detail",
    title: "Interior Detail",
    shortTitle: "Interior Detail",
    description:
      "Deep cleaning of every interior surface — vacuuming, steam cleaning, leather conditioning, and odor elimination for a fresh cabin.",
    startingPrice: 99,
    targetKeyword: "interior car detailing Overland Park",
    icon: "car-seat",
    features: [
      "Full vacuum & debris removal",
      "Steam cleaning",
      "Leather cleaning & conditioning",
      "Plastic & vinyl dressing",
      "Window cleaning (interior)",
      "Odor elimination",
      "Dashboard & console detail",
    ],
  },
  {
    slug: "full-detail",
    title: "Full Detail Package",
    shortTitle: "Full Detail",
    description:
      "The complete package — our exterior and interior detail combined for a bumper-to-bumper transformation your vehicle deserves.",
    startingPrice: 149,
    targetKeyword: "full car detail Overland Park",
    icon: "shield-check",
    features: [
      "Complete exterior detail",
      "Complete interior detail",
      "Engine bay cleaning",
      "Door jamb cleaning",
      "Headlight cleaning",
      "Exhaust tip polishing",
      "Air freshener application",
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    shortTitle: "Ceramic Coating",
    description:
      "Long-lasting nano-ceramic protection that repels water, resists UV damage, and keeps your paint looking flawless for years.",
    startingPrice: 499,
    targetKeyword: "ceramic coating Overland Park",
    icon: "droplet",
    features: [
      "Paint decontamination",
      "Single-stage paint correction",
      "SiO2 ceramic coating application",
      "Hydrophobic finish",
      "UV protection",
      "2–5 year durability",
      "Aftercare kit included",
    ],
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    shortTitle: "Paint Correction",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches, and oxidation — revealing the true depth and clarity of your paint.",
    startingPrice: 299,
    targetKeyword: "paint correction Kansas City",
    icon: "wand",
    features: [
      "Paint inspection & assessment",
      "Clay bar decontamination",
      "Multi-stage machine polishing",
      "Swirl mark removal",
      "Scratch removal",
      "Paint depth gauge measurement",
      "Protective sealant application",
    ],
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    shortTitle: "Headlight Restoration",
    description:
      "Professional wet-sanding and polishing to remove oxidation and haze, restoring crystal-clear headlights for safer nighttime driving.",
    startingPrice: 59,
    targetKeyword: "headlight restoration Overland Park",
    icon: "lightbulb",
    features: [
      "Oxidation removal",
      "Multi-stage wet sanding",
      "Machine polishing",
      "UV-resistant clear coat",
      "Improved nighttime visibility",
      "Both headlights included",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "David R.",
    vehicle: "2023 BMW X5",
    rating: 5,
    quote:
      "LuxeRide came to my office and had my X5 looking brand new by the time I got off work. The convenience alone is worth it, but the quality blew me away.",
  },
  {
    name: "Sarah M.",
    vehicle: "2022 Tesla Model Y",
    rating: 5,
    quote:
      "I've tried three different detailers in Overland Park and LuxeRide is hands-down the best. The ceramic coating they applied still beads water beautifully after six months.",
  },
  {
    name: "Marcus T.",
    vehicle: "2021 Ford F-150",
    rating: 5,
    quote:
      "My truck had seen better days after a year of hauling. The full detail package brought it back to life. Even the bed looks spotless. Highly recommend.",
  },
  {
    name: "Jennifer L.",
    vehicle: "2024 Lexus RX",
    rating: 5,
    quote:
      "Professional, punctual, and the results speak for themselves. My Lexus has never looked this good — not even when I drove it off the lot.",
  },
  {
    name: "Robert K.",
    vehicle: "2020 Porsche 911",
    rating: 5,
    quote:
      "I'm very particular about who touches my 911. After seeing LuxeRide's paint correction work, I won't trust anyone else. Absolutely flawless.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
