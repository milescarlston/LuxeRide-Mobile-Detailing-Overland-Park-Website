import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreaMap() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1C1C1C] sm:text-3xl">
            We Serve the Greater Kansas City Area
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[#4A4A4A]">
            We come to your home or office anywhere in the KC metro. Here are the areas we cover most.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* City list */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SERVICE_AREAS.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-[#1E5FAE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm font-medium text-[#1C1C1C]">{city}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-lg border border-[#1E5FAE]/30 bg-[#1E5FAE]/5 px-4 py-3">
              <svg
                className="h-4 w-4 shrink-0 text-[#1E5FAE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm font-medium text-[#1E5FAE]">& More</span>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-gray-200 bg-gray-50 lg:aspect-auto">
            {/* TODO: Replace with Google Maps embed: <iframe src="https://www.google.com/maps/embed?pb=..." /> */}
            <div className="p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
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
              <p className="mt-3 text-sm text-[#4A4A4A]">
                Interactive map coming soon
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Serving all of Johnson County &amp; the KC metro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
