import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

const service = SERVICES.find((s) => s.slug === "interior-detail")!;

export const metadata: Metadata = {
  title: "Interior Car Detailing Overland Park",
  description:
    "Professional interior car detailing in Overland Park, KS. Deep vacuuming, steam cleaning, leather conditioning & odor removal. Book your mobile detail today!",
  alternates: { canonical: "/services/interior-detail" },
  openGraph: {
    title: `Interior Car Detailing Overland Park | ${BUSINESS.name}`,
    description:
      "Expert interior car detailing in Overland Park. We come to you for thorough cabin cleaning, leather care, and odor elimination.",
    url: "/services/interior-detail",
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

            {/* Pricing Callout */}
            <div className="flex items-start">
              <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-sm font-medium uppercase tracking-wider text-[#1E5FAE]">
                  Interior Detail
                </p>
                <p className="mt-4 text-4xl font-bold text-[#1C1C1C] sm:text-5xl">
                  Starting at ${service.startingPrice}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#4A4A4A]">
                  Final pricing depends on vehicle size and how dirty things
                  are inside. Sedans, SUVs, trucks, and vans are all welcome.
                  Reach out and we&rsquo;ll give you an exact quote.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded-lg bg-[#10B981] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669]"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
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
