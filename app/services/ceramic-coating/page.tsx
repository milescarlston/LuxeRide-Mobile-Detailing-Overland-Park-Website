import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CoatingPricingTable } from "@/components/PricingTable";
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
      "Ceramic coating in Overland Park that actually lasts. We come to you, prep your paint properly, and apply pro-grade protection. Free quotes available.",
    url: "/services/ceramic-coating",
  },
};

const faqs = [
  {
    question: "How long does a ceramic coating last?",
    answer:
      "It depends on the product tier and how well you maintain it. Our entry-level coating lasts about 2 years. Our multi-layer option can go up to 5 years. Vehicles that are garaged and washed regularly with pH-neutral soap will get the longest life out of any coating. Kansas weather is tough, but a well-maintained coating holds up great.",
  },
  {
    question: "Is ceramic coating worth the cost?",
    answer:
      "For most people, yes. You spend less on waxing, sealants, and paint correction over time because contaminants can not bond to the surface as easily. It also helps preserve resale value by keeping the paint in better shape. If you plan to keep your car for more than a year or two, it usually pays for itself. That said, if you are leasing short-term and always garage your car, you might not need it.",
  },
  {
    question: "How do I take care of a ceramic-coated car?",
    answer:
      "It is pretty simple. Wash every two weeks or so with a pH-neutral car soap. Stay away from automatic car washes with those spinning brushes. Dry with a clean microfiber towel. Once or twice a year, use a ceramic boost spray to freshen up the water-beading effect. We include an aftercare kit with every coating so you have everything you need to get started.",
  },
  {
    question: "What is the difference between ceramic coating and wax?",
    answer:
      "Wax sits on top of your paint and wears off in about 4 to 8 weeks. Ceramic coating bonds to your clear coat at a chemical level, creating a hard, glass-like layer that lasts years instead of weeks. It handles UV rays, bird droppings, tree sap, and road salt way better than any wax or sealant can. Think of wax as chapstick and ceramic coating as a permanent shield.",
  },
  {
    question: "Can you apply ceramic coating over scratches or swirl marks?",
    answer:
      "You can, but you should not. A ceramic coating does not hide scratches. It actually makes them more visible because it adds gloss and clarity. That is why we include a single-stage paint correction with every ceramic coating service. We remove the swirl marks and light scratches first, then apply the coating over clean paint. If your paint has deeper damage, we will let you know before we start.",
  },
  {
    question: "How much does ceramic coating cost in Overland Park?",
    answer:
      "Our ceramic coating packages start at $449 for a 1-year coating, $749 for a 3-year coating, and $1,099 for a 5-year coating. Every package includes a full exterior detail, paint decontamination, and 1-step polish prep. Exact pricing depends on your vehicle size and paint condition. We will provide a custom quote after a quick inspection or phone consultation.",
  },
  {
    question: "Why do ceramic coating prices vary?",
    answer:
      "The biggest factor is the coating product itself. Longer-lasting coatings use higher-grade materials that cost more. Vehicle size matters too because larger panels take more product and more time to prep and coat. Paint condition plays a role as well. If your paint needs extra correction work before the coating goes on, that adds time to the job.",
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
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
              Ceramic Coating in{" "}
              <span className="text-[#1E5FAE]">Overland Park, KS</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A]">
              Here&apos;s what ceramic coating actually does. It bonds to your
              clear coat and creates a hard, slick layer that water beads right
              off of. Bird poop, tree sap, road salt, bug guts? They wash off
              way easier instead of eating into your paint. It&apos;s not magic,
              but it&apos;s pretty close.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
              We bring everything to your driveway or office parking lot in
              Overland Park. No drop-off, no waiting at a shop. We prep the
              paint properly, apply a professional-grade SiO2 ceramic coating,
              and you get years of real protection.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included + Pricing */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                What&apos;s Included
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Every ceramic coating job starts with serious prep work. We
                never skip steps because a coating is only as good as the
                surface underneath it.
              </p>
              <ul className="mt-8 space-y-4">
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
                    <span className="text-[#1C1C1C]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                What It Costs
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Ceramic coating is priced by durability tier. Larger vehicles
                will cost more within each tier.
              </p>
              <div className="mt-8">
                <CoatingPricingTable
                  tiers={service.coatingTiers!}
                  estimatedTime={service.estimatedTime}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo showcase */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Paint Protection Results
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Clean, corrected, and protected. This is what your paint can look like with proper prep and a professional ceramic coating.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-front.png" alt="Range Rover Sport with glossy paint finish after ceramic coating prep" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/jeep-wrangler-exterior.png" alt="Jeep Wrangler Rubicon with deep paint shine after polish and protection" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/ram-3500-exterior.png" alt="White Ram 3500 with brilliant paint finish after exterior prep and coating" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Ceramic Coating */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              So What Is Ceramic Coating, Exactly?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                Ceramic coating is a liquid made from silicon dioxide (SiO2)
                that we apply by hand to every painted panel of your car. Once
                it cures, it forms a thin, clear, hard layer that bonds to
                your factory clear coat. Unlike wax, which sits on top and
                washes away in a few weeks, ceramic coating becomes part of the
                surface.
              </p>
              <p>
                The big thing you will notice right away is how water behaves.
                It beads up and rolls right off, taking dirt and grime with it.
                Your car stays cleaner longer between washes, and when you do
                wash it, everything comes off so much easier. Less scrubbing,
                less time, less effort.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              What It Actually Does for Your Paint
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                Kansas summers are rough on paint. The UV exposure fades and
                oxidizes your clear coat over time. Ceramic coating blocks a
                lot of that UV damage so your color stays deeper and more
                vibrant. It also resists chemical staining from bird droppings,
                tree sap, and road salt, which are hard to avoid in Overland
                Park.
              </p>
              <p>
                The cured coating is harder than your factory clear coat, which
                means it resists light swirl marks from washing. Let&apos;s be
                honest though. It is not scratch-proof. Nothing is. But it adds
                a real layer of defense that your paint does not have on its
                own. That translates to better-looking paint for longer and
                stronger resale value when it is time to sell or trade in.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              How We Apply It
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                Prep is where most of the work happens. We start with a full
                decontamination: hand wash, iron fallout remover, and clay bar
                to strip every bonded contaminant off the surface. Then we
                machine polish to remove swirl marks, light scratches, and
                oxidation. The paint has to be in the best shape possible
                before the coating goes on because the coating locks in
                whatever is underneath it.
              </p>
              <p>
                Once the surface is clean and corrected, we apply the ceramic
                coating panel by panel, making sure the coverage is even and
                properly leveled. It then needs 24 to 48 hours to cure
                without getting wet. We plan your appointment around that
                window so you get the best result.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              Is Ceramic Coating Right for You?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                If you just bought a new car and want to keep that fresh paint
                looking fresh, coating it early is the smartest move. You lock
                in the finish before the Kansas elements start wearing it down.
                Daily drivers, trucks, SUVs, sports cars, it works on all of
                them.
              </p>
              <p>
                It is also great for lease returns. A coated car is way less
                likely to get dinged for paint damage at turn-in. And if you
                park outside, commute on I-435 or US-69, or just hate spending
                your weekends washing your car, you will notice a real
                difference in how little maintenance the paint needs.
              </p>
              <p>
                Who might not need it? If you are selling your car next month
                or it lives in a garage and barely sees the road, you might be
                fine with a good sealant instead. We will always be straight
                with you about whether coating makes sense for your situation.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              Why Professional Application Matters
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                You can buy ceramic coating sprays at any auto parts store.
                They are fine for a little extra slickness after a wash, but
                they are not the same thing. Real ceramic coating requires
                proper surface prep, machine polishing, and precise application
                to avoid streaking or high spots. The products we use are only
                available to trained installers and last significantly longer
                than anything off the shelf.
              </p>
              <p>
                We bring everything to your location in Overland Park: water,
                power, lighting, and professional tools. You get shop-quality
                results in your own driveway. Every coating comes with an
                aftercare kit and clear maintenance instructions so you know
                exactly how to take care of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Services That Pair Well with Ceramic Coating
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Get the most out of your coating by starting with clean, corrected
            paint. These services work great alongside ceramic coating.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                SERVICES.find((s) => s.slug === "exterior-detail")!,
                SERVICES.find((s) => s.slug === "full-detail")!,
                SERVICES.find((s) => s.slug === "headlight-restoration")!,
              ] as const
            ).map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-[#1E5FAE]/40"
              >
                <h3 className="text-lg font-semibold text-[#1C1C1C] group-hover:text-[#1E5FAE]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  {related.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#1E5FAE]">
                  Starting at ${related.startingPrice}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Common questions about ceramic coating in Overland Park.
          </p>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Want to Protect Your Paint for Years?"
        description="We come to your home or office in Overland Park and handle everything. Just book a time that works for you and we will take it from there."
        buttonText="Get a Free Quote"
      />
    </>
  );
}
