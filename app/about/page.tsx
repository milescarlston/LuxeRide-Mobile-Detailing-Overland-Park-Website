import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import {
  BUSINESS,
  SERVICE_AREAS,
  OG_IMAGES,
  OG_IMAGE_URL,
} from "@/lib/constants";

const TITLE = "About LuxeRide | Mobile Car Detailing in Overland Park, KS";
const DESCRIPTION =
  "LuxeRide brings professional car detailing to your door in Overland Park. Learn about our team, our process, and why local customers trust us with their vehicles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
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

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      {/* Intro */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
              About LuxeRide Mobile Car Detailing
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
              We started LuxeRide because we thought getting your car detailed
              shouldn&apos;t be a hassle. No dropping your car off, no arranging a ride,
              no waiting around. We come to your home or office in Overland Park and
              handle everything while you go about your day.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#1C1C1C]">Our Story</h2>
              <div className="mt-4 space-y-4 text-[#4A4A4A]">
                <p>
                  It started simple: a love for cars and a pressure washer. We spent
                  years learning the craft, testing products, and figuring out the best
                  way to get great results on every type of vehicle.
                </p>
                <p>
                  Along the way, we realized the biggest problem with car detailing
                  isn&apos;t the price or the quality. It&apos;s the inconvenience.
                  Nobody wants to spend their Saturday sitting in a waiting room. So we
                  went fully mobile. Our setup carries its own water, power, and all the
                  professional-grade products we need to do the job right, anywhere.
                </p>
                <p>
                  Today we serve hundreds of vehicle owners across Johnson County and the
                  Kansas City metro. From daily drivers to weekend rides, every car gets
                  the same attention to detail.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/hero.jpg"
                alt="LuxeRide mobile detailing setup working on a Ram truck in a customer driveway in Overland Park"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#1C1C1C]">
            Why People Choose LuxeRide
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "100% Mobile",
                desc: "We come to your home, office, or wherever your car is. No drop-off needed.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.735a2.056 2.056 0 00-1.58.86A17.898 17.898 0 004.473 17.5" />
                  </svg>
                ),
              },
              {
                title: "Professional Products",
                desc: "pH-neutral shampoos, ceramic coatings, paint-safe clay bars. The good stuff.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
              },
              {
                title: "Experienced & Insured",
                desc: "Trained technicians, fully insured. Your vehicle is in good hands.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Satisfaction Guaranteed",
                desc: "Not thrilled? We'll come back and make it right. Simple as that.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E5FAE]/10 text-[#1E5FAE]">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1C1C1C]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#4A4A4A]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-[#1C1C1C]">
            Our Service Area
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-[#4A4A4A]">
            We serve vehicle owners across the greater Kansas City metro area, including:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((city) => (
              <span
                key={city}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#1C1C1C]"
              >
                {city}
              </span>
            ))}
            <span className="rounded-full border border-[#1E5FAE]/30 bg-[#1E5FAE]/5 px-4 py-2 text-sm font-medium text-[#1E5FAE]">
              & the greater KC metro
            </span>
          </div>
          <p className="mt-6 text-center text-sm text-[#4A4A4A]">
            Not sure if we cover your area?{" "}
            <Link href="/contact" className="text-[#1E5FAE] hover:underline">
              Reach out
            </Link>{" "}
            and we&apos;ll let you know.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to Try Us Out?"
        description="Book a mobile detailing appointment and see why hundreds of Overland Park residents trust LuxeRide with their vehicles."
      />
    </>
  );
}
