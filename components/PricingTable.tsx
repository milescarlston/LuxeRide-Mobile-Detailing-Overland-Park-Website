import Link from "next/link";
import type { VehicleTier, CoatingTier } from "@/lib/constants";

export function VehiclePricingTable({
  tiers,
  estimatedTime,
  popular,
}: {
  tiers: VehicleTier[];
  estimatedTime: string;
  popular?: boolean;
}) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-[#4A4A4A]">{tier.label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#1C1C1C]">
              ${tier.price}
            </p>
            <p className="mt-0.5 text-xs text-[#4A4A4A]">starting at</p>
            <p className="mt-2 text-xs text-[#4A4A4A]">{tier.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[#4A4A4A]">
          <span className="font-medium text-[#1C1C1C]">Estimated time:</span>{" "}
          {estimatedTime}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
        >
          Get a Free Quote
        </Link>
      </div>
      <p className="mt-4 text-sm text-[#4A4A4A]">
        Final pricing depends on your vehicle&apos;s size and condition. Contact
        us for an exact quote — no surprises.
      </p>
    </div>
  );
}

export function CoatingPricingTable({
  tiers,
  estimatedTime,
}: {
  tiers: CoatingTier[];
  estimatedTime: string;
}) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {tiers.map((tier, i) => (
          <div
            key={tier.label}
            className={`rounded-xl border bg-white p-5 text-center shadow-sm ${
              i === 2
                ? "border-[#1E5FAE] ring-2 ring-[#1E5FAE]"
                : "border-gray-200"
            }`}
          >
            {i === 2 && (
              <span className="mb-2 inline-block rounded-full bg-[#1E5FAE] px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                Best Value
              </span>
            )}
            <p className="text-sm font-medium text-[#4A4A4A]">{tier.label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-[#1C1C1C]">
              ${tier.price}
            </p>
            <p className="mt-0.5 text-xs text-[#4A4A4A]">starting at</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[#4A4A4A]">
          <span className="font-medium text-[#1C1C1C]">Estimated time:</span>{" "}
          {estimatedTime}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
        >
          Get a Free Quote
        </Link>
      </div>
      <p className="mt-4 text-sm text-[#4A4A4A]">
        Exact pricing depends on vehicle size and paint condition. We&apos;ll
        provide a custom quote after a quick inspection or phone consultation.
      </p>
    </div>
  );
}

export function HeadlightPricingTable({
  standalone,
  addon,
  estimatedTime,
}: {
  standalone: number;
  addon: number;
  estimatedTime: string;
}) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 sm:max-w-lg">
        <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
          <p className="text-sm font-medium text-[#4A4A4A]">Standalone</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-[#1C1C1C]">
            ${standalone}
          </p>
          <p className="mt-0.5 text-xs text-[#4A4A4A]">starting at</p>
          <p className="mt-1 text-xs text-[#4A4A4A]">Both headlights</p>
        </div>
        <div className="rounded-xl border border-[#10B981]/40 bg-[#10B981]/5 p-5 text-center shadow-sm">
          <p className="text-sm font-medium text-[#4A4A4A]">Add-on</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-[#1C1C1C]">
            ${addon}
          </p>
          <p className="mt-0.5 text-xs text-[#4A4A4A]">starting at</p>
          <p className="mt-1 text-xs text-[#4A4A4A]">
            With any detail package
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[#4A4A4A]">
          <span className="font-medium text-[#1C1C1C]">Estimated time:</span>{" "}
          {estimatedTime}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
        >
          Book Your Restoration
        </Link>
      </div>
    </div>
  );
}
