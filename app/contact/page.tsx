import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "./ContactForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Mobile Car Detailing Overland Park",
  description:
    "Book your mobile car detailing appointment in Overland Park, KS. Contact LuxeRide for a free quote — premium detailing delivered to your door. Call or book online!",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & Book Now | ${BUSINESS.name}`,
    description:
      "Book your mobile car detailing appointment in Overland Park, KS. Contact LuxeRide for a free quote.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Book Your Detail
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Ready to give your vehicle the treatment it deserves? Fill out the form
              below, give us a call, or send an email. We&apos;ll get back to you within
              a few hours to confirm your appointment.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <aside>
              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C]">
                    Call Us
                  </h2>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-2 block text-xl font-semibold text-[#FAFAFA] transition-colors hover:text-[#C9A84C]"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C]">
                    Email
                  </h2>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="mt-2 block text-lg text-[#FAFAFA]/80 transition-colors hover:text-[#C9A84C]"
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C]">
                    Hours
                  </h2>
                  <p className="mt-2 text-sm text-[#FAFAFA]/70">
                    Monday – Saturday: 7:00 AM – 7:00 PM
                  </p>
                  <p className="text-sm text-[#FAFAFA]/70">Sunday: By appointment</p>
                </div>

                {/* Service Area */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C]">
                    Service Area
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/70">
                    Overland Park, Leawood, Olathe, Lenexa, Prairie Village, Shawnee,
                    Mission, Merriam, and the greater Kansas City metro area.
                  </p>
                </div>

                {/* Map placeholder */}
                <div className="overflow-hidden rounded-xl border border-white/10">
                  {/* TODO: Replace with Google Maps embed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="250" /> */}
                  <div className="flex h-[250px] items-center justify-center bg-[#1A1A1A]">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-10 w-10 text-[#FAFAFA]/20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <p className="mt-2 text-xs text-[#FAFAFA]/30">
                        Google Maps embed
                      </p>
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
