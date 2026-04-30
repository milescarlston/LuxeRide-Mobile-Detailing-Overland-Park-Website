import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import AddOnsList from "@/components/AddOnsList";
import CTASection from "@/components/CTASection";
import {
  BUSINESS,
  SERVICES,
  ALL_ADDONS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";

const TITLE = "Auto Detailing Services | LuxeRide Mobile Car Detailing Overland Park";
const DESCRIPTION =
  "Explore our mobile detailing services in Overland Park — exterior wash, interior detail, full detail packages, ceramic coating, and headlight restoration. Starting at $125.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
              Our Mobile Detailing Services
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
              We offer a full range of auto detailing services in Overland Park and the
              greater Kansas City area. Everything from a basic exterior wash to long-term
              ceramic coating protection. We bring all the equipment and products to you,
              so you don't have to go anywhere.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Popular Add-Ons
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#4A4A4A]">
            Add any of these to your detail for even better results.
          </p>
          <div className="mt-8">
            <AddOnsList addOns={ALL_ADDONS} />
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Service You Need?"
        description="Give us a call or book online and we'll help you figure out the best option for your car and your budget."
      />
    </>
  );
}
