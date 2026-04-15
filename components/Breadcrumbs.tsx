import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(allItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="border-b border-white/5 bg-[#0A0A0A]">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm sm:px-6 lg:px-8">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && (
                <svg
                  className="h-3.5 w-3.5 text-[#FAFAFA]/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {i === allItems.length - 1 ? (
                <span className="text-[#C9A84C]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#FAFAFA]/50 transition-colors hover:text-[#FAFAFA]/80"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
