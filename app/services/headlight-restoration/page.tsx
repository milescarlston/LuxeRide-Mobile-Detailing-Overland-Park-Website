import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Headlight Restoration Overland Park",
  description:
    "Professional headlight restoration in Overland Park, KS. We remove oxidation and haze with wet-sanding, polishing, and UV clear coat. Book your appointment today!",
  alternates: { canonical: "/services/headlight-restoration" },
  openGraph: {
    title: `Headlight Restoration Overland Park | ${BUSINESS.name}`,
    description:
      "Restore cloudy, yellowed headlights to crystal-clear condition with LuxeRide's professional headlight restoration service in Overland Park, KS.",
    url: "/services/headlight-restoration",
  },
};

const service = SERVICES.find((s) => s.slug === "headlight-restoration")!;

const faqs = [
  {
    question: "Why do headlights turn yellow or cloudy over time?",
    answer:
      "Modern headlight lenses are made from polycarbonate plastic. Over time, exposure to UV radiation from the sun breaks down the factory clear coat, causing the plastic to oxidize. This oxidation creates a yellow, hazy, or cloudy appearance. Road debris, chemicals, and environmental pollutants also accelerate the deterioration.",
  },
  {
    question: "How long does a professional headlight restoration last?",
    answer:
      "With our multi-stage wet-sanding, polishing, and UV-resistant clear coat application, results typically last two to three years. The UV clear coat is the key to long-term durability — it acts as a fresh protective barrier that shields the polycarbonate from further sun damage.",
  },
  {
    question:
      "Is headlight restoration cheaper than replacing the headlight assembly?",
    answer:
      "Absolutely. A new OEM headlight assembly can cost anywhere from $200 to over $1,000 per side, depending on your vehicle. Our professional headlight restoration starts at just $59 for both headlights, delivering results that look like new at a fraction of the replacement cost.",
  },
  {
    question: "Does headlight restoration improve safety?",
    answer:
      "Yes. Oxidized headlights can reduce light output by up to 80 percent, severely compromising your ability to see the road at night. Restoring clarity allows your headlight bulbs to project their full beam pattern, improving nighttime visibility and making your vehicle more visible to other drivers.",
  },
  {
    question: "Can you restore headlights that are severely yellowed or hazed?",
    answer:
      "In most cases, yes. Our multi-stage wet-sanding process uses progressively finer grits to remove even heavy oxidation and surface damage. As long as the haze is on the outer surface of the lens and the plastic is not cracked or damaged internally, we can restore them to near-original clarity.",
  },
];

export default function HeadlightRestorationPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
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
          {
            name: "Headlight Restoration",
            href: "/services/headlight-restoration",
          },
        ]}
      />

      {/* Hero / Intro */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Headlight Restoration in Overland Park, KS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Cloudy, yellowed headlights do more than hurt your vehicle&rsquo;s
              appearance &mdash; they compromise your safety every time you drive
              after dark. LuxeRide&rsquo;s professional headlight restoration
              service in Overland Park brings your lenses back to crystal-clear
              condition so you can see the road and be seen by other drivers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Headlights Oxidize */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                Why Do Headlights Turn Yellow and Cloudy?
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Nearly every vehicle manufactured today uses polycarbonate
                plastic for its headlight lenses. While polycarbonate is
                lightweight and impact-resistant, it is highly susceptible to UV
                degradation. The factory applies a thin clear coat to protect the
                plastic, but years of sun exposure, road salt, and chemical
                contact gradually break that barrier down.
              </p>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Once the clear coat fails, the bare polycarbonate begins to
                oxidize. The result is the familiar yellow, hazy film that dims
                your headlights and makes your vehicle look older than it is.
                Kansas summers are particularly harsh &mdash; the combination of
                intense UV exposure and temperature swings accelerates oxidation
                faster than in milder climates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                Our Wet-Sanding &amp; Polishing Process
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                DIY headlight kits offer a temporary fix, but they rarely
                include the multi-stage sanding and professional-grade UV
                protection that deliver lasting results. Our technicians follow a
                proven, multi-step process:
              </p>
              <ol className="mt-4 space-y-3 text-[#FAFAFA]/70">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10 text-xs font-bold text-[#C9A84C]">
                    1
                  </span>
                  <span>
                    <strong className="text-[#FAFAFA]">
                      Surface preparation
                    </strong>{" "}
                    &mdash; the surrounding paint and trim are carefully masked
                    to prevent damage during sanding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10 text-xs font-bold text-[#C9A84C]">
                    2
                  </span>
                  <span>
                    <strong className="text-[#FAFAFA]">
                      Multi-stage wet sanding
                    </strong>{" "}
                    &mdash; progressively finer grits (800 through 3000)
                    remove the oxidized layer without compromising the lens
                    structure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10 text-xs font-bold text-[#C9A84C]">
                    3
                  </span>
                  <span>
                    <strong className="text-[#FAFAFA]">
                      Machine polishing
                    </strong>{" "}
                    &mdash; a finishing compound restores optical clarity and
                    eliminates micro-scratches left by sanding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/10 text-xs font-bold text-[#C9A84C]">
                    4
                  </span>
                  <span>
                    <strong className="text-[#FAFAFA]">
                      UV-resistant clear coat
                    </strong>{" "}
                    &mdash; a professional-grade UV sealant is applied to
                    protect the freshly polished surface for years to come.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Safety + Cost Benefits */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                Safety Benefits of Clear Headlights
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Oxidized headlights drastically reduce the amount of light that
                reaches the road. Studies show that severely hazed lenses can cut
                light output by up to 80 percent, turning a well-lit highway
                into a dimly lit obstacle course. Restoring your headlights
                improves your forward visibility and ensures oncoming drivers can
                see your vehicle sooner &mdash; a critical factor in preventing
                accidents on Overland Park roads and I-435 corridors.
              </p>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Clear headlights can also help your vehicle pass state safety
                inspections and avoid citations for inadequate lighting
                equipment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                Restoration vs. Replacement: Save Hundreds
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Replacing a single headlight assembly at a dealership typically
                costs $250 to $1,000 or more, depending on whether your vehicle
                uses LED or adaptive lighting. For both sides, you could be
                looking at well over $1,500.
              </p>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Professional headlight restoration achieves comparable visual
                clarity for a fraction of the price. Our service starts at just{" "}
                <strong className="text-[#C9A84C]">$59</strong> and includes
                both headlights &mdash; making it one of the smartest
                maintenance investments you can make. Pair it with an{" "}
                <Link
                  href="/services/exterior-detail"
                  className="text-[#C9A84C] underline underline-offset-4 transition-colors hover:text-[#b8973f]"
                >
                  exterior detail
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/full-detail"
                  className="text-[#C9A84C] underline underline-offset-4 transition-colors hover:text-[#b8973f]"
                >
                  full detail package
                </Link>{" "}
                for a complete vehicle transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Pricing */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                What&rsquo;s Included
              </h2>
              <ul className="mt-6 space-y-3">
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
                    <span className="text-[#FAFAFA]/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Callout */}
            <div className="flex items-start">
              <div className="w-full rounded-xl border border-white/10 bg-[#1A1A1A] p-8 text-center">
                <p className="text-sm font-medium uppercase tracking-widest text-[#C9A84C]">
                  Both Headlights
                </p>
                <p className="mt-3 text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
                  Starting at $59
                </p>
                <p className="mt-3 text-[#FAFAFA]/50">
                  Price may vary by vehicle size and severity of oxidation.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-md bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
                >
                  Book Your Restoration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Headlight Restoration FAQs
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="See the Road Clearly Again"
        description="Book your headlight restoration today and experience the difference crystal-clear lenses make for safety and appearance."
        buttonText="Schedule Headlight Restoration"
      />
    </>
  );
}
