import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreaMap() {
  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#FAFAFA] sm:text-4xl">
            Serving the Greater Kansas City Metro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FAFAFA]/60">
            We bring premium mobile detailing directly to your home or office across the Kansas City metro area.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* City list */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_AREAS.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0A0A0A] px-4 py-3"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-[#C9A84C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-[#FAFAFA]/80">{city}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/5 px-4 py-3">
              <svg
                className="h-4 w-4 shrink-0 text-[#C9A84C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm font-medium text-[#C9A84C]">& More</span>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-white/10 bg-[#0A0A0A] lg:aspect-auto">
            {/* TODO: Replace with Google Maps embed: <iframe src="https://www.google.com/maps/embed?pb=..." /> */}
            <div className="text-center p-8">
              <svg
                className="mx-auto h-12 w-12 text-[#FAFAFA]/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
              <p className="mt-3 text-sm text-[#FAFAFA]/40">
                Interactive map coming soon
              </p>
              <p className="mt-1 text-xs text-[#FAFAFA]/30">
                Serving all of Johnson County &amp; the KC metro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
