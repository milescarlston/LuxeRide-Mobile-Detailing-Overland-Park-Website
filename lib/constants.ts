export const BUSINESS = {
  name: "LuxeRide Mobile Car Detailing",
  shortName: "LuxeRide",
  tagline: "We Come to You. Professional Results, Zero Hassle.",
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
  hours: "Mon-Sat 7:00 AM - 7:00 PM, Sunday by appointment",
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
      "We'll get your car looking brand new with a thorough hand wash, clay bar treatment, polish, and protective sealant. The works, right in your driveway.",
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
      "Deep cleaning for every surface inside your car. We vacuum, steam clean, condition the leather, and get rid of any odors. Your car will smell and feel like new.",
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
      "The whole thing, inside and out. Our most popular package combines the full exterior and interior detail for a complete bumper-to-bumper transformation.",
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
      "A protective ceramic layer that lasts for years. It keeps your paint looking fresh, makes washing way easier, and protects against UV damage, bird droppings, and road grime.",
    startingPrice: 499,
    targetKeyword: "ceramic coating Overland Park",
    icon: "droplet",
    features: [
      "Paint decontamination",
      "Single-stage polish",
      "SiO2 ceramic coating application",
      "Hydrophobic finish",
      "UV protection",
      "2-5 year durability",
      "Aftercare kit included",
    ],
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    shortTitle: "Headlight Restoration",
    description:
      "Cloudy, yellowed headlights are a safety hazard and make your car look old. We sand, polish, and seal them so they're crystal clear again.",
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
      "LuxeRide came to my office and had my X5 looking brand new by the time I got off work. So convenient, and the quality was way better than I expected.",
  },
  {
    name: "Sarah M.",
    vehicle: "2022 Tesla Model Y",
    rating: 5,
    quote:
      "I've tried three different detailers in Overland Park and LuxeRide is hands-down the best. The ceramic coating still beads water perfectly after six months.",
  },
  {
    name: "Marcus T.",
    vehicle: "2021 Ford F-150",
    rating: 5,
    quote:
      "My truck had seen better days after a year of hauling. The full detail brought it back to life. Even the bed looks spotless. Would definitely recommend.",
  },
  {
    name: "Jennifer L.",
    vehicle: "2024 Lexus RX",
    rating: 5,
    quote:
      "On time, professional, and the results speak for themselves. My Lexus has never looked this good. Not even when I drove it off the lot.",
  },
  {
    name: "Robert K.",
    vehicle: "2020 Porsche 911",
    rating: 5,
    quote:
      "I'm picky about who touches my car. After seeing LuxeRide's work, I won't go anywhere else. Seriously impressed with the attention to detail.",
  },
] as const;

export interface PricingPlan {
  name: string;
  price: string;
  priceNote?: string;
  popular?: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic Detail",
    price: "$150",
    features: [
      "Complete Interior Wipe Down",
      "Triple-Stage Vacuuming",
      "Mat Cleaning & Refresh",
    ],
  },
  {
    name: "Premium Detail",
    price: "$200",
    popular: true,
    features: [
      "Triple-Stage Vacuuming",
      "Seat & Carpet Stain Removal",
      "Interior Cabin Freshener",
      "Full Dust Removal",
      "Window Cleaning & Treatment",
      "Deep Steam Cleaning",
      "Fabric & Carpet Extraction",
      "Complete Interior Shampoo",
      "Leather Conditioning & Care",
      "UV-Protectant Plastic Coating",
    ],
  },
  {
    name: "Exterior Wash",
    price: "+$50",
    priceNote: "Add to any detail",
    features: [
      "Hand Wash Exterior",
      "Rim Detailing",
      "Tire Deep Clean",
      "Tire Shine Application",
      "Door Jamb & Panel Cleaning",
      "Spot-Free Hand Dry",
    ],
  },
];

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
