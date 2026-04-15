import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-[#0A0A0A] px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A84C]">
        404 — Page Not Found
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-playfair-display)] text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
        Looks Like You Took a Wrong Turn
      </h1>
      <p className="mt-4 max-w-md text-lg text-[#FAFAFA]/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us
        help you find your way back.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-[#C9A84C] px-8 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-3 text-sm font-semibold text-[#FAFAFA] transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
        >
          Contact Us
        </Link>
      </div>

      <div className="mt-16 w-full max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#FAFAFA]/40">
          Popular Pages
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/services"
            className="rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-left text-sm text-[#FAFAFA]/70 transition-colors hover:border-[#C9A84C]/30 hover:text-[#C9A84C]"
          >
            Our Services
          </Link>
          {SERVICES.slice(0, 3).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-left text-sm text-[#FAFAFA]/70 transition-colors hover:border-[#C9A84C]/30 hover:text-[#C9A84C]"
            >
              {s.shortTitle}
            </Link>
          ))}
          <Link
            href="/gallery"
            className="rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-left text-sm text-[#FAFAFA]/70 transition-colors hover:border-[#C9A84C]/30 hover:text-[#C9A84C]"
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-left text-sm text-[#FAFAFA]/70 transition-colors hover:border-[#C9A84C]/30 hover:text-[#C9A84C]"
          >
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
