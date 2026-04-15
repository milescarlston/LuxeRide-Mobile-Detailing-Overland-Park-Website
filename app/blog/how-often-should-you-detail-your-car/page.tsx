import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";
import { articleSchema } from "@/lib/schema";

const title = "How Often Should You Detail Your Car?";
const description =
  "Learn how often to detail your car based on climate, driving habits, and vehicle needs. Expert tips from Overland Park's trusted mobile detailer.";
const slug = "how-often-should-you-detail-your-car";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    title: `${title} | ${BUSINESS.name}`,
    description,
    url: `/blog/${slug}`,
  },
};

const jsonLd = articleSchema({
  title,
  description,
  slug,
  datePublished: "2024-12-15",
  dateModified: "2024-12-15",
  author: "LuxeRide Team",
});

export default function HowOftenDetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: "How Often Should You Detail Your Car?", href: `/blog/${slug}` },
        ]}
      />

      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Article header */}
          <header className="mx-auto max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              How Often Should You Detail Your Car?
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#FAFAFA]/50">
              <span>By LuxeRide Team</span>
              <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
              <time dateTime="2024-12-15">December 15, 2024</time>
              <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
              <span>6 min read</span>
            </div>
          </header>

          {/* Article body */}
          <article className="prose-invert mx-auto mt-12 max-w-3xl">
            <p className="text-lg leading-relaxed text-[#FAFAFA]/80">
              One of the most common questions we hear from vehicle owners across
              Overland Park and the greater Kansas City area is simple:{" "}
              <strong>how often should I detail my car?</strong> The answer depends on
              several factors, but getting the cadence right is one of the most effective
              things you can do to preserve your vehicle&apos;s appearance and resale
              value.
            </p>

            {/* General recommendation */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              The General Rule: Every 4 to 6 Months
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              For most drivers, a professional detail every four to six months strikes
              the right balance between protection and cost. That translates to roughly
              two or three full details per year. This schedule keeps your paint sealed
              against contaminants, your interior free of embedded grime, and your
              vehicle looking sharp year-round. If you&apos;re interested in what a
              complete session covers, take a look at our{" "}
              <Link
                href="/services/full-detail"
                className="text-[#C9A84C] underline decoration-[#C9A84C]/30 underline-offset-4 transition-colors hover:text-[#b8973f]"
              >
                full detail package
              </Link>
              .
            </p>

            {/* Factors */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              Factors That Affect How Often to Detail Your Car
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              Not every vehicle has the same needs. Here are the key variables that
              should influence your detailing frequency:
            </p>
            <ul className="mt-4 space-y-3 text-[#FAFAFA]/70">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>
                  <strong className="text-[#FAFAFA]">Parking situation.</strong>{" "}
                  Vehicles that sit outdoors all day are exposed to UV rays, bird
                  droppings, tree sap, and pollen. If your car lives in a garage, you
                  can comfortably extend the interval.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>
                  <strong className="text-[#FAFAFA]">Daily driving habits.</strong>{" "}
                  Long highway commutes kick up road debris, while frequent short trips
                  in the city expose your car to brake dust and exhaust buildup.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>
                  <strong className="text-[#FAFAFA]">Paint color.</strong>{" "}
                  Dark-colored vehicles show swirl marks, dust, and water spots more
                  readily. Owners of black, navy, or dark grey cars often benefit from
                  detailing every three to four months.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>
                  <strong className="text-[#FAFAFA]">Kids and pets.</strong>{" "}
                  Interior surfaces take a beating when passengers leave behind crumbs,
                  pet hair, and spills. In these cases, a standalone{" "}
                  <Link
                    href="/services/interior-detail"
                    className="text-[#C9A84C] underline decoration-[#C9A84C]/30 underline-offset-4 transition-colors hover:text-[#b8973f]"
                  >
                    interior detail
                  </Link>{" "}
                  between full sessions makes a real difference.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>
                  <strong className="text-[#FAFAFA]">Local climate.</strong>{" "}
                  Temperature swings, road salt, humidity, and intense summer heat all
                  accelerate paint degradation. This is especially relevant for drivers
                  in the Kansas City metro.
                </span>
              </li>
            </ul>

            {/* Seasonal */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              Seasonal Detailing Tips for Kansas City Drivers
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              Living in the KC area means dealing with four distinct seasons, and each
              one brings its own challenges. In spring, pollen coats every surface and
              rain leaves behind mineral deposits. Summer delivers intense UV exposure
              and high humidity that can oxidize unprotected paint. Fall brings falling
              leaves whose acids etch into clear coat if they sit too long. And
              winter is the harshest season of all, with road salt and brine eating away
              at paint, trim, and undercarriage components.
            </p>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              A practical schedule for Kansas drivers: book an{" "}
              <Link
                href="/services/exterior-detail"
                className="text-[#C9A84C] underline decoration-[#C9A84C]/30 underline-offset-4 transition-colors hover:text-[#b8973f]"
              >
                exterior detail
              </Link>{" "}
              in early spring to remove winter salt buildup, a full detail before summer
              to add UV protection, and another session in late fall to prepare for the
              cold months ahead. That three-detail rhythm covers most vehicles well.
            </p>

            {/* Signs your car needs detailing */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              Signs Your Car Needs Detailing Now
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              Sometimes your vehicle tells you it&apos;s time before the calendar does.
              Watch for these indicators:
            </p>
            <ul className="mt-4 space-y-3 text-[#FAFAFA]/70">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>Water no longer beads on the paint surface, meaning your sealant has worn off.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>The paint feels rough or gritty when you run your hand across it.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>Visible swirl marks or light scratches appear under direct sunlight.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>Interior surfaces feel sticky, dusty, or carry a lingering odor.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                <span>Leather or vinyl trim looks faded or dried out.</span>
              </li>
            </ul>

            {/* Interior vs exterior */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              Interior vs. Exterior: Do They Need Different Schedules?
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              Yes. Your exterior is constantly exposed to environmental contaminants and
              generally needs attention more frequently. Most people benefit from an
              exterior wash and detail every three to four months, while an interior
              detail every four to six months keeps things comfortable and sanitary.
            </p>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              If you have allergies or spend a lot of time in your vehicle, consider
              more frequent interior cleanings. Dust, pollen, and bacteria accumulate
              quickly in cabin air systems and upholstery, especially during Kansas
              City&apos;s allergy-heavy spring season.
            </p>

            {/* Ceramic coating */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              How Ceramic Coating Reduces Detailing Frequency
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              If you want to detail your car less often without sacrificing protection, a{" "}
              <Link
                href="/services/ceramic-coating"
                className="text-[#C9A84C] underline decoration-[#C9A84C]/30 underline-offset-4 transition-colors hover:text-[#b8973f]"
              >
                ceramic coating
              </Link>{" "}
              is the smartest investment you can make. This nano-ceramic layer bonds to
              your paint and creates a hydrophobic barrier that repels water, dirt, and
              UV rays for two to five years.
            </p>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              With a quality ceramic coating applied, many owners only need a full
              detail once or twice a year instead of three times. Routine maintenance
              washes become faster and more effective because contaminants have a much
              harder time bonding to the coated surface. Over the life of the coating,
              you save both time and money compared to relying on traditional wax or
              sealant alone.
            </p>

            {/* Summary */}
            <h2 className="mt-12 text-2xl font-bold text-[#FAFAFA]">
              Build a Schedule That Works for You
            </h2>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              There is no single answer for how often to detail your car. A driver who
              parks in a garage, has ceramic coating, and avoids long commutes can
              comfortably go six months between details. Someone who parks outside, has
              dark paint, and drives daily through Kansas City traffic may want to come
              in every three months. The key is paying attention to your vehicle&apos;s
              condition and adjusting accordingly.
            </p>
            <p className="mt-4 leading-relaxed text-[#FAFAFA]/70">
              At LuxeRide, we offer flexible scheduling and mobile convenience across
              Overland Park, Leawood, Olathe, and the surrounding areas. We come to your
              home or office, so keeping up with a regular detailing schedule has never
              been easier.
            </p>

            {/* Related articles */}
            <div className="mt-16 rounded-xl border border-white/10 bg-[#1A1A1A] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#FAFAFA]">Related Articles</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/blog/ceramic-coating-worth-it"
                    className="group flex items-center gap-2 text-[#C9A84C] transition-colors hover:text-[#b8973f]"
                  >
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    Is Ceramic Coating Worth It? A Detailed Breakdown
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <CTASection
        headline="Keep Your Vehicle Looking Its Best"
        description="Whether you need a one-time refresh or a regular maintenance plan, LuxeRide brings showroom-quality detailing directly to you in Overland Park and beyond."
      />
    </>
  );
}
