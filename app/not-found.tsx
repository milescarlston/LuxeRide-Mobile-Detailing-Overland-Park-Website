import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#1E5FAE]">
        404 - Page Not Found
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1C1C1C] sm:text-4xl">
        Looks Like You Took a Wrong Turn
      </h1>
      <p className="mt-3 max-w-md text-base text-[#4A4A4A]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us
        help you find your way back.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-7 py-3 text-sm font-semibold text-[#1C1C1C] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
        >
          Contact Us
        </Link>
      </div>

      <div className="mt-14 w-full max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#4A4A4A]">
          Popular Pages
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/services"
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-sm text-[#4A4A4A] shadow-sm transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
          >
            Our Services
          </Link>
          {SERVICES.slice(0, 3).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-sm text-[#4A4A4A] shadow-sm transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
            >
              {s.shortTitle}
            </Link>
          ))}
          <Link
            href="/gallery"
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-sm text-[#4A4A4A] shadow-sm transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-sm text-[#4A4A4A] shadow-sm transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
          >
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
