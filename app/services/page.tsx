import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Auto Detailing Services Overland Park KS",
  description:
    "Explore our full range of professional mobile auto detailing services in Overland Park, KS — from exterior wash to ceramic coating. Book your detail today!",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Auto Detailing Services | ${BUSINESS.name}`,
    description:
      "Professional mobile auto detailing services in Overland Park, KS. Exterior, interior, full detail, ceramic coating, paint correction & more.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Professional Mobile Detailing Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              LuxeRide offers a complete menu of auto detailing services in Overland Park
              and the greater Kansas City metro area. Whether your vehicle needs a quick
              exterior refresh or a full ceramic coating for long-term protection, our
              experienced technicians deliver showroom-quality results — right at your
              doorstep. Every service uses premium, professional-grade products selected
              for safety and performance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Service You Need?"
        description="Contact us for a free, no-obligation consultation. We'll recommend the perfect detailing package for your vehicle's needs and budget."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
