import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Mobile Car Detailing Near Me Overland Park",
  description:
    "Learn about LuxeRide Mobile Car Detailing in Overland Park, KS. Passionate about cars, committed to convenience, and dedicated to premium results. Meet our team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${BUSINESS.name}`,
    description:
      "Passionate about cars, committed to convenience, dedicated to premium results. Serving Overland Park & the KC metro.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              About LuxeRide Mobile Car Detailing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              LuxeRide was founded on a simple belief: getting a premium car detail
              shouldn&apos;t require rearranging your entire day. We bring
              professional-grade detailing directly to your home or office in Overland
              Park and the greater Kansas City metro area — so you can get back to what
              matters while we make your vehicle look its absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="border-t border-white/5 bg-[#1A1A1A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#FAFAFA] sm:text-3xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-[#FAFAFA]/70">
                <p>
                  What started as a passion for automotive care in a single garage has
                  grown into Overland Park&apos;s trusted mobile detailing service. We
                  spent years perfecting our craft — learning the science behind paint
                  correction, testing dozens of ceramic coating formulations, and
                  developing interior cleaning processes that restore even the most
                  neglected cabins.
                </p>
                <p>
                  Along the way, we realized something: the biggest barrier to great
                  detailing isn&apos;t price — it&apos;s inconvenience. Nobody wants to
                  drop off their car, arrange a ride, and wait hours for a phone call.
                  That&apos;s why we went fully mobile. Our self-contained detailing
                  units carry their own water, power, and professional-grade products so
                  we can deliver concours-level results anywhere.
                </p>
                <p>
                  Today, LuxeRide serves hundreds of vehicle owners across Johnson County
                  and the Kansas City metro. From daily drivers to weekend show cars,
                  every vehicle we touch receives the same meticulous attention to
                  detail.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div
              className="flex aspect-[4/3] items-center justify-center rounded-xl border border-white/10 bg-[#0A0A0A] lg:aspect-auto"
              role="img"
              aria-label="LuxeRide mobile detailing unit serving a vehicle in Overland Park"
            >
              <div className="text-center">
                <svg
                  className="mx-auto h-16 w-16 text-[#FAFAFA]/15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={0.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z"
                  />
                </svg>
                <p className="mt-2 text-sm text-[#FAFAFA]/30">Photo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#FAFAFA] sm:text-3xl">
            Why Choose LuxeRide
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "100% Mobile",
                desc: "We come to your home, office, or any location across the Overland Park and Kansas City metro area. No drop-off, no waiting.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.735a2.056 2.056 0 00-1.58.86A17.898 17.898 0 004.473 17.5" />
                  </svg>
                ),
              },
              {
                title: "Premium Products",
                desc: "Every product we use is carefully selected for performance and paint safety — from pH-neutral shampoos to SiO2 ceramic coatings.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                title: "Experienced & Insured",
                desc: "Our technicians are trained, experienced, and fully insured. Your vehicle is in safe, capable hands every single time.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Satisfaction Guaranteed",
                desc: "We stand behind every detail. If you're not completely satisfied with the results, we'll come back and make it right.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-[#1A1A1A] p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#C9A84C]/10 text-[#C9A84C]">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#FAFAFA]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-t border-white/5 bg-[#1A1A1A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#FAFAFA] sm:text-3xl">
            Our Service Area
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#FAFAFA]/60">
            We proudly serve vehicle owners across the greater Kansas City metro area,
            including:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((city) => (
              <span
                key={city}
                className="rounded-full border border-white/10 bg-[#0A0A0A] px-4 py-2 text-sm font-medium text-[#FAFAFA]/70"
              >
                {city}
              </span>
            ))}
            <span className="rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 px-4 py-2 text-sm font-medium text-[#C9A84C]">
              & the greater KC metro
            </span>
          </div>
          <p className="mt-6 text-center text-sm text-[#FAFAFA]/50">
            Not sure if we serve your area?{" "}
            <Link href="/contact" className="text-[#C9A84C] hover:underline">
              Contact us
            </Link>{" "}
            — we&apos;re happy to accommodate.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to Experience the LuxeRide Difference?"
        description="Book your mobile detailing appointment today. Premium results, delivered to your door — no hassle, no compromise."
      />
    </>
  );
}
