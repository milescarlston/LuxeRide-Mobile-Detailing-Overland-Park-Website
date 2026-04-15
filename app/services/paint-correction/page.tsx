import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { serviceSchema, faqSchema } from "@/lib/schema";

const service = SERVICES.find((s) => s.slug === "paint-correction")!;

export const metadata: Metadata = {
  title: "Paint Correction Kansas City",
  description:
    "Expert paint correction in Kansas City safely removes swirl marks, scratches & oxidation through multi-stage machine polishing. Book an appointment today!",
  alternates: { canonical: "/services/paint-correction" },
  openGraph: {
    title: `Paint Correction Kansas City | ${BUSINESS.name}`,
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches, and oxidation. Serving Overland Park, Leawood, Olathe & the KC metro.",
    url: "/services/paint-correction",
  },
};

const faqs = [
  {
    question: "What is paint correction?",
    answer:
      "Paint correction is a professional detailing process that uses machine polishing with specialized compounds and pads to permanently remove surface defects from your vehicle's clear coat. Unlike waxing or glazing, which temporarily mask imperfections, paint correction physically levels the clear coat to eliminate swirl marks, scratches, water spots, and oxidation.",
  },
  {
    question: "How long does paint correction take?",
    answer:
      "A full multi-stage paint correction typically takes between 6 and 12 hours depending on the size of the vehicle, the severity of the defects, and the number of polishing stages required. Single-stage corrections can often be completed in 3 to 5 hours. We never rush the process because achieving flawless results requires patience and precision.",
  },
  {
    question:
      "What is the difference between single-stage and multi-stage paint correction?",
    answer:
      "Single-stage correction uses one polishing step to remove light swirl marks and minor imperfections, improving the paint's clarity by roughly 70 to 80 percent. Multi-stage correction involves two or more polishing steps with progressively finer compounds and pads, targeting deeper scratches and heavier defects for up to 95 percent or greater defect removal. We assess your paint and recommend the appropriate level during our inspection.",
  },
  {
    question: "Will paint correction damage my clear coat?",
    answer:
      "When performed by a trained technician, paint correction is completely safe. We use a paint depth gauge before and throughout the process to measure your clear coat thickness and ensure we never remove more material than necessary. This precision approach protects the long-term integrity of your factory paint while still achieving dramatic results.",
  },
  {
    question: "How long do paint correction results last?",
    answer:
      "The results of paint correction are permanent because the defects are physically removed from the clear coat rather than filled or hidden. However, new swirl marks and scratches can develop over time from improper washing or environmental exposure. We recommend pairing paint correction with a ceramic coating or paint sealant to protect the finish and keep your vehicle looking its best for years.",
  },
];

export default function PaintCorrectionPage() {
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
          { name: "Paint Correction", href: "/services/paint-correction" },
        ]}
      />

      {/* Hero / Intro */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Paint Correction in Kansas City &amp; Overland Park
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Over time, every vehicle accumulates surface imperfections that dull the
              paint and hide its true depth. Professional paint correction from{" "}
              {BUSINESS.shortName} restores your finish to better-than-new condition
              using multi-stage machine polishing techniques trusted by enthusiasts and
              dealerships across the Kansas City metro.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Paint Correction */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              What Is Paint Correction?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Paint correction is the art and science of removing imperfections from a
              vehicle&apos;s clear coat through controlled machine polishing. Using
              dual-action and rotary polishers paired with specialized cutting compounds
              and finishing polishes, our technicians systematically work through each
              panel to eliminate defects at the microscopic level. The result is a
              mirror-like finish with incredible depth and clarity that simply cannot be
              achieved with hand polishing or off-the-shelf products.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Unlike a quick buff at a car wash, true paint correction Kansas City
              enthusiasts rely on addresses the root cause of dull, hazy paint. We
              measure clear coat thickness with a paint depth gauge before touching a
              polisher to your vehicle, ensuring the process is safe and that every
              defect is targeted with the right combination of pad and compound.
            </p>
          </div>
        </div>
      </section>

      {/* Defects We Fix */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Defects We Remove
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Our paint correction process targets a wide range of surface defects that
              accumulate through everyday driving, automatic car washes, and
              environmental exposure. Common issues we correct include:
            </p>
            <ul className="mt-6 space-y-3 text-base text-[#FAFAFA]/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A84C]">&#x2022;</span>
                <span>
                  <strong className="text-[#FAFAFA]">Swirl marks</strong> &mdash; circular
                  micro-scratches caused by improper washing and drying techniques
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A84C]">&#x2022;</span>
                <span>
                  <strong className="text-[#FAFAFA]">Light scratches</strong> &mdash;
                  surface-level marks from brushes, keys, fingernails, and road debris
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A84C]">&#x2022;</span>
                <span>
                  <strong className="text-[#FAFAFA]">Oxidation</strong> &mdash; faded,
                  chalky paint caused by prolonged UV exposure and neglect
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A84C]">&#x2022;</span>
                <span>
                  <strong className="text-[#FAFAFA]">Water spots</strong> &mdash; mineral
                  deposits etched into the clear coat from hard water and sprinklers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#C9A84C]">&#x2022;</span>
                <span>
                  <strong className="text-[#FAFAFA]">Holograms &amp; buffer trails</strong>{" "}
                  &mdash; marks left by inexperienced polishing or automatic car washes
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Our Paint Correction Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Every paint correction begins with a thorough hand wash and clay bar
              decontamination to remove bonded contaminants that could interfere with the
              polishing process. We then perform a detailed paint inspection under
              high-intensity LED lighting and take paint depth gauge readings across
              every panel to map the condition of your clear coat.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              From there, we select the appropriate combination of polishing pads and
              compounds for each stage. A single-stage correction addresses lighter
              defects and general haziness, while a multi-stage correction builds
              progressively from an aggressive cutting compound to a fine finishing
              polish. After the final polishing stage, we apply a paint sealant or
              recommend a ceramic coating to lock in the results and protect your freshly
              corrected finish against future damage.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is Paint Correction For */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Who Benefits from Paint Correction?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAFAFA]/70">
              Paint correction is ideal for anyone who wants their vehicle to look its
              absolute best. Whether you are preparing a car for sale and want to
              maximize its resale value, getting a new vehicle ready for ceramic coating
              protection, or simply a proud owner who appreciates a flawless finish,
              professional paint correction delivers transformative results. It is also
              the essential first step before applying any long-term coating, because
              sealing imperfect paint only preserves those imperfections underneath the
              coating layer.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included + Pricing */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Features */}
            <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA]">
                What&apos;s Included
              </h2>
              <ul className="mt-6 space-y-4">
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
                    <span className="text-base text-[#FAFAFA]/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Callout */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1A1A1A] p-8 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-[#C9A84C]">
                Starting at
              </p>
              <p className="mt-2 text-5xl font-bold text-[#FAFAFA]">$299</p>
              <p className="mt-2 text-sm text-[#FAFAFA]/50">
                Price varies by vehicle size &amp; condition
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-md bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
            Related Services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                slug: "ceramic-coating",
                title: "Ceramic Coating",
                desc: "Lock in your paint correction results with long-lasting nano-ceramic protection.",
              },
              {
                slug: "exterior-detail",
                title: "Exterior Detail",
                desc: "A thorough hand wash, clay bar treatment, and sealant for ongoing maintenance.",
              },
              {
                slug: "full-detail",
                title: "Full Detail Package",
                desc: "The complete interior and exterior transformation for a bumper-to-bumper refresh.",
              },
            ].map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-xl border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-[#C9A84C]/40"
              >
                <h3 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[#C9A84C]">
                  {related.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">
                  {related.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#FAFAFA] sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Reveal Your Paint's True Potential?"
        description="Schedule your paint correction appointment today. We bring showroom-quality polishing directly to your driveway in Overland Park and the greater Kansas City area."
        buttonText="Book Your Paint Correction"
      />
    </>
  );
}
