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

const service = SERVICES.find((s) => s.slug === "interior-detail")!;

const TITLE = "Interior Car Detailing Overland Park, KS | LuxeRide Mobile Detailing";
const DESCRIPTION =
  "Deep interior car detailing in Overland Park starting at $175. Vacuum, shampoo, leather conditioning, dashboard cleaning & more. We come to you — book today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/interior-detail" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services/interior-detail",
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
    question: "How long does an interior detail take?",
    answer:
      "Most interior details take between 1.5 and 3 hours depending on the size and condition of your vehicle. If there's heavy pet hair, deep stains, or serious odors, it might take a bit longer. We'd rather take our time and do it right than rush through it.",
  },
  {
    question: "Can you remove pet hair and pet odors from my car?",
    answer:
      "Absolutely. Pet hair is one of the most common things we deal with. We use extraction tools, rubber brushes, and compressed air to pull embedded hair out of seats, carpet, and all those tight spots where it hides. For odors, we use an ozone generator and enzymatic treatments that actually break down what's causing the smell instead of just covering it up.",
  },
  {
    question: "Is your leather conditioning safe for all leather types?",
    answer:
      "Yes. We use pH-balanced, water-based cleaners and conditioners that work on all automotive leather and leatherette surfaces, including perforated seats. They restore moisture and flexibility without leaving things greasy or slippery.",
  },
  {
    question: "Do I need to prepare my car before the interior detail?",
    answer:
      "Just grab your personal stuff, toss any trash, and pull out any car seats so we can get to every surface. That's it. Even if your interior is in rough shape, that's exactly what we're here for.",
  },
  {
    question:
      "What is the difference between a basic interior cleaning and a professional interior detail?",
    answer:
      "A basic cleaning is usually just a vacuum and a quick wipe-down. A professional interior detail goes way deeper. We steam clean fabrics, extract stains, clean and condition leather, detail every vent and crevice, treat plastics with UV protectant, and eliminate odors. When we're done, your car looks, feels, and smells like it just rolled off the lot.",
  },
  {
    question: "How much does interior car detailing cost in Overland Park?",
    answer:
      "Our interior detail starts at $175 for sedans and small cars, $215 for SUVs and crossovers, and $249 for trucks, vans, and large SUVs. Final price depends on vehicle size and condition. If the interior is heavily soiled or needs extra attention, we will let you know upfront before we start.",
  },
  {
    question: "Why do prices vary by vehicle size?",
    answer:
      "Bigger vehicles have more interior surface area. More seats, more carpet, more dashboard, more everything. A full-size SUV or truck takes significantly more time and product than a compact sedan. We price by size tier so you only pay for the work your vehicle actually needs.",
  },
];

export default function InteriorDetailPage() {
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
          { name: "Interior Detail", href: "/services/interior-detail" },
        ]}
      />

      {/* Hero / Intro */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
              {service.title} in{" "}
              <span className="text-[#1E5FAE]">Overland Park, KS</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A]">
              Let&rsquo;s be honest. Your car&rsquo;s interior has seen better
              days. Maybe it&rsquo;s old french fries wedged under the back
              seat. Maybe it&rsquo;s a coffee spill on the center console that
              you keep meaning to clean up. Or maybe the kids have turned your
              back seat into a snack zone and there are crumbs everywhere. We
              get it. Our interior car detailing in Overland Park takes care of
              all of it so your car looks, feels, and smells clean again.
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
                What&rsquo;s Included
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4A4A4A]">
                We come to your home or office with everything we need. Water,
                power, professional-grade equipment. You don&rsquo;t have to
                lift a finger or drive anywhere.
              </p>
              <ul className="mt-8 space-y-3">
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
                Pricing depends on your vehicle size. Your price might be a bit
                higher if your interior needs extra love — we&apos;ll always let
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

      {/* Before & After + Photos */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Interior Detail Results
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Real before and after results from vehicles we have detailed in the Overland Park area.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* BMW X5 before/after */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3]">
                  <span className="absolute left-2 top-2 z-10 rounded bg-red-500/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">Before</span>
                  <Image src="/images/bmw-x5-trunk-before.jpg" alt="BMW X5 trunk carpet before detailing with heavy staining" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-[4/3]">
                  <span className="absolute left-2 top-2 z-10 rounded bg-[#10B981]/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">After</span>
                  <Image src="/images/bmw-x5-trunk-after.jpg" alt="BMW X5 trunk carpet after professional extraction cleaning" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <p className="p-3 text-sm font-medium text-[#1C1C1C]">BMW X5 trunk carpet extraction</p>
            </div>
            {/* Silverado before/after */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3]">
                  <span className="absolute left-2 top-2 z-10 rounded bg-red-500/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">Before</span>
                  <Image src="/images/silverado-rear-before.png" alt="Chevy Silverado rear seat before detailing with dirt and debris" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-[4/3]">
                  <span className="absolute left-2 top-2 z-10 rounded bg-[#10B981]/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">After</span>
                  <Image src="/images/silverado-rear-after.png" alt="Chevy Silverado rear seat after interior detailing with clean cloth" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <p className="p-3 text-sm font-medium text-[#1C1C1C]">Chevy Silverado rear seat deep clean</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/jeep-wrangler-interior-front.png" alt="Jeep Wrangler red leather seats after interior detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/ram-3500-interior.png" alt="Ram 3500 tan leather interior after professional detailing" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-interior-dash.png" alt="Range Rover Sport dashboard and steering wheel after interior detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              How We Detail Your Interior
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A4A4A]">
              We work from top to bottom so nothing gets missed. First, we pull
              out all the loose stuff with a thorough vacuum of seats, carpets,
              floor mats, and the trunk. Then we bring in the steam cleaners to
              deep-clean fabric surfaces and pull out the dirt that vacuuming
              alone can&rsquo;t reach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4A4A4A]">
              Leather and vinyl get their own treatment with pH-balanced
              cleaners and a conditioner that keeps them soft and protected from
              UV damage. Every hard surface gets attention too. Dashboard,
              center console, door panels, cup holders, air vents. We use
              brushes and microfiber towels to get into all the nooks and
              crannies. We wrap up with a full interior window cleaning and odor
              treatment so your car smells fresh without any of those fake
              air-freshener scents.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              Who Benefits from Interior Detailing?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A4A4A]">
              This isn&rsquo;t just for car enthusiasts. If you&rsquo;ve got
              kids who leave juice boxes and goldfish crackers everywhere,
              you&rsquo;ll see a huge difference. If you commute on I-435 or
              Metcalf Avenue every day, you&rsquo;ll enjoy a cleaner, healthier
              space. If you have allergies, you&rsquo;ll notice a real change
              once we get the dust, pollen, and pet dander out of your
              upholstery.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4A4A4A]">
              Thinking about selling or trading in your car? A professional
              interior detail can help you get a better offer. Buyers notice a
              clean cabin. And because we&rsquo;re fully mobile, you never have
              to rearrange your day or sit at a detail shop. We come to your
              home, office, or wherever your car is parked in the Overland Park
              area.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Popular Add-Ons
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Need a little extra? These pair well with an interior detail.
          </p>
          <div className="mt-8">
            <AddOnsList addOns={service.addOns!} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4A4A4A]">
            Want more than just an interior cleaning? Pair it with one of these
            for the full treatment.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            {SERVICES.filter(
              (s) => s.slug === "full-detail" || s.slug === "exterior-detail"
            ).map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-[#1E5FAE]/30"
              >
                <h3 className="text-lg font-semibold text-[#1C1C1C] group-hover:text-[#1E5FAE]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  {related.description}
                </p>
                <p className="mt-3 text-sm font-medium text-[#1E5FAE]">
                  Starting at ${related.startingPrice} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4A4A4A]">
            Got a question about our interior detailing service? Check below
            or{" "}
            <Link
              href="/contact"
              className="text-[#1E5FAE] underline underline-offset-4 hover:text-[#1E5FAE]/80"
            >
              reach out to us
            </Link>{" "}
            directly.
          </p>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for a Clean Interior?"
        description="Book your interior detail today and we'll come right to your driveway. We serve Overland Park and the entire Kansas City metro."
        buttonText="Schedule Your Interior Detail"
      />
    </>
  );
}
