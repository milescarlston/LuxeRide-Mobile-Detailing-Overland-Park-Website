import Link from "next/link";
import { PRICING_PLANS } from "@/lib/constants";

export default function PricingCards() {
  return (
    <section className="bg-[#F7F7F5] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#4A4A4A]">
            No hidden fees, no upsells. Pick your detail and add an exterior wash if you want the full treatment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                plan.popular
                  ? "border-[#1E5FAE] ring-2 ring-[#1E5FAE] shadow-md"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1E5FAE] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <div className="text-center">
                <h3 className="text-lg font-bold text-[#1E5FAE]">{plan.name}</h3>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-[#1C1C1C]">
                  {plan.price}
                </p>
                {plan.priceNote && (
                  <p className="mt-1 text-sm text-[#4A4A4A]">{plan.priceNote}</p>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
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
                        d="M9 12.75L11.25 15 15 9.75"
                      />
                    </svg>
                    <span className="text-sm text-[#1C1C1C]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-6 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-[#10B981] text-white hover:bg-[#059669]"
                    : "bg-[#1E5FAE] text-white hover:bg-[#164a8a]"
                }`}
              >
                Book Online
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
