import Link from "next/link";
import { BOOKING_CTA_LABEL, BOOKING_URL, BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F7F7F5]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-[#1C1C1C]">
              <span className="text-[#1E5FAE]">Luxe</span>Ride
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#4A4A4A]">
              Professional mobile car detailing in {BUSINESS.address.city},{" "}
              {BUSINESS.address.state}. We come to your home or office.
            </p>
            {/* Social icons */}
            <div className="mt-4 flex gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#4A4A4A] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#4A4A4A] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#4A4A4A] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </a>
              <a
                href={BUSINESS.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#4A4A4A] transition-colors hover:border-[#1E5FAE] hover:text-[#1E5FAE]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433a.75.75 0 01-.96-.96l1.433-4.995a.75.75 0 011.393-.045l3.13 4.562c.15.22.15.51-.001.005zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]"
                >
                  {BOOKING_CTA_LABEL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#4A4A4A] transition-colors hover:text-[#1E5FAE]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Service Area */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
              Contact
            </h3>
            <address className="mt-4 space-y-2 not-italic">
              <p className="text-sm text-[#4A4A4A]">
                <a href={BUSINESS.phoneHref} className="font-semibold transition-colors hover:text-[#1E5FAE]">
                  {BUSINESS.phone}
                </a>
              </p>
              <p className="text-sm text-[#4A4A4A]">
                <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-[#1E5FAE]">
                  {BUSINESS.email}
                </a>
              </p>
              <p className="text-sm text-[#4A4A4A]">
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </p>
              <p className="text-sm text-[#4A4A4A]">{BUSINESS.hours}</p>
            </address>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#1E5FAE]">
              Service Area
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
              {SERVICE_AREAS.join(", ")}, and the greater Kansas City metro area.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8 text-center">
          <p className="text-sm text-[#4A4A4A]">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
