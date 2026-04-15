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
      "Most interior details take between 1.5 and 3 hours depending on the size and condition of your vehicle. Heavily soiled interiors, pet hair removal, or odor treatment may add additional time. We always prioritize thoroughness over speed to deliver the best possible result.",
  },
  {
    question: "Can you remove pet hair and pet odors from my car?",
    answer:
      "Yes. We use professional-grade extraction tools, rubber brushes, and compressed air to remove embedded pet hair from seats, carpet, and hard-to-reach crevices. For odors, we use an ozone generator and enzymatic treatments that break down odor-causing molecules at the source rather than simply masking them.",
  },
  {
    question: "Is your leather conditioning safe for all leather types?",
    answer:
      "We use pH-balanced, water-based leather cleaners and conditioners that are safe for all automotive leather and leatherette surfaces, including perforated seats. Our conditioning products restore moisture and flexibility without leaving a greasy or slippery residue.",
  },
  {
    question: "Do I need to prepare my car before the interior detail?",
    answer:
      "We recommend removing personal belongings, trash, and any car seats before your appointment so our team can access every surface. Beyond that, there is no special preparation needed — even if your interior is in rough shape, that is exactly what we are here for.",
  },
  {
    question:
      "What is the difference between a basic interior cleaning and a professional interior detail?",
    answer:
      "A basic cleaning typically covers vacuuming and a wipe-down of surfaces. A professional interior detail goes much deeper: we steam clean fabrics, extract stains, clean and condition leather, detail every vent and crevice, treat plastics with UV protectant, and eliminate odors. The result is a cabin that looks, feels, and smells like new.",
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
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              {service.title} in Overland Park, KS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Your vehicle&rsquo;s cabin takes a beating every day. Dust settles
              into vents, crumbs work their way between seats, and spills leave
              behind stains you stop noticing until someone else rides along. Our
              professional interior car detailing in Overland Park addresses
              every surface inside your vehicle so it looks, feels, and smells
              like the day you drove it off the lot.
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
                What&rsquo;s Included
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/60">
                Every interior detail is performed on-site at your home or
                office. We bring our own water, power, and professional-grade
                equipment so you don&rsquo;t have to lift a finger.
              </p>
              <ul className="mt-8 space-y-3">
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

            {/* Pricing Callout */}
            <div className="flex items-start">
              <div className="w-full rounded-2xl border border-white/10 bg-[#1A1A1A] p-8 sm:p-10">
                <p className="text-sm font-medium uppercase tracking-wider text-[#C9A84C]">
                  Interior Detail
                </p>
                <p className="mt-4 text-4xl font-bold text-[#FAFAFA] sm:text-5xl">
                  Starting at $99
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#FAFAFA]/60">
                  Final pricing depends on vehicle size and interior condition.
                  Sedans, SUVs, trucks, and vans are all welcome. Contact us for
                  an exact quote.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded-md bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Our Interior Detailing Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              We follow a systematic, top-to-bottom approach that ensures
              nothing gets missed. Our technicians start by removing all loose
              debris with a thorough vacuum of seats, carpets, floor mats, and
              the trunk area. Next, we use commercial-grade steam cleaners to
              sanitize and deep-clean fabric surfaces, extracting embedded dirt
              that vacuuming alone cannot reach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Leather and vinyl surfaces receive a dedicated cleaning with
              pH-balanced products followed by a conditioner that restores
              suppleness and provides UV protection. Every hard surface,
              including the dashboard, center console, door panels, cup holders,
              and air vents, is carefully detailed with brushes and microfiber
              towels. We finish with a full interior window cleaning and an odor
              elimination treatment to leave the cabin smelling fresh without
              artificial fragrances.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Who Benefits from Interior Detailing?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Interior detailing is not just for car enthusiasts. Families in
              Overland Park dealing with juice-box spills and cracker crumbs see
              immediate results. Commuters who spend hours on I-435 and Metcalf
              Avenue benefit from a cleaner, healthier cabin environment.
              Allergy sufferers notice a real difference once dust, pollen, and
              pet dander are professionally extracted from upholstery and
              ventilation surfaces.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              If you are preparing to sell or trade in your vehicle, a
              professional interior detail can significantly improve buyer
              perception and help you get a better offer. And because LuxeRide
              is a fully mobile operation, you never have to rearrange your day
              to drop off your car at a shop. We come to your home, office, or
              wherever your vehicle is parked in the Overland Park area.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-white/10 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#FAFAFA]/60">
            Looking for more than an interior cleaning? Pair it with one of
            these services for a complete transformation.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            {SERVICES.filter(
              (s) => s.slug === "full-detail" || s.slug === "exterior-detail"
            ).map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-[#C9A84C]/30"
              >
                <h3 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[#C9A84C]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">
                  {related.description}
                </p>
                <p className="mt-3 text-sm font-medium text-[#C9A84C]">
                  Starting at ${related.startingPrice} &rarr;
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
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#FAFAFA]/60">
            Have a question about our interior detailing service? Find answers
            below or{" "}
            <Link
              href="/contact"
              className="text-[#C9A84C] underline underline-offset-4 hover:text-[#b8973f]"
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
        headline="Ready for a Fresh, Clean Interior?"
        description="Book your interior detail today and let LuxeRide bring the showroom experience to your driveway. We serve Overland Park and the entire Kansas City metro."
        buttonText="Schedule Your Interior Detail"
      />
    </>
  );
}
