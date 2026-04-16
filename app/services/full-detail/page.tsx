import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { VehiclePricingTable } from "@/components/PricingTable";
import AddOnsList from "@/components/AddOnsList";
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
      "You get the works. Our full detail covers everything inside and out. On the exterior, that means a hand wash, clay bar, polish, and sealant. On the interior, we vacuum, steam clean, condition the leather, and eliminate odors. We also take care of the engine bay, door jambs, headlights, and exhaust tips. It is a true bumper-to-bumper clean.",
  },
  {
    question: "How long does a full detail take?",
    answer:
      "Most full details take between three and five hours. It depends on the size and condition of your vehicle. Bigger SUVs, trucks, or really dirty interiors can take a bit longer. We recommend setting aside a half day so we can do it right without rushing.",
  },
  {
    question: "How often should I get a full detail?",
    answer:
      "For most people around Overland Park, every four to six months works great. If you park outside, drive on gravel roads, or have kids and pets, every three months is a good idea. It keeps your car looking great and protects everything from long-term wear.",
  },
  {
    question: "Do you come to my home or office for full detailing?",
    answer:
      "Yes. We are fully mobile. We bring all of our equipment, water, and products right to your driveway, parking lot, or wherever works best for you in Overland Park and the surrounding KC metro. All we need is a regular parking space and access to your vehicle.",
  },
  {
    question: "Is the full detail worth it compared to just an exterior or interior detail?",
    answer:
      "It really is. The full detail gives you the best value because we take care of everything in one visit. You actually save money compared to booking our exterior and interior services separately. Plus you get extras like engine bay cleaning and door jamb detailing that are not part of the individual packages.",
  },
  {
    question: "How much does a full car detail cost in Overland Park?",
    answer:
      "Our full detail starts at $225 for sedans, $285 for SUVs and crossovers, and $325 for trucks, vans, and large SUVs. That is actually $25 to $35 less than booking our interior and exterior details separately, and you get extras like engine bay cleaning and door jamb detailing included.",
  },
  {
    question: "Why do prices vary by vehicle size?",
    answer:
      "Bigger vehicles mean more surface area inside and out, which takes more time, product, and labor. A full-size truck can take up to twice as long as a compact sedan. We price by size tier so you are only paying for the work your specific vehicle needs.",
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
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
              Full Car Detail in{" "}
              <span className="text-[#1E5FAE]">Overland Park, KS</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4A4A4A]">
              This is our most popular package. It combines everything from our
              exterior detail and interior detail into one appointment. Your whole car
              gets cleaned, polished, and protected from bumper to bumper. Starting at
              just{" "}
              <span className="font-semibold text-[#1C1C1C]">
                ${service.startingPrice}
              </span>
              , it is the easiest way to get your car looking like new again.
            </p>
          </div>
        </div>
      </section>

      {/* What is a full detail + Who should book */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                What Is a Full Car Detail?
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                A full detail goes way beyond a regular car wash. On the outside, we
                hand wash, clay bar, polish, and seal your paint so it has that
                deep, fresh shine again. Tires, wheels, trim, and glass all get
                individual attention. On the inside, every surface gets vacuumed,
                steam cleaned, and conditioned. Seats, carpet, dashboard, door
                panels, headliner. All of it.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                What really sets this apart is the stuff most places skip. We clean
                the engine bay, wipe down every door jamb, polish the exhaust tips,
                and restore cloudy headlights. When we are done, your car looks,
                feels, and smells like it just came off the lot.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
                Who Should Book a Full Detail?
              </h2>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                Getting ready to sell your car or trade it in? A full detail can
                make a real difference in how buyers see it. Just survived a long
                Kansas winter with all that salt and road grime? This takes care of
                everything in one shot. Or maybe you just want your car looking
                great for the weekend. That works too.
              </p>
              <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                We are fully mobile, so we come to you. Your driveway, your office
                parking lot, wherever is easiest. We serve Overland Park, Leawood,
                Olathe, Lenexa, and the rest of the KC metro. No need to drop off
                your car or rearrange your day. You do your thing while we handle
                the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo showcase */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Full Detail Results
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Inside and out, these vehicles got the full treatment.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/jeep-wrangler-exterior.png" alt="Jeep Wrangler Rubicon exterior after full detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/jeep-wrangler-interior-front.png" alt="Jeep Wrangler Rubicon red leather interior after detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-rear.png" alt="Range Rover Sport rear view after full exterior detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src="/images/range-rover-interior-rear.png" alt="Range Rover Sport rear seats after full interior detail" width={400} height={300} className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            What&rsquo;s Included
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#4A4A4A]">
            Every full detail covers the following from start to finish. No
            shortcuts, no skipped steps.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm"
              >
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
                <span className="text-sm font-medium text-[#1C1C1C]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
              What It Costs
            </h2>
            <span className="rounded-full bg-[#1E5FAE] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Most Popular
            </span>
          </div>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#4A4A4A]">
            Book together and save $25-$35 compared to separate interior and
            exterior details. Your price might be a bit higher if your car needs
            extra love — we&apos;ll always let you know upfront before we start.
          </p>
          <div className="mt-8">
            <VehiclePricingTable
              tiers={service.vehicleTiers!}
              estimatedTime={service.estimatedTime}
              popular
            />
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Our Full Detail Process
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#4A4A4A]">
            Here is how it works. Same steps every time so you get consistent
            results no matter what.
          </p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Inspection",
                desc: "We walk around your vehicle, check for any existing damage, and figure out which areas need extra attention.",
              },
              {
                step: "2",
                title: "Exterior Restoration",
                desc: "Hand wash, clay bar, machine polish, sealant, tire and wheel detail, and glass cleaning. The outside gets the full treatment.",
              },
              {
                step: "3",
                title: "Interior Deep Clean",
                desc: "Full vacuum, steam cleaning, leather conditioning, dashboard detail, and odor elimination. Every surface gets attention.",
              },
              {
                step: "4",
                title: "Finishing Touches",
                desc: "Engine bay cleaning, door jamb wipe-down, headlight restoration, exhaust tip polish, and a fresh air freshener to top it off.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1E5FAE]/10 text-sm font-bold text-[#1E5FAE]">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#1C1C1C]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Popular Add-Ons
          </h2>
          <p className="mt-4 max-w-2xl text-[#4A4A4A]">
            Customize your full detail with any of these extras.
          </p>
          <div className="mt-8">
            <AddOnsList addOns={service.addOns!} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-[#F7F7F5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#4A4A4A]">
            Need just the inside or outside done? Or want to add long-lasting
            ceramic protection? Check out these options.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {SERVICES.filter((s) =>
              ["exterior-detail", "interior-detail", "ceramic-coating"].includes(
                s.slug
              )
            ).map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-[#1E5FAE]/30"
              >
                <h3 className="text-lg font-semibold text-[#1C1C1C] group-hover:text-[#1E5FAE]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  {related.description}
                </p>
                <p className="mt-4 text-sm font-medium text-[#1E5FAE]">
                  Starting at ${related.startingPrice}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Full Detail FAQs
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#4A4A4A]">
            Common questions about our full car detail service in Overland Park.
          </p>
          <div className="mt-10 max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready for a Complete Clean?"
        description="Book your full car detail in Overland Park today. We come to you and take care of everything from bumper to bumper."
        buttonText="Book Your Full Detail"
      />
    </>
  );
}
