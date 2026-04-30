import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { VehiclePricingTable } from "@/components/PricingTable";
import AddOnsList from "@/components/AddOnsList";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

const service = SERVICES.find((s) => s.slug === "exterior-detail")!;

const TITLE = "Exterior Car Detailing Overland Park, KS | LuxeRide Mobile Detailing";
const DESCRIPTION =
  "Mobile exterior car detailing in Overland Park starting at $125. Hand wash, clay bar, wax, tire dressing & more — right in your driveway. Book a free quote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/exterior-detail" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services/exterior-detail",
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

const faqs = [
  {
    question: "How long does an exterior detail take?",
    answer:
      "Most exterior details take between 1.5 and 2.5 hours. It depends on the size of your vehicle and how dirty it is. Bigger trucks and SUVs take a bit longer, and so do cars that have heavy buildup from sitting outside. We never rush through the steps because each one needs time to work properly.",
  },
  {
    question: "What is clay bar treatment and why does my car need it?",
    answer:
      "A clay bar pulls out stuff that is stuck in your paint that washing can't touch. Think brake dust, tree sap residue, industrial fallout, and overspray. You know that gritty feeling when you run your hand across a freshly washed car? That's contamination. Clay bar treatment makes the surface glass-smooth so the polish and sealant can actually do their job.",
  },
  {
    question: "How often should I get an exterior detail?",
    answer:
      "Every 3 to 4 months is a good schedule for most cars in the Overland Park area. Kansas weather is tough on paint. Summer sun fades it, and winter road salt eats at it. Regular detailing keeps contaminants from building up and makes sure your sealant is refreshed before it wears off. If your car lives in a garage and doesn't get driven much, every 4 to 6 months works fine.",
  },
  {
    question: "Do you bring your own water and power supply?",
    answer:
      "Yes, we're completely self-contained. We carry our own water tanks, filtration system, generator, and all the tools we need. All you need to give us is a flat spot to work. Your driveway, garage, or office parking lot works great. And we clean up after ourselves, so there's no mess left behind.",
  },
  {
    question:
      "What is the difference between a paint sealant and a ceramic coating?",
    answer:
      "A paint sealant is a synthetic layer that protects your paint for about 3 to 4 months. It blocks UV rays, water spots, and everyday grime. Every exterior detail includes a fresh coat of sealant. A ceramic coating is a longer-term solution that lasts 2 to 5 years. It's tougher, shinier, and sheds water like crazy. If you want that kind of long-lasting protection, check out our ceramic coating service.",
  },
  {
    question: "How much does exterior car detailing cost in Overland Park?",
    answer:
      "Our exterior wash and detail starts at $125 for sedans and small cars, $159 for SUVs and crossovers, and $189 for trucks, vans, and large SUVs. Final price depends on your vehicle's size and condition. We always confirm pricing upfront before we start so there are no surprises.",
  },
  {
    question: "Why do prices vary by vehicle size?",
    answer:
      "Bigger vehicles have more surface area, which means more time, more product, and more labor. A full-size truck takes about twice as long to detail as a sedan. We price by size tier so you only pay for the work your vehicle actually needs.",
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
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
              Exterior Wash &amp; Detail in{" "}
              <span className="text-[#1E5FAE]">Overland Park, KS</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A]">
              Your car deals with a lot. Road grime, brake dust, tree sap, bird
              poop, and Kansas sun all work together to make your paint look dull
              and feel rough. A regular car wash doesn&apos;t fix that. Our
              exterior car detailing in Overland Park goes deeper. We clean,
              correct, and protect every painted surface so your car actually
              looks like it did when you first got it.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                What&apos;s Included
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Every exterior detail follows a step-by-step process. We remove
                contamination, restore clarity, and seal everything in. Here is
                exactly what you get:
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
                Pricing starts based on your vehicle size. Your price might be a
                bit higher if your car needs extra love — we&apos;ll always let
                you know upfront before we start.
              </p>
              <div className="mt-8">
                <VehiclePricingTable
                  tiers={service.vehicleTiers!}
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
            Exterior Detail Results
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Here are some vehicles we have detailed in the Overland Park area.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/jeep-wrangler-exterior.png" alt="Jeep Wrangler Rubicon after exterior detail with gleaming paint finish" width={600} height={450} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-front.png" alt="Range Rover Sport front view after exterior detail with glossy paint" width={600} height={450} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/ram-3500-chrome-wheel.png" alt="Ram 3500 chrome dually wheel polished to mirror finish" width={600} height={450} className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              How We Detail Your Car&apos;s Exterior
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                First, we rinse everything down to loosen up surface dirt. This
                keeps us from scratching your paint during the wash. Then we
                apply a pH-neutral foam bath and hand wash using the two-bucket
                method with grit guards. This is the same technique that
                prevents the swirl marks you get from automatic car washes.
              </p>
              <p>
                After we dry your car with clean microfiber towels, we move to
                the clay bar step. This pulls out contaminants buried in your
                clear coat that washing can&apos;t reach. Think of it like
                exfoliating your skin. You&apos;ll feel the difference when you
                run your hand across the paint.
              </p>
              <p>
                Next comes a one-step machine polish. This takes out light swirl
                marks, water spots, and minor scratches to bring back real depth
                and shine. We finish with a durable paint sealant that protects
                against UV damage, acid rain, and road grime for months. Your
                tires get dressed, wheels get cleaned and protected, windows are
                streak-free, and all exterior trim is conditioned.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              Is This Service Right for You?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                This is a great fit if your interior is fine but the outside
                needs help. Maybe you&apos;re getting ready for a weekend event.
                Maybe you&apos;re keeping up with your lease. Or maybe
                you&apos;re just tired of looking at dusty wheels and water
                spots every time you walk to your car.
              </p>
              <p>
                It&apos;s also a smart maintenance step between ceramic coating
                applications to keep your finish protected. If you park outside
                or commute on I-435 and US-69 every day, you&apos;ll notice the
                biggest difference. Highway grime and road salt build up fast
                around the Kansas City metro.
              </p>
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              We Come to You
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#4A4A4A]">
              <p>
                LuxeRide is fully mobile. We bring water, power, and all our
                tools right to your driveway or office parking lot. You don&apos;t
                need to drop off your car or sit in a waiting room. We serve
                Overland Park, Leawood, Olathe, Lenexa, and the surrounding
                Johnson County area. Just pick a time, and we&apos;ll handle the
                rest while you go about your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Popular Add-Ons
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Pair your exterior detail with any of these for even better results.
          </p>
          <div className="mt-8">
            <AddOnsList addOns={service.addOns!} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Want to go further? Pair your exterior detail with one of these for
            even better results.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                SERVICES.find((s) => s.slug === "full-detail")!,
                SERVICES.find((s) => s.slug === "ceramic-coating")!,
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
            Got questions about exterior detailing? Here are the ones we hear
            the most.
          </p>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to See the Difference?"
        description="Book your mobile exterior detail today. We come to your home or office in Overland Park. No drop-off, no waiting room, no hassle."
      />
    </>
  );
}
