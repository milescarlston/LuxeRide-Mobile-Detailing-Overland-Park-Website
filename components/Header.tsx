"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="LuxeRide home">
          <span className="text-xl font-bold tracking-tight text-[#FAFAFA] sm:text-2xl">
            <span className="text-[#C9A84C]">Luxe</span>Ride
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            "children" in link ? (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#FAFAFA]/80 transition-colors hover:text-[#C9A84C]"
                >
                  {link.label}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <ul className="invisible absolute left-0 top-full mt-2 w-56 rounded-lg border border-white/10 bg-[#1A1A1A] py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#FAFAFA]/70 transition-colors hover:bg-white/5 hover:text-[#C9A84C]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#FAFAFA]/80 transition-colors hover:text-[#C9A84C]"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-md bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f] sm:inline-block"
          >
            Book Now
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#FAFAFA]/80 transition-colors hover:text-[#C9A84C] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0A0A0A] lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) =>
              "children" in link ? (
                <li key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-[#FAFAFA]/80"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <ul className="ml-4 space-y-1 border-l border-white/10 pl-4">
                      <li>
                        <Link
                          href={link.href}
                          className="block py-1.5 text-sm text-[#FAFAFA]/60 transition-colors hover:text-[#C9A84C]"
                          onClick={() => setMobileOpen(false)}
                        >
                          All Services
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-sm text-[#FAFAFA]/60 transition-colors hover:text-[#C9A84C]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-medium text-[#FAFAFA]/80 transition-colors hover:text-[#C9A84C]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-md bg-[#C9A84C] px-4 py-2.5 text-center text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f]"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
