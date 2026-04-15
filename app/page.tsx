import Link from "next/link";
import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES, TESTIMONIALS } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Mobile Car Detailing Overland Park | ${BUSINESS.name}`,
  description:
    "Professional mobile car detailing in Overland Park, KS. Premium exterior & interior detailing, ceramic coating, and paint correction — we come to you. Book today!",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Mobile Car Detailing Overland Park | ${BUSINESS.name}`,
    description:
      "Professional mobile car detailing in Overland Park, KS. Premium detailing, ceramic coating & paint correction delivered to your door.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A0A0A]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.08),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
              Mobile Car Detailing &bull; Overland Park, KS
            </p>
            <h1 className="font-[family-name:var(--font-playfair-display)] text-4xl font-bold leading-tight tracking-tight text-[#FAFAFA] sm:text-5xl lg:text-6xl">
              Premium Mobile Detailing —{" "}
              <span className="text-[#C9A84C]">We Come to You</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FAFAFA]/70">
              Experience showroom-quality car detailing without leaving your driveway.
              LuxeRide brings professional-grade products, meticulous attention to
              detail, and white-glove service to homes and offices across Overland Park
              and the Kansas City metro.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
              >
                Book Your Detail
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-3.5 text-base font-semibold text-[#FAFAFA] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value propositions */}
      <section className="border-y border-white/5 bg-[#1A1A1A]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              title: "We Come to You",
              desc: "No drop-off, no waiting rooms. We detail your vehicle at your home, office, or anywhere in the Overland Park area.",
              icon: (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
            },
            {
              title: "Premium Products",
              desc: "We use only professional-grade, paint-safe products that protect your finish and deliver results you can see and feel.",
              icon: (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              ),
            },
            {
              title: "Satisfaction Guaranteed",
              desc: "Your complete satisfaction is our priority. If you're not thrilled with the results, we'll make it right — no questions asked.",
              icon: (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="px-6 py-10 text-center sm:px-8 lg:px-12">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
                {item.icon}
              </div>
              <h2 className="text-lg font-semibold text-[#FAFAFA]">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
              Our Detailing Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAFAFA]/60">
              From a quick exterior refresh to full ceramic coating protection, we offer a
              complete range of professional mobile detailing services.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#b8973f]"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Testimonials */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAFAFA]/60">
              Don&apos;t just take our word for it — hear from vehicle owners across the
              Overland Park area.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <ServiceAreaMap />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
