import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BOOKING_CTA_LABEL,
  BOOKING_URL,
  BUSINESS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";

const TITLE = "Book Mobile Car Detailing Overland Park, KS | LuxeRide";
const DESCRIPTION =
  "Book LuxeRide mobile car detailing in Overland Park, KS online. Pick a time that works for you, or call us — we come to your home or office.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
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

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
              Book Your Detail
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
              The fastest way to get on the schedule is to pick a time that
              works for you online. Prefer to talk first? Give us a call or
              shoot us an email and we&apos;ll figure out the right service
              for your car.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669]"
              >
                {BOOKING_CTA_LABEL}
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-8 py-3.5 text-base font-semibold text-[#1C1C1C] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                Phone
              </h2>
              <a
                href={BUSINESS.phoneHref}
                className="mt-2 block text-base font-semibold text-[#1C1C1C] transition-colors hover:text-[#1E5FAE]"
              >
                {BUSINESS.phone}
              </a>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                Email
              </h2>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="mt-2 block text-base text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]"
              >
                {BUSINESS.email}
              </a>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                Hours
              </h2>
              <p className="mt-2 text-sm text-[#4A4A4A]">
                Monday - Saturday: 7:00 AM - 7:00 PM
              </p>
              <p className="text-sm text-[#4A4A4A]">Sunday: By appointment</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                Service Area
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                Serving {BUSINESS.address.city}, {BUSINESS.address.state} and
                the greater Kansas City metro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
