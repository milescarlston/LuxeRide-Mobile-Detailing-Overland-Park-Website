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
      "Modern headlight lenses are made from polycarbonate plastic. Over time, UV rays from the sun break down the factory clear coat, and the plastic starts to oxidize. That is what causes the yellow, hazy, cloudy look. Road debris, chemicals, and weather speed it up too. Kansas summers are especially tough on headlights because of the intense sun and temperature swings.",
  },
  {
    question: "How long does a professional headlight restoration last?",
    answer:
      "With our wet-sanding, polishing, and UV-resistant clear coat process, you can expect results to last two to three years. The clear coat is the key. It acts as a fresh protective layer that shields the plastic from further sun damage, so the haze does not come back right away like it does with cheap DIY kits.",
  },
  {
    question:
      "Is headlight restoration cheaper than replacing the headlight assembly?",
    answer:
      "Way cheaper. A new OEM headlight assembly runs anywhere from $200 to over $1,000 per side, depending on your vehicle. Some cars with LED or adaptive headlights cost even more. Our restoration starts at just $59 for both headlights and gets them looking like new. That is a no-brainer for most people.",
  },
  {
    question: "Does headlight restoration improve safety?",
    answer:
      "Absolutely. Oxidized headlights can cut your light output by up to 80 percent. That means you are basically driving half-blind at night. Restoring the clarity lets your bulbs project their full beam pattern, so you can actually see the road and other drivers can see you. It makes a huge difference, especially on darker roads around Overland Park.",
  },
  {
    question: "Can you restore headlights that are severely yellowed or hazed?",
    answer:
      "In most cases, yes. Our multi-stage wet-sanding process uses progressively finer grits to remove even heavy oxidation and surface damage. As long as the haze is on the outer surface of the lens and the plastic is not cracked or damaged on the inside, we can bring them back to near-original clarity.",
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
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
              Headlight Restoration in{" "}
              <span className="text-[#1E5FAE]">Overland Park, KS</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A]">
              You know those yellow, foggy headlights that make your car look ten
              years older than it is? We fix that. Our headlight restoration
              service brings your lenses back to crystal-clear condition so your
              car looks great and you can actually see the road at night.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-[#10B981] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Headlights Oxidize + Our Process */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                Why Do Headlights Get Foggy?
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Almost every car made today uses polycarbonate plastic for the
                headlight lenses. It is lightweight and tough, but the sun beats
                it up over time. The factory puts a thin clear coat on the
                outside to protect it, but after a few years of Kansas heat and
                UV exposure, that clear coat wears away.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Once the clear coat is gone, the bare plastic starts to oxidize.
                That is the yellow, hazy film you see. It gets worse every year
                and it is not just cosmetic. It blocks a huge amount of light
                from getting through. The Overland Park sun and our hot summers
                make this happen faster than you might expect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                How We Fix It
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Those cheap DIY kits from the auto parts store? They work for
                about a month. We do it right with a multi-step process that
                actually lasts.
              </p>
              <ol className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E5FAE]/10 text-xs font-bold text-[#1E5FAE]">
                    1
                  </span>
                  <span className="text-[#4A4A4A]">
                    <strong className="text-[#1C1C1C]">
                      Mask and prep
                    </strong>{" "}
                    - We tape off the surrounding paint and trim so nothing gets
                    scratched during sanding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E5FAE]/10 text-xs font-bold text-[#1E5FAE]">
                    2
                  </span>
                  <span className="text-[#4A4A4A]">
                    <strong className="text-[#1C1C1C]">
                      Wet sanding
                    </strong>{" "}
                    - We go through multiple grits (800 up to 3000) to strip away
                    the oxidized layer without damaging the lens.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E5FAE]/10 text-xs font-bold text-[#1E5FAE]">
                    3
                  </span>
                  <span className="text-[#4A4A4A]">
                    <strong className="text-[#1C1C1C]">
                      Machine polish
                    </strong>{" "}
                    - A finishing compound brings back the optical clarity and
                    removes any fine scratches from sanding.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E5FAE]/10 text-xs font-bold text-[#1E5FAE]">
                    4
                  </span>
                  <span className="text-[#4A4A4A]">
                    <strong className="text-[#1C1C1C]">
                      UV clear coat
                    </strong>{" "}
                    - We seal it with a professional-grade UV coating that
                    protects the lens for years, not weeks.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Safety + Cost Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                Driving at Night Shouldn&rsquo;t Feel Sketchy
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Oxidized headlights can cut your light output by up to 80
                percent. That is a massive difference. You are basically driving
                with a dim flashlight instead of real headlights. It makes it
                harder to see the road, harder for other drivers to see you, and
                a lot more dangerous on Overland Park roads and the I-435
                corridor at night.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                After a restoration, the difference is night and day (literally).
                Your bulbs can finally project their full beam pattern again.
                Clear headlights can also help you avoid issues during safety
                inspections.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                Way Cheaper Than New Headlights
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Replacing a single headlight assembly at a dealership usually
                costs $250 to $1,000 or more. If your car has LED or adaptive
                headlights, it can be even worse. For both sides you could be
                looking at well over $1,500.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Our headlight restoration gets you the same clear result for a
                fraction of the price. We start at just{" "}
                <strong className="text-[#1E5FAE]">$59 for both
                headlights</strong>. That is one of the best deals in auto care.
                Pair it with an{" "}
                <Link
                  href="/services/exterior-detail"
                  className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174d8e]"
                >
                  exterior detail
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/full-detail"
                  className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174d8e]"
                >
                  full detail package
                </Link>{" "}
                and your car will look like it just rolled off the lot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Pricing */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                What&rsquo;s Included
              </h2>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]"
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
                    <span className="text-[#4A4A4A]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Callout */}
            <div className="flex items-start">
              <div className="w-full rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <p className="text-sm font-medium uppercase tracking-widest text-[#1E5FAE]">
                  Both Headlights
                </p>
                <p className="mt-3 text-4xl font-bold tracking-tight text-[#1C1C1C] sm:text-5xl">
                  Starting at $59
                </p>
                <p className="mt-3 text-[#4A4A4A]">
                  Price may vary by vehicle size and severity of oxidation.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-md bg-[#10B981] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669]"
                >
                  Book Your Restoration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Headlight Restoration FAQs
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to See the Road Again?"
        description="Stop squinting through foggy headlights. Book your restoration today and we will come to you."
        buttonText="Schedule Headlight Restoration"
      />
    </>
  );
}
