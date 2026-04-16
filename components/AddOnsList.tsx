import type { AddOn } from "@/lib/constants";

export default function AddOnsList({ addOns }: { addOns: AddOn[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {addOns.map((addon) => (
        <div
          key={addon.name}
          className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3"
        >
          <span className="text-sm text-[#1C1C1C]">{addon.name}</span>
          <span className="ml-3 shrink-0 text-xs font-semibold text-[#1E5FAE]">
            starting at ${addon.price}
          </span>
        </div>
      ))}
    </div>
  );
}
