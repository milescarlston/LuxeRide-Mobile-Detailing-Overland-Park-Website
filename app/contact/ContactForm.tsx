"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="rounded-xl border border-[#C9A84C]/30 bg-[#C9A84C]/5 p-8 text-center">
      <svg
        className="mx-auto h-12 w-12 text-[#C9A84C]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="mt-4 text-xl font-semibold text-[#FAFAFA]">Thank You!</h2>
      <p className="mt-2 text-sm text-[#FAFAFA]/60">
        We&apos;ve received your request and will get back to you within a few hours.
      </p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
            Full Name <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#FAFAFA]/30 outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
            Email <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#FAFAFA]/30 outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
            Phone Number <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#FAFAFA]/30 outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
            placeholder="(913) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
            Vehicle Type
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#FAFAFA]/30 outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
            placeholder="e.g. 2023 BMW X5"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Not sure / Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#FAFAFA]/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#FAFAFA]/30 outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          placeholder="Tell us about your vehicle or any specific concerns..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#C9A84C] px-8 py-3.5 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#b8973f] sm:w-auto"
      >
        Request a Free Quote
      </button>
    </form>
  );
}
