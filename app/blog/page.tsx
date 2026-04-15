import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Car Detailing Tips & Guides",
  description:
    "Expert car detailing tips, guides, and insights from LuxeRide Mobile Detailing in Overland Park, KS. Learn how to keep your vehicle looking its best.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${BUSINESS.name}`,
    description:
      "Expert car detailing tips, guides, and insights from the LuxeRide team.",
    url: "/blog",
  },
};

const posts = [
  {
    slug: "how-often-should-you-detail-your-car",
    title: "How Often Should You Detail Your Car?",
    excerpt:
      "Find out the ideal detailing schedule for your vehicle based on how you drive, where you park, and the results you want to maintain.",
    date: "2024-12-15",
    readingTime: "6 min read",
    author: "LuxeRide Team",
    category: "Car Care Tips",
  },
  {
    slug: "ceramic-coating-worth-it",
    title: "Is Ceramic Coating Worth It? A Detailed Breakdown",
    excerpt:
      "We break down the cost, benefits, longevity, and real-world performance of ceramic coating so you can decide if it's right for your vehicle.",
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

      <section className="bg-[#0A0A0A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl lg:text-5xl">
              Detailing Tips &amp; Guides
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#FAFAFA]/70">
              Practical advice, product insights, and expert knowledge from the LuxeRide
              team to help you keep your vehicle looking its best between professional
              details.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] transition-all hover:border-[#C9A84C]/30"
              >
                {/* Image placeholder */}
                <div className="flex aspect-[16/9] items-center justify-center bg-[#2a2a2a]">
                  <svg
                    className="h-10 w-10 text-[#FAFAFA]/15"
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
                  <div className="flex items-center gap-3 text-xs text-[#FAFAFA]/50">
                    <span className="rounded-full bg-[#C9A84C]/10 px-2.5 py-0.5 font-medium text-[#C9A84C]">
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
                  <h2 className="mt-3 text-lg font-semibold text-[#FAFAFA] transition-colors group-hover:text-[#C9A84C]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#FAFAFA]/60">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-medium text-[#C9A84C] transition-colors hover:text-[#b8973f]"
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
