import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS, OG_IMAGES, OG_IMAGE_URL } from "@/lib/constants";

const TITLE = "Car Detailing Tips & Guides | LuxeRide Mobile Detailing Blog";
const DESCRIPTION =
  "Helpful tips on car care, detailing, ceramic coating, and keeping your vehicle looking its best in Overland Park. Expert advice from LuxeRide Mobile Detailing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
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

const posts = [
  {
    slug: "how-often-should-you-detail-your-car",
    title: "How Often Should You Detail Your Car?",
    excerpt:
      "The short answer: every 4-6 months for most people. But it depends on how you drive, where you park, and what you care about. Here's a breakdown.",
    date: "2024-12-15",
    readingTime: "6 min read",
    author: "LuxeRide Team",
    category: "Car Care Tips",
  },
  {
    slug: "ceramic-coating-worth-it",
    title: "Is Ceramic Coating Worth It? An Honest Breakdown",
    excerpt:
      "We break down the cost, the real benefits, what it won't do, and how long it actually lasts so you can decide if ceramic coating makes sense for your car.",
    date: "2024-11-28",
    readingTime: "7 min read",
    author: "LuxeRide Team",
    category: "Ceramic Coating",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
              Detailing Tips &amp; Guides
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4A4A]">
              Practical advice and honest answers from the LuxeRide team. We want to help
              you keep your car looking great between professional details.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-[#1E5FAE]/30 hover:shadow-md"
              >
                {/* Image placeholder */}
                <div className="flex aspect-[16/9] items-center justify-center bg-gray-100">
                  <svg
                    className="h-10 w-10 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z"
                    />
                  </svg>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-[#4A4A4A]">
                    <span className="rounded-full bg-[#1E5FAE]/10 px-2.5 py-0.5 font-medium text-[#1E5FAE]">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-[#1C1C1C] transition-colors group-hover:text-[#1E5FAE]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4A4A4A]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-medium text-[#1E5FAE] transition-colors hover:text-[#164a8a]"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
