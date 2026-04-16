import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CTASection from "@/components/CTASection";
import { BUSINESS, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";

const TITLE = "Detailing Results & Gallery | LuxeRide Mobile Detailing Overland Park";
const DESCRIPTION =
  "See real before-and-after results from LuxeRide Mobile Detailing in Overland Park. Exterior details, interior cleanings, ceramic coatings, and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/gallery",
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

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
              Our Work - Before &amp; After
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
              Nothing shows what we do better than the results. Here are real
              transformations from vehicles across Overland Park and the KC metro area.
              Every one of these was done on-site by our mobile detailing team.
            </p>
          </div>

          <div className="mt-10">
            <BeforeAfterGallery />
          </div>

          <p className="mt-10 text-center text-sm text-[#4A4A4A]">
            All photos are from real customer vehicles detailed by LuxeRide in the Overland Park area.
          </p>
        </div>
      </section>

      <CTASection
        headline="Want Results Like These?"
        description="Book a mobile detailing appointment and see the difference for yourself. We come to you anywhere in the Overland Park area."
      />
    </>
  );
}
