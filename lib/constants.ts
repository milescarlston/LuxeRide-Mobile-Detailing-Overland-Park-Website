export const BUSINESS = {
  name: "LuxeRide Mobile Car Detailing",
  shortName: "LuxeRide",
  tagline: "We Come to You. Professional Results, Zero Hassle.",
  phone: "(913) 945-2870",
  phoneHref: "tel:+19139452870",
  email: "hello@luxeridedetailing.site",
  url: "https://luxeridedetailing.site",
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
    facebook: "https://www.facebook.com/luxeridedetailing",
    instagram: "https://www.instagram.com/luxeridedetailing",
    google: "https://g.page/luxeridedetailing",
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

export interface VehicleTier {
  label: string;
  description: string;
  price: number;
}

export interface CoatingTier {
  label: string;
  price: number;
}

export interface AddOn {
  name: string;
  price: number;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  startingPrice: number;
  targetKeyword: string;
  icon: string;
  features: string[];
  estimatedTime: string;
  vehicleTiers?: VehicleTier[];
  coatingTiers?: CoatingTier[];
  standalonePricing?: { standalone: number; addon: number };
  addOns?: AddOn[];
  savings?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "exterior-detail",
    title: "Exterior Wash & Detail",
    shortTitle: "Exterior Detail",
    description:
      "We'll get your car looking brand new with a thorough hand wash, clay bar treatment, polish, and protective sealant. The works, right in your driveway.",
    startingPrice: 100,
    targetKeyword: "exterior car detailing Overland Park",
    icon: "sparkles",
    features: [
      "Hand wash (two-bucket method)",
      "Clay bar decontamination",
      "Wax or sealant application",
      "Tire dressing",
      "Wheel cleaning",
      "Door jamb cleaning",
      "Exterior windows",
    ],
    estimatedTime: "1.5-2.5 hours",
    vehicleTiers: [
      { label: "Sedan / Car", description: "Coupes, sedans, small hatchbacks", price: 100 },
      { label: "SUV / Crossover", description: "Mid-size SUVs, crossovers", price: 130 },
      { label: "Truck / Van", description: "Full-size trucks, minivans, large SUVs", price: 150 },
    ],
    addOns: [
      { name: "Engine bay cleaning", price: 65 },
      { name: "Trim restoration (faded black plastic)", price: 35 },
      { name: "Sealant upgrade (6-month synthetic)", price: 25 },
    ],
  },
  {
    slug: "interior-detail",
    title: "Interior Detail",
    shortTitle: "Interior Detail",
    description:
      "Deep cleaning for every surface inside your car. We vacuum, steam clean, condition the leather, and get rid of any odors. Your car will smell and feel like new.",
    startingPrice: 150,
    targetKeyword: "interior car detailing Overland Park",
    icon: "car-seat",
    features: [
      "Full vacuum (seats, carpet, crevices)",
      "Shampoo carpets & floor mats",
      "Clean & condition leather/vinyl seats",
      "Dashboard, console & vent cleaning",
      "Door panel wipe-down",
      "Interior windows",
      "UV protectant on plastics",
    ],
    estimatedTime: "2-3 hours",
    vehicleTiers: [
      { label: "Sedan / Car", description: "Coupes, sedans, small hatchbacks", price: 150 },
      { label: "SUV / Crossover", description: "Mid-size SUVs, crossovers", price: 185 },
      { label: "Truck / Van", description: "Full-size trucks, minivans, large SUVs", price: 210 },
    ],
    addOns: [
      { name: "Pet hair removal", price: 40 },
      { name: "Odor elimination (ozone treatment)", price: 50 },
      { name: "Stain treatment (per area)", price: 30 },
    ],
  },
  {
    slug: "full-detail",
    title: "Full Detail Package",
    shortTitle: "Full Detail",
    description:
      "The whole thing, inside and out. Our most popular package combines the full exterior and interior detail for a complete bumper-to-bumper transformation.",
    startingPrice: 225,
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
    estimatedTime: "3-5 hours",
    vehicleTiers: [
      { label: "Sedan / Car", description: "Coupes, sedans, small hatchbacks", price: 225 },
      { label: "SUV / Crossover", description: "Mid-size SUVs, crossovers", price: 285 },
      { label: "Truck / Van", description: "Full-size trucks, minivans, large SUVs", price: 325 },
    ],
    savings: "Save $25-$35 vs. booking interior and exterior separately",
    addOns: [
      { name: "Engine bay cleaning", price: 65 },
      { name: "Pet hair removal", price: 40 },
      { name: "Odor elimination (ozone treatment)", price: 50 },
      { name: "Sealant upgrade (6-month synthetic)", price: 25 },
      { name: "Stain treatment (per area)", price: 30 },
      { name: "Trim restoration (faded black plastic)", price: 35 },
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    shortTitle: "Ceramic Coating",
    description:
      "A protective ceramic layer that lasts for years. It keeps your paint looking fresh, makes washing way easier, and protects against UV damage, bird droppings, and road grime.",
    startingPrice: 399,
    targetKeyword: "ceramic coating Overland Park",
    icon: "droplet",
    features: [
      "Full exterior detail",
      "Paint decontamination",
      "1-step polish prep",
      "Professional ceramic coating application",
      "Hydrophobic finish",
      "UV protection",
      "Aftercare kit included",
    ],
    estimatedTime: "Varies, by appointment only",
    coatingTiers: [
      { label: "1-Year Coating", price: 399 },
      { label: "3-Year Coating", price: 699 },
      { label: "5-Year Coating", price: 999 },
    ],
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    shortTitle: "Headlight Restoration",
    description:
      "Cloudy, yellowed headlights are a safety hazard and make your car look old. We sand, polish, and seal them so they're crystal clear again.",
    startingPrice: 75,
    targetKeyword: "headlight restoration Overland Park",
    icon: "lightbulb",
    features: [
      "Wet sanding (multiple grits)",
      "Multi-stage polish",
      "UV sealant application",
      "Improved nighttime visibility",
      "Both headlights included",
    ],
    estimatedTime: "45 minutes - 1 hour",
    standalonePricing: { standalone: 75, addon: 55 },
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

export const CONTACT_SERVICE_OPTIONS = [
  { value: "exterior-detail", label: "Exterior Wash & Detail (starting at $100)" },
  { value: "interior-detail", label: "Interior Detail (starting at $150)" },
  { value: "full-detail", label: "Full Detail Package (starting at $225)" },
  { value: "ceramic-coating", label: "Ceramic Coating (starting at $399)" },
  { value: "headlight-restoration", label: "Headlight Restoration (starting at $75)" },
  { value: "not-sure", label: "Not sure - I need a recommendation" },
] as const;

export const ALL_ADDONS: AddOn[] = [
  { name: "Engine bay cleaning", price: 65 },
  { name: "Pet hair removal", price: 40 },
  { name: "Odor elimination (ozone treatment)", price: 50 },
  { name: "Sealant upgrade (6-month synthetic sealant)", price: 25 },
  { name: "Stain treatment (per area)", price: 30 },
  { name: "Trim restoration (faded black plastic)", price: 35 },
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
