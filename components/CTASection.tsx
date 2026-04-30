import { BOOKING_CTA_LABEL, BOOKING_URL, BUSINESS } from "@/lib/constants";

interface CTASectionProps {
  headline?: string;
  description?: string;
}

export default function CTASection({
  headline = "Ready to Get Your Car Detailed?",
  description = "Book your mobile detailing appointment today. We'll come to your home or office and have your car looking brand new.",
}: CTASectionProps) {
  return (
    <section className="bg-[#1E5FAE]">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {headline}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669]"
          >
            {BOOKING_CTA_LABEL}
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
