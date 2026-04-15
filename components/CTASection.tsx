import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  headline = "Ready for a Showroom-Quality Detail?",
  description = "Book your mobile detailing appointment today and experience the LuxeRide difference — premium results, delivered to your door.",
  buttonText = "Book Your Detail",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A]">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#FAFAFA]/60">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-block rounded-md bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
