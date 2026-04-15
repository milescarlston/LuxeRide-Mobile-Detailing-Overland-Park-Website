import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Car Detailing Results Overland Park — Before & After Gallery",
  description:
    "See real before & after car detailing results from LuxeRide in Overland Park, KS. Ceramic coating, paint correction, interior & exterior detail transformations.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Detailing Gallery | ${BUSINESS.name}`,
    description:
      "Before & after car detailing transformations. See real results from our Overland Park mobile detailing service.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />

      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Our Work — Before &amp; After
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Nothing tells the story of a great detail like the transformation itself.
              Browse our gallery of real results from vehicles across Overland Park and
              the Kansas City metro area. Every project showcased here was completed
              on-site by our mobile detailing team.
            </p>
          </div>

          <div className="mt-12">
            <BeforeAfterGallery />
          </div>

          <p className="mt-12 text-center text-sm text-[#FAFAFA]/50">
            Real photos from real customers coming soon. These placeholders represent
            the types of transformations we deliver daily.
          </p>
        </div>
      </section>

      <CTASection
        headline="Want Results Like These?"
        description="Book your mobile detailing appointment and see the transformation for yourself. We come to you anywhere in the Overland Park area."
        buttonText="Book Your Detail"
      />
    </>
  );
}
