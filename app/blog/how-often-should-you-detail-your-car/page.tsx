import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { BUSINESS, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";
import { articleSchema } from "@/lib/schema";

const slug = "how-often-should-you-detail-your-car";
const title = "How Often Should You Detail Your Car?";
const TITLE = "How Often Should You Detail Your Car? | LuxeRide Detailing Blog";
const DESCRIPTION =
  "Wondering how often to detail your car? It depends on your driving habits, environment, and vehicle. Here's a practical guide from Overland Park detailing pros.";
const PUBLISHED = "2024-12-15";
const MODIFIED = "2024-12-15";
const description = DESCRIPTION;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `/blog/${slug}`,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: [BUSINESS.name],
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

const jsonLd = articleSchema({
  title,
  description,
  slug,
  datePublished: "2024-12-15",
  dateModified: "2024-12-15",
  image: "/images/bmw-x5-trunk-after.jpg",
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

      {/* Hero / Article Header */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl lg:text-5xl">
              How Often Should You Detail Your Car?
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#4A4A4A]">
              <span>By LuxeRide Team</span>
              <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
              <time dateTime="2024-12-15">December 15, 2024</time>
              <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
              <span>6 min read</span>
            </div>
          </header>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F7F7F5] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-[#1C1C1C]">
              We get this question all the time from folks in Overland Park and
              around Kansas City:{" "}
              <strong>how often should I detail my car?</strong> There is no
              one-size-fits-all answer. It depends on where you park, how you
              drive, and what Kansas weather throws at you. But here is a
              straightforward breakdown so you can figure out what works for your
              situation.
            </p>

            {/* General recommendation */}
            <h2 className="mt-12 text-2xl font-bold text-[#1C1C1C]">
              The Short Answer: Every 4 to 6 Months
            </h2>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              For most people, a professional detail two or three times a year
              does the job. That keeps your paint protected, your interior clean,
              and your car looking good without overdoing it. If you want to see
              what a full session looks like, check out our{" "}
              <Link
                href="/services/full-detail"
                className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174a8a]"
              >
                full detail package
              </Link>
              .
            </p>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              That said, some cars need more attention and some need less. Let us
              walk through the biggest factors.
            </p>

            {/* Factors */}
            <h2 className="mt-12 text-2xl font-bold text-[#1C1C1C]">
              What Changes How Often You Should Detail
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-[#1C1C1C]">Where you park</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  If you park outside, you will want to detail more often. Your
                  car is soaking up UV rays, bird droppings, tree sap, and pollen
                  every single day. Garage parking? You can stretch the interval
                  out a bit.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-[#1C1C1C]">Your daily drive</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  Long highway commutes on I-435 or K-10 kick up road debris and
                  bug splatter. City driving around Overland Park means more brake
                  dust buildup. Either way, more miles means more grime.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-[#1C1C1C]">Your paint color</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  Here is the deal. Dark-colored cars show everything. Swirl
                  marks, dust, water spots. If you drive a black, navy, or dark
                  grey vehicle, every three to four months is a better target.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-[#1C1C1C]">Kids and pets</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  Crumbs, pet hair, juice spills, mystery stains. Sound familiar?
                  If your back seat sees a lot of action, consider adding a
                  standalone{" "}
                  <Link
                    href="/services/interior-detail"
                    className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174a8a]"
                  >
                    interior detail
                  </Link>{" "}
                  between your full sessions. It makes a huge difference.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-[#1C1C1C]">Kansas weather</h3>
                <p className="mt-2 text-[#4A4A4A]">
                  We do not get to ignore this one. Kansas City weather is tough
                  on cars. Hot summers, freezing winters, road salt, humidity, and
                  hail season all take their toll. More on that below.
                </p>
              </div>
            </div>

            {/* Seasonal */}
            <h2 className="mt-12 text-2xl font-bold text-[#1C1C1C]">
              A Seasonal Detailing Plan for Kansas City Drivers
            </h2>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              Living around KC means dealing with four very different seasons.
              Each one hits your car in a different way. Here is what we
              recommend:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#1C1C1C]">Spring</p>
                <p className="mt-2 text-sm text-[#4A4A4A]">
                  Pollen season is brutal here. It coats your car in a
                  yellow-green film almost overnight. Book an{" "}
                  <Link
                    href="/services/exterior-detail"
                    className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174a8a]"
                  >
                    exterior detail
                  </Link>{" "}
                  in early spring to wash off winter salt and get ahead of the
                  pollen.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#1C1C1C]">Summer</p>
                <p className="mt-2 text-sm text-[#4A4A4A]">
                  Kansas summers are hot. We are talking 95+ degrees for weeks at
                  a time. That UV exposure fades paint fast if it is not
                  protected. A full detail with sealant before summer starts is a
                  smart move.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#1C1C1C]">Fall</p>
                <p className="mt-2 text-sm text-[#4A4A4A]">
                  Falling leaves are not just annoying. They release acids that
                  can etch into your clear coat if they sit too long. A quick
                  detail in late fall preps your car for winter.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#1C1C1C]">Winter</p>
                <p className="mt-2 text-sm text-[#4A4A4A]">
                  Road salt is enemy number one. KDOT uses a lot of it, and that
                  brine eats away at paint, trim, and your undercarriage. Make
                  sure you have protection going into the cold months.
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-[#4A4A4A]">
              If you follow a three-detail rhythm (spring, pre-summer, late fall)
              you will cover most of what Kansas throws at your car.
            </p>
          </article>
        </div>
      </section>

      {/* Signs your car needs detailing */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1C1C1C]">
              5 Signs Your Car Needs a Detail Right Now
            </h2>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              Sometimes your car tells you before the calendar does. Keep an eye
              out for these:
            </p>

            <ol className="mt-6 space-y-4">
              <li className="flex gap-4 rounded-lg border border-gray-200 bg-[#F7F7F5] p-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#10B981] text-sm font-bold text-white">
                  1
                </span>
                <p className="text-[#4A4A4A]">
                  <strong className="text-[#1C1C1C]">Water stops beading on the paint.</strong>{" "}
                  That means your sealant or wax has worn off and your paint is
                  unprotected.
                </p>
              </li>
              <li className="flex gap-4 rounded-lg border border-gray-200 bg-[#F7F7F5] p-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#10B981] text-sm font-bold text-white">
                  2
                </span>
                <p className="text-[#4A4A4A]">
                  <strong className="text-[#1C1C1C]">The paint feels rough.</strong>{" "}
                  Run your hand across a clean section. If it feels gritty,
                  contaminants have bonded to the surface.
                </p>
              </li>
              <li className="flex gap-4 rounded-lg border border-gray-200 bg-[#F7F7F5] p-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#10B981] text-sm font-bold text-white">
                  3
                </span>
                <p className="text-[#4A4A4A]">
                  <strong className="text-[#1C1C1C]">You see swirl marks in sunlight.</strong>{" "}
                  Those fine scratches show up under direct sun and make your
                  paint look dull.
                </p>
              </li>
              <li className="flex gap-4 rounded-lg border border-gray-200 bg-[#F7F7F5] p-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#10B981] text-sm font-bold text-white">
                  4
                </span>
                <p className="text-[#4A4A4A]">
                  <strong className="text-[#1C1C1C]">Your interior smells or feels sticky.</strong>{" "}
                  If surfaces are tacky, dusty, or there is a lingering odor,
                  it is time for an{" "}
                  <Link
                    href="/services/interior-detail"
                    className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174a8a]"
                  >
                    interior detail
                  </Link>
                  .
                </p>
              </li>
              <li className="flex gap-4 rounded-lg border border-gray-200 bg-[#F7F7F5] p-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#10B981] text-sm font-bold text-white">
                  5
                </span>
                <p className="text-[#4A4A4A]">
                  <strong className="text-[#1C1C1C]">Leather or vinyl looks dried out.</strong>{" "}
                  Faded, cracking trim means the material is not getting the
                  conditioning it needs.
                </p>
              </li>
            </ol>
          </article>
        </div>
      </section>

      {/* Interior vs exterior */}
      <section className="bg-[#F7F7F5] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1C1C1C]">
              Interior vs. Exterior: Different Schedules?
            </h2>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              Yes. They are different and they can be on different schedules.
            </p>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              Your exterior takes a beating from the elements every day. Most
              people do well with an{" "}
              <Link
                href="/services/exterior-detail"
                className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174a8a]"
              >
                exterior detail
              </Link>{" "}
              every three to four months. For interiors, every four to six months
              is usually enough unless you have kids, pets, or allergies.
            </p>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              If you deal with seasonal allergies (and in Kansas City, who does
              not?), think about more frequent interior cleanings. Dust, pollen,
              and bacteria build up fast in your cabin air system and
              upholstery, especially from March through June.
            </p>

            {/* Ceramic coating */}
            <h2 className="mt-12 text-2xl font-bold text-[#1C1C1C]">
              Want to Detail Less Often? Get a Ceramic Coating
            </h2>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              If you want to stretch the time between details without leaving
              your paint unprotected, a{" "}
              <Link
                href="/services/ceramic-coating"
                className="text-[#1E5FAE] underline underline-offset-4 transition-colors hover:text-[#174a8a]"
              >
                ceramic coating
              </Link>{" "}
              is the way to go. It bonds to your paint and creates a tough,
              water-repelling layer that lasts two to five years.
            </p>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              With ceramic coating, a lot of our customers only need a full
              detail once or twice a year instead of three times. Dirt and
              grime have a much harder time sticking to the surface, so routine
              washes go faster too. Over time, it saves you both time and money
              compared to wax or sealant alone.
            </p>

            {/* Summary */}
            <h2 className="mt-12 text-2xl font-bold text-[#1C1C1C]">
              Find a Schedule That Works for You
            </h2>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              There is no magic number for how often to detail your car. A
              garage parker with ceramic coating and a short commute can go six
              months easy. Someone who parks outside, drives a black car, and
              commutes across KC every day might want to come in every three
              months.
            </p>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              The best thing you can do is pay attention to your car. When it
              starts looking or feeling off, that is your signal.
            </p>
            <p className="mt-4 leading-relaxed text-[#4A4A4A]">
              We offer flexible scheduling and come to your home or office
              across Overland Park, Leawood, Olathe, and the surrounding
              areas. Keeping up with a regular detailing schedule has never
              been easier.
            </p>

            {/* Related articles */}
            <div className="mt-16 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-[#1C1C1C]">Related Articles</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/blog/ceramic-coating-worth-it"
                    className="group flex items-center gap-2 text-[#1E5FAE] transition-colors hover:text-[#174a8a]"
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
        headline="Ready to Get Your Car Detailed?"
        description="Whether you need a one-time deep clean or want to set up a regular schedule, we come to you anywhere in Overland Park and the KC metro."
      />
    </>
  );
}
