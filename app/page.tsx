import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTASection from "@/components/CTASection";
import {
  BUSINESS,
  SERVICES,
  TESTIMONIALS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const TITLE = "Mobile Car Detailing Overland Park, KS | LuxeRide Mobile Detailing";
const DESCRIPTION =
  "Professional mobile car detailing in Overland Park, KS. Interior, exterior, ceramic coating & more — we come to your home or office. Book your free quote today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
                Mobile Car Detailing in Overland Park
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
                We come to your home or office. Professional results, zero hassle.
                Your car gets the full treatment while you go about your day.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669]"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-7 py-3.5 text-base font-semibold text-[#1C1C1C] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/hero.jpg"
                alt="LuxeRide mobile detailing setup working on a lifted Ram truck in a customer driveway in Overland Park"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value propositions */}
      <section className="border-y border-gray-200 bg-[#F7F7F5]">
        <div className="mx-auto grid max-w-7xl divide-y divide-gray-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              title: "We Come to You",
              desc: "No drop-offs, no waiting rooms. We show up at your home or office with everything we need.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
            },
            {
              title: "Professional Products",
              desc: "We use professional-grade, paint-safe products. No cheap stuff from the gas station.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              ),
            },
            {
              title: "Satisfaction Guaranteed",
              desc: "Not happy with the results? We'll come back and make it right. No questions asked.",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="px-6 py-8 text-center sm:px-8 lg:px-10">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E5FAE]/10 text-[#1E5FAE]">
                {item.icon}
              </div>
              <h2 className="text-base font-semibold text-[#1C1C1C]">{item.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A4A4A]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              Our Detailing Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4A4A4A]">
              Whether you need a quick wash or full ceramic coating protection, we have you covered.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-[#1E5FAE] transition-colors hover:text-[#164a8a]"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Recent work showcase */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              Recent Work
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4A4A4A]">
              Real results from vehicles we have detailed in the Overland Park area.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/jeep-wrangler-exterior.png" alt="Jeep Wrangler Rubicon after full exterior detail in Overland Park" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/ram-3500-interior.png" alt="Ram 3500 tan leather interior after professional detailing" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-front.png" alt="Range Rover Sport front view after exterior detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-interior-dash.png" alt="Range Rover Sport dashboard after interior detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="text-sm font-medium text-[#1E5FAE] transition-colors hover:text-[#164a8a]"
            >
              View Full Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Testimonials */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#4A4A4A]">
              Real reviews from real people in the Overland Park area.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
