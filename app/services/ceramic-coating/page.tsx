import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

const service = SERVICES.find((s) => s.slug === "ceramic-coating")!;

export const metadata: Metadata = {
  title: "Ceramic Coating Overland Park",
  description:
    "Professional ceramic coating in Overland Park, KS. Long-lasting SiO2 nano-ceramic protection with hydrophobic finish by LuxeRide Mobile Detailing. Book today!",
  alternates: { canonical: "/services/ceramic-coating" },
  openGraph: {
    title: `Ceramic Coating Overland Park | ${BUSINESS.name}`,
    description:
      "Premium ceramic coating in Overland Park. Nano-ceramic paint protection with UV resistance, hydrophobic finish, and 2-5 year durability — we come to you.",
    url: "/services/ceramic-coating",
  },
};

const faqs = [
  {
    question: "How long does a ceramic coating last?",
    answer:
      "A professionally applied ceramic coating typically lasts between 2 and 5 years depending on the product tier, environmental exposure, and how well the vehicle is maintained. Our entry-level coating provides roughly 2 years of protection, while our premium multi-layer application can last up to 5 years. Vehicles that are garaged and washed regularly with pH-neutral soap will see the longest lifespan from their coating.",
  },
  {
    question: "Is ceramic coating worth the investment?",
    answer:
      "Yes, for most vehicle owners a ceramic coating pays for itself over time. You will spend significantly less on waxing, sealant applications, and paint correction down the road because the coating prevents contaminants from bonding to the surface. It also preserves your vehicle's resale value by keeping the paint in excellent condition. If you plan to keep your car for more than a year or two, ceramic coating is one of the smartest investments you can make in its appearance and long-term protection.",
  },
  {
    question: "How do I maintain a ceramic-coated vehicle?",
    answer:
      "Maintenance is straightforward. Wash your vehicle every two weeks with a pH-neutral car wash soap — avoid automatic car washes with abrasive brushes. Dry with a clean microfiber towel or a filtered air blower. Once or twice a year, apply a ceramic boost spray to refresh the hydrophobic properties. Avoid using harsh chemicals, degreasers directly on the paint, or polishing compounds, as these can degrade the coating prematurely. We include an aftercare kit with every ceramic coating service to get you started.",
  },
  {
    question: "What is the difference between ceramic coating and wax?",
    answer:
      "Traditional carnauba wax sits on top of the paint and lasts 4 to 8 weeks before it breaks down from UV exposure and washing. Ceramic coating chemically bonds to your clear coat at the molecular level, creating a semi-permanent glass-like layer of protection that lasts years rather than weeks. Ceramic coatings offer far superior resistance to UV rays, chemical etching, bird droppings, and water spots compared to any wax or synthetic sealant on the market.",
  },
  {
    question: "Can ceramic coating be applied over scratches or swirl marks?",
    answer:
      "A ceramic coating does not fill or hide existing paint imperfections — it actually amplifies them by adding gloss and clarity. That is why every ceramic coating service we perform includes a single-stage paint correction to remove swirl marks, light scratches, and oxidation before the coating is applied. If your paint has deeper defects, we recommend our full multi-stage paint correction service first to ensure the best possible finish under the coating.",
  },
];

export default function CeramicCoatingPage() {
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
          { name: "Ceramic Coating", href: "/services/ceramic-coating" },
        ]}
      />

      {/* Hero / Intro */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Ceramic Coating in Overland Park, KS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Your vehicle&apos;s factory clear coat was never designed to stand
              up to years of Kansas sun, road salt, tree sap, and chemical
              exposure on its own. Ceramic coating adds a permanent shield that
              goes far beyond what traditional wax or sealant can offer. At
              LuxeRide, we apply professional-grade SiO2 nano-ceramic coatings
              in Overland Park that chemically bond to your paint and deliver
              years of measurable protection — all from the convenience of your
              driveway or office parking lot.
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
                Our ceramic coating service is a comprehensive, multi-step
                process. We never cut corners — proper preparation is what
                separates a coating that lasts years from one that fails in
                months.
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
                <p className="mt-2 text-5xl font-bold text-[#FAFAFA]">$499</p>
                <p className="mt-2 text-sm text-[#FAFAFA]/50">
                  Price varies by vehicle size &amp; coating tier
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

      {/* Nano-Ceramic Technology */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              What Is Nano-Ceramic Coating?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                Nano-ceramic coating is a liquid polymer made primarily from
                silicon dioxide (SiO2) that is applied by hand to every painted
                exterior panel of your vehicle. Once cured, it forms an
                incredibly thin, transparent, and rigid layer that chemically
                bonds to the factory clear coat. Unlike wax or sealant — which
                sit on top of the paint and wash away within weeks — a ceramic
                coating becomes part of the surface itself and cannot be removed
                by normal washing or weather exposure.
              </p>
              <p>
                The result is a semi-permanent barrier that is highly
                hydrophobic, meaning water beads up and rolls off the surface
                instantly, carrying dirt and grime with it. This self-cleaning
                effect keeps your vehicle looking freshly washed for far longer
                between maintenance washes. The coating also dramatically reduces
                the risk of water spots, mineral etching, and chemical staining
                from bird droppings, bug splatter, and road tar.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Benefits of Professional Ceramic Coating
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                Beyond the hydrophobic finish, ceramic coating provides
                significant UV protection that prevents your paint from fading
                and oxidizing under the intense Kansas summer sun. The coating
                also offers chemical resistance against acidic contaminants like
                bird droppings, tree sap, and road salt — all of which are
                unavoidable in the Overland Park area. Your paint retains its
                depth, gloss, and color clarity far longer than an unprotected or
                wax-only finish.
              </p>
              <p>
                The surface hardness of a cured ceramic coating makes it more
                resistant to light marring and swirl marks from improper washing.
                While no coating is scratch-proof, a ceramic layer adds a
                measurable level of defense that your factory clear coat does not
                have on its own. This translates directly to preserved resale
                value and a finish that looks showroom-fresh years after
                application.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Our Application Process
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                Preparation is everything. We begin with a full paint
                decontamination — hand wash, iron fallout remover, and clay bar
                treatment to strip every bonded contaminant from the surface.
                Next comes a single-stage machine polish to remove swirl marks,
                light scratches, and any oxidation. The paint must be in the best
                possible condition before the coating goes on, because the
                coating amplifies whatever is underneath it.
              </p>
              <p>
                Once the surface is pristine, we apply the SiO2 ceramic coating
                panel by panel in a controlled environment, ensuring even
                coverage and proper leveling. The coating then cures over a
                period of 24 to 48 hours, during which the vehicle should not be
                exposed to water or heavy moisture. We schedule your appointment
                with this curing window in mind so you get the longest-lasting,
                most durable result possible.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Who Should Get a Ceramic Coating?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                Ceramic coating is ideal for anyone who values their vehicle and
                wants to minimize ongoing maintenance. If you own a new car and
                want to lock in that factory finish from day one, coating it
                early is the smartest move you can make. Owners of luxury
                vehicles, sports cars, and daily drivers alike benefit from the
                reduced washing frequency, easier cleaning, and long-term paint
                preservation.
              </p>
              <p>
                It is also a strong choice for lease returns — a well-maintained
                ceramic-coated vehicle is far less likely to incur paint-related
                charges at turn-in. Overland Park residents who park outdoors,
                commute on I-435 or US-69, or simply want to spend less time
                washing their car will notice an immediate difference in how the
                paint performs against Kansas weather.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Why Professional Application Matters
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#FAFAFA]/70">
              <p>
                Consumer-grade ceramic sprays and DIY kits offer a fraction of
                the durability and performance of a professional-grade coating.
                True ceramic coating requires thorough surface preparation,
                machine polishing, and precise application technique to avoid
                high spots, streaking, and premature failure. The products we use
                are only available to trained and certified installers and
                deliver a level of hardness and longevity that over-the-counter
                products cannot match.
              </p>
              <p>
                At LuxeRide, our technicians have the training and equipment to
                apply ceramic coatings correctly the first time. We bring
                everything to your location in Overland Park — water, power,
                lighting, and professional tools — so you get a shop-quality
                result without the inconvenience of dropping off your vehicle for
                days. Every coating includes an aftercare kit and detailed
                maintenance instructions to help you get the most out of your
                investment.
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
            Maximize the impact of your ceramic coating by pairing it with one
            of these complementary services.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                SERVICES.find((s) => s.slug === "paint-correction")!,
                SERVICES.find((s) => s.slug === "exterior-detail")!,
                SERVICES.find((s) => s.slug === "full-detail")!,
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
            Common questions about ceramic coating for your vehicle in Overland
            Park.
          </p>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Protect Your Paint for Years to Come"
        description="Book your ceramic coating appointment today. We come to your home or office in Overland Park and deliver professional-grade nano-ceramic protection — no drop-off required."
        buttonText="Book Your Ceramic Coating"
      />
    </>
  );
}
