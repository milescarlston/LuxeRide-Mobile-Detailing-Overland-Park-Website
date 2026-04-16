"use client";

import { useState } from "react";
import { CONTACT_SERVICE_OPTIONS } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="rounded-xl border border-[#10B981]/30 bg-[#10B981]/5 p-8 text-center">
      <svg
        className="mx-auto h-12 w-12 text-[#10B981]"
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
      <h2 className="mt-4 text-xl font-semibold text-[#1C1C1C]">Thanks!</h2>
      <p className="mt-2 text-sm text-[#4A4A4A]">
        We got your request and will get back to you within a few hours.
      </p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-gray-400 outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-gray-400 outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-gray-400 outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
            placeholder="(913) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
            Vehicle Type
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-gray-400 outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
            placeholder="e.g. 2023 BMW X5"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
          >
            <option value="">Select a service</option>
            {CONTACT_SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-gray-400 outline-none transition-colors focus:border-[#1E5FAE] focus:ring-1 focus:ring-[#1E5FAE]"
          placeholder="Tell us about your vehicle or any specific concerns..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#10B981] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#059669] sm:w-auto"
      >
        Request a Free Quote
      </button>
    </form>
  );
}
