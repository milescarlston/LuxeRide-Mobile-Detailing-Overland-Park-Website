import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

const service = SERVICES.find((s) => s.slug === "exterior-detail")!;

export const metadata: Metadata = {
  title: "Exterior Car Detailing Overland Park",
  description:
    "Professional exterior car detailing in Overland Park, KS. Hand wash, clay bar, polish & sealant by LuxeRide Mobile Detailing. Book your appointment today!",
  alternates: { canonical: "/services/exterior-detail" },
  openGraph: {
    title: `Exterior Car Detailing Overland Park | ${BUSINESS.name}`,
    description:
      "Premium mobile exterior car detailing in Overland Park. Hand wash, clay bar decontamination, one-step polish, and paint sealant — we come to you.",
    url: "/services/exterior-detail",
  },
};

const faqs = [
  {
    question: "How long does an exterior detail take?",
    answer:
      "A standard exterior detail typically takes between 1.5 and 2.5 hours depending on the size and condition of your vehicle. Larger SUVs and trucks, or vehicles with heavy contamination and oxidation, may require additional time. We never rush the process because each step — from the hand wash through the final sealant application — needs proper dwell time to deliver lasting results.",
  },
  {
    question: "What is clay bar treatment and why does my car need it?",
    answer:
      "A clay bar removes bonded contaminants that a regular wash cannot — things like brake dust, industrial fallout, tree sap residue, and overspray. These particles embed themselves into your clear coat over time, making the paint feel rough even after washing. Clay bar treatment restores a glass-smooth surface, which allows polish and sealant to bond more effectively and last longer.",
  },
  {
    question: "How often should I get an exterior detail?",
    answer:
      "For most vehicles in the Overland Park area, we recommend a full exterior detail every 3 to 4 months. Kansas weather — from summer sun and humidity to winter road salt — is hard on automotive paint. Seasonal detailing keeps contaminants from building up and ensures the protective sealant is refreshed before it fully wears off. If your vehicle is garaged and driven lightly, every 4 to 6 months may be sufficient.",
  },
  {
    question: "Do you bring your own water and power supply?",
    answer:
      "Yes. Our mobile detailing setup is fully self-contained. We carry our own water tanks, filtration system, generator, and all professional-grade equipment. All we need from you is a reasonably flat spot to park — your driveway, garage, or office parking lot works perfectly. There is no mess left behind.",
  },
  {
    question:
      "What is the difference between a paint sealant and a ceramic coating?",
    answer:
      "A paint sealant is a synthetic polymer that bonds to your clear coat and provides 3 to 4 months of protection against UV rays, water spots, and minor contaminants. It is included with every exterior detail. A ceramic coating is a semi-permanent nano-ceramic layer that lasts 2 to 5 years and offers stronger chemical resistance, deeper gloss, and superior hydrophobic properties. If you want longer-lasting protection, check out our ceramic coating service.",
  },
];

export default function ExteriorDetailPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Exterior Detail", href: "/services/exterior-detail" },
        ]}
      />

      {/* Hero / Intro */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Exterior Wash &amp; Detail in Overland Park, KS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Your vehicle&apos;s exterior takes a beating every day. Road grime,
              brake dust, tree sap, bird droppings, and Kansas sun work together
              to dull your paint and degrade your clear coat. Our professional
              exterior car detailing in Overland Park goes far beyond a basic car
              wash — we restore, correct, and protect every painted surface so
              your vehicle looks and feels like the day you drove it off the lot.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                What&apos;s Included
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/60">
                Every exterior detail follows a structured, multi-step process
                designed to remove contamination, restore clarity, and lock in
                protection. Here is exactly what you get:
              </p>
              <ul className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#FAFAFA]/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing callout */}
            <div className="flex items-start lg:justify-end">
              <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#1A1A1A] p-8 text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-[#C9A84C]">
                  Starting at
                </p>
                <p className="mt-2 text-5xl font-bold text-[#FAFAFA]">$75</p>
                <p className="mt-2 text-sm text-[#FAFAFA]/50">
                  Price varies by vehicle size &amp; condition
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block w-full rounded-md bg-[#C9A84C] px-6 py-3 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
                >
                  Get a Free Quote
                </Link>
                <p className="mt-4 text-xs text-[#FAFAFA]/40">
                  No obligation. We&apos;ll confirm pricing before we start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Our Exterior Detailing Process
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                We start with a thorough pre-rinse to loosen surface dirt and
                prevent scratching during the wash. Next comes a pH-neutral foam
                bath and careful hand wash using the two-bucket method with grit
                guards — the same technique professional detailers use to
                eliminate swirl marks caused by automatic car washes.
              </p>
              <p>
                After drying with premium microfiber towels, we move to clay bar
                decontamination. This step pulls embedded contaminants out of
                your clear coat that washing alone cannot remove. The result is a
                perfectly smooth surface ready for polishing.
              </p>
              <p>
                Our one-step machine polish removes light swirl marks, water
                spots, and minor scratches to bring back depth and gloss. We
                finish with a durable synthetic paint sealant that shields your
                paint from UV damage, acid rain, and road contaminants for
                several months. Tires are dressed, wheels are cleaned and
                protected, windows are streak-free, and all exterior trim is
                conditioned.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Who Is This Service For?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                Our exterior detail is ideal for anyone who wants their vehicle
                to look its best without committing to a full interior and
                exterior package. It is a great fit if you keep your cabin clean
                but the outside needs professional attention — whether
                you&apos;re preparing for a weekend event, maintaining your
                lease, or simply tired of looking at water spots and oxidation.
              </p>
              <p>
                It is also the perfect maintenance step between ceramic coating
                applications or after a paint correction to keep your finish
                protected. Overland Park residents who park outdoors or commute
                daily on I-435 and US-69 will notice the biggest difference,
                because highway grime and road salt build up fast in the Kansas
                City metro.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Mobile Convenience, Professional Results
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                LuxeRide is a fully mobile operation. We bring everything we need
                — water, power, and professional-grade tools — directly to your
                home or office anywhere in Overland Park, Leawood, Olathe,
                Lenexa, and the surrounding Johnson County area. You do not need
                to drop off your car or wait at a shop. Just book your
                appointment, and we handle the rest while you go about your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-4 max-w-2xl text-[#FAFAFA]/60">
            Looking for something more? Pair your exterior detail with one of
            these services for a complete transformation.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                SERVICES.find((s) => s.slug === "full-detail")!,
                SERVICES.find((s) => s.slug === "ceramic-coating")!,
                SERVICES.find((s) => s.slug === "paint-correction")!,
              ] as const
            ).map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-[#C9A84C]/40"
              >
                <h3 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[#C9A84C]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/50">
                  {related.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#C9A84C]">
                  Starting at ${related.startingPrice}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-[#FAFAFA]/60">
            Have questions about our exterior detailing service? Here are the
            ones we hear most often.
          </p>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for a Flawless Exterior?"
        description="Book your mobile exterior detail today. We come to your home or office in Overland Park and deliver showroom-quality results — no drop-off required."
        buttonText="Book Your Exterior Detail"
      />
    </>
  );
}
