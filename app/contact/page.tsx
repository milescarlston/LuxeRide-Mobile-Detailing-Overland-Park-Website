import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "./ContactForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Mobile Car Detailing Overland Park",
  description:
    "Book your mobile car detailing in Overland Park, KS. Contact LuxeRide for a free quote. We come to your home or office. Call or book online today!",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & Book Now | ${BUSINESS.name}`,
    description:
      "Book your mobile car detailing in Overland Park, KS. Contact LuxeRide for a free quote.",
    url: "/contact",
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
              Ready to get your car looking great? Fill out the form below, give us a
              call, or shoot us an email. We&apos;ll get back to you within a few hours
              to confirm your appointment.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <aside>
              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                    Call Us
                  </h2>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-2 block text-xl font-semibold text-[#1C1C1C] transition-colors hover:text-[#1E5FAE]"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                {/* Email */}
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

                {/* Hours */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                    Hours
                  </h2>
                  <p className="mt-2 text-sm text-[#4A4A4A]">
                    Monday - Saturday: 7:00 AM - 7:00 PM
                  </p>
                  <p className="text-sm text-[#4A4A4A]">Sunday: By appointment</p>
                </div>

                {/* Service Area */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
                    Service Area
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                    Overland Park, Leawood, Olathe, Lenexa, Prairie Village, Shawnee,
                    Mission, Merriam, and the greater Kansas City metro area.
                  </p>
                </div>

                {/* Map placeholder */}
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  {/* TODO: Replace with Google Maps embed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="250" /> */}
                  <div className="flex h-[250px] items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-10 w-10 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="mt-2 text-xs text-gray-400">Google Maps embed</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
