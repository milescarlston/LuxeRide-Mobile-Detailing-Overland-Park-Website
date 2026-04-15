import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

const service = SERVICES.find((s) => s.slug === "full-detail")!;

const faqs = [
  {
    question: "What is included in a full car detail in Overland Park?",
    answer:
      "Our full detail package combines a complete exterior wash, clay bar treatment, polish, and sealant with a thorough interior deep clean including vacuuming, steam cleaning, leather conditioning, and odor elimination. We also clean the engine bay, door jambs, headlights, and exhaust tips for a true bumper-to-bumper restoration.",
  },
  {
    question: "How long does a full detail take?",
    answer:
      "A full car detail typically takes between three and five hours depending on the size and condition of your vehicle. Larger SUVs, trucks, or heavily soiled interiors may require additional time. We recommend setting aside a half day so our technicians can deliver the best possible results without rushing.",
  },
  {
    question: "How often should I get a full detail?",
    answer:
      "For most drivers in the Overland Park area, we recommend a full detail every four to six months. If you park outdoors, drive frequently on gravel roads, or have kids and pets, a quarterly schedule helps maintain your vehicle's appearance and protects surfaces from long-term wear.",
  },
  {
    question: "Do you come to my home or office for full detailing?",
    answer:
      "Yes. LuxeRide is a fully mobile car detailing service. We bring all of our equipment, water, and professional-grade products directly to your home, office, or any location in Overland Park and the surrounding Kansas City metro area. All we need is a standard parking space and access to your vehicle.",
  },
  {
    question: "Is the full detail worth it compared to just an exterior or interior detail?",
    answer:
      "Absolutely. The full detail package offers the best value because it addresses every surface of your vehicle in a single appointment. You save money compared to booking our exterior and interior services separately, and your car receives extras like engine bay cleaning and door jamb detailing that are not included in the individual packages.",
  },
];

export const metadata: Metadata = {
  title: "Full Car Detail Overland Park",
  description:
    "Get a full car detail in Overland Park from LuxeRide Mobile Detailing. Bumper-to-bumper interior & exterior service. Book your appointment today!",
  alternates: { canonical: "/services/full-detail" },
  openGraph: {
    title: `Full Car Detail Overland Park | ${BUSINESS.name}`,
    description:
      "Complete bumper-to-bumper detailing combining our exterior and interior packages. Engine bay, door jambs, headlights & more. Mobile service in Overland Park, KS.",
    url: "/services/full-detail",
  },
};

export default function FullDetailPage() {
  return (
    <>
      {/* JSON-LD structured data */}
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
          { name: "Full Detail", href: "/services/full-detail" },
        ]}
      />

      {/* Hero / intro */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Full Car Detail in Overland Park, KS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Our full detail package is the most comprehensive service we offer at{" "}
              {BUSINESS.name}. It merges everything from our exterior wash and detail with
              our deep interior cleaning into one seamless appointment, giving your vehicle
              the complete refresh it deserves. Starting at just{" "}
              <span className="font-semibold text-[#C9A84C]">${service.startingPrice}</span>,
              a full car detail in Overland Park has never been more convenient or thorough.
            </p>
          </div>
        </div>
      </section>

      {/* What is a full detail */}
      <section className="border-t border-white/5 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                What Is a Full Car Detail?
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                A full car detail goes far beyond an ordinary car wash. It is a
                bumper-to-bumper reconditioning of your vehicle&rsquo;s exterior and interior
                surfaces, performed by trained technicians using professional-grade products.
                On the outside, we hand wash, clay bar, polish, and seal the paint so it
                regains its factory luster. Tires, wheels, trim, and glass are all addressed
                individually. On the inside, every surface is vacuumed, steam cleaned, and
                conditioned — from the dashboard and door panels to the seats, carpet, and
                headliner.
              </p>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                What truly sets our full detail apart is the attention to areas most shops
                overlook. We clean the engine bay to remove grime and road salt buildup, wipe
                down every door jamb to eliminate trapped dirt, polish the exhaust tips, and
                restore clarity to oxidized headlights. The result is a vehicle that looks,
                feels, and smells like it just rolled off the showroom floor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
                Who Should Book a Full Detail?
              </h2>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                The full detail package is ideal for anyone who wants a complete
                transformation in a single visit. If you are preparing your car for sale or
                trade-in, a full detail can significantly boost curb appeal and perceived
                value. It is also a smart choice after a long Kansas winter when salt, sand,
                and road grime have accumulated on every surface. Daily commuters, busy
                parents, and car enthusiasts alike appreciate the convenience of having every
                inch of their vehicle professionally cleaned without the hassle of visiting a
                shop.
              </p>
              <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
                Because we are a fully mobile service, we come directly to your home or office
                anywhere in Overland Park, Leawood, Olathe, Lenexa, and the surrounding
                Kansas City metro area. There is no need to drop off your car or rearrange
                your schedule. You go about your day while we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-white/5 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            What&rsquo;s Included
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#FAFAFA]/70">
            Every full detail appointment covers the following services from start to finish.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#1A1A1A] px-5 py-4"
              >
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
                <span className="text-sm font-medium text-[#FAFAFA]/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="border-t border-white/5 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center rounded-xl border border-[#C9A84C]/20 bg-[#1A1A1A] px-6 py-12 text-center sm:px-12">
            <p className="text-sm font-medium uppercase tracking-widest text-[#C9A84C]">
              Full Detail Package
            </p>
            <p className="mt-3 text-4xl font-bold text-[#FAFAFA] sm:text-5xl">
              Starting at $149
            </p>
            <p className="mt-3 max-w-lg text-[#FAFAFA]/60">
              Final pricing depends on vehicle size and condition. Contact us for an accurate
              quote tailored to your car, truck, or SUV.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="border-t border-white/5 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Our Full Detail Process
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#FAFAFA]/70">
            We follow a proven, step-by-step workflow to ensure consistent, showroom-quality
            results on every vehicle we touch.
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "We walk around your vehicle, note any existing damage, and identify areas that need extra attention.",
              },
              {
                step: "2",
                title: "Exterior Restoration",
                desc: "Hand wash, clay bar decontamination, machine polish, sealant, tire and wheel detail, plus glass cleaning.",
              },
              {
                step: "3",
                title: "Interior Deep Clean",
                desc: "Full vacuum, steam cleaning of upholstery, leather conditioning, dashboard detail, and odor elimination.",
              },
              {
                step: "4",
                title: "Finishing Touches",
                desc: "Engine bay degrease and dress, door jamb wipe-down, headlight cleaning, exhaust tip polish, and air freshener.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-lg border border-white/10 bg-[#1A1A1A] p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A84C]/10 text-sm font-bold text-[#C9A84C]">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#FAFAFA]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-white/5 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#FAFAFA]/70">
            Looking for something more specific? Explore our individual packages or upgrade
            to long-lasting ceramic protection.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICES.filter((s) =>
              ["exterior-detail", "interior-detail", "ceramic-coating"].includes(s.slug)
            ).map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-lg border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-[#C9A84C]/30"
              >
                <h3 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[#C9A84C]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">
                  {related.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#C9A84C]">
                  Starting at ${related.startingPrice}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="border-t border-white/5 bg-[#0A0A0A] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Full Detail FAQs
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#FAFAFA]/70">
            Common questions about our full car detail service in Overland Park.
          </p>
          <div className="mt-10 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for a Bumper-to-Bumper Transformation?"
        description="Book your full car detail in Overland Park today. We bring showroom-quality results directly to your driveway."
        buttonText="Book Your Full Detail"
      />
    </>
  );
}
