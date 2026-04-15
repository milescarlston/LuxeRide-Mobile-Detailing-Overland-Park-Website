interface GalleryItem {
  title: string;
  service: string;
  beforeAlt: string;
  afterAlt: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "BMW X5 Full Detail",
    service: "Full Detail",
    beforeAlt: "BMW X5 before full detail showing dirt and grime in Overland Park",
    afterAlt: "BMW X5 after full detail with showroom shine in Overland Park",
  },
  {
    title: "Tesla Model Y Ceramic Coating",
    service: "Ceramic Coating",
    beforeAlt: "Tesla Model Y before ceramic coating showing swirl marks",
    afterAlt: "Tesla Model Y after ceramic coating with hydrophobic finish",
  },
  {
    title: "Ford F-150 Interior Detail",
    service: "Interior Detail",
    beforeAlt: "Ford F-150 interior before detailing showing stains and debris",
    afterAlt: "Ford F-150 interior after detailing with clean surfaces",
  },
  {
    title: "Porsche 911 Paint Correction",
    service: "Paint Correction",
    beforeAlt: "Porsche 911 paint before correction showing scratches and swirls",
    afterAlt: "Porsche 911 paint after correction with flawless mirror finish",
  },
  {
    title: "Lexus RX Exterior Detail",
    service: "Exterior Detail",
    beforeAlt: "Lexus RX exterior before detail with water spots and oxidation",
    afterAlt: "Lexus RX exterior after detail with deep gloss finish",
  },
  {
    title: "Audi Q7 Headlight Restoration",
    service: "Headlight Restoration",
    beforeAlt: "Audi Q7 headlights before restoration showing yellowing and haze",
    afterAlt: "Audi Q7 headlights after restoration crystal clear",
  },
];

export default function BeforeAfterGallery({ limit }: { limit?: number }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A]"
        >
          <div className="grid grid-cols-2">
            {/* Before placeholder */}
            <div
              className="flex aspect-[4/3] items-center justify-center bg-[#2a2a2a]"
              role="img"
              aria-label={item.beforeAlt}
            >
              <div className="text-center">
                <span className="block text-xs font-semibold uppercase tracking-wider text-red-400/80">
                  Before
                </span>
                <svg className="mx-auto mt-1 h-8 w-8 text-[#FAFAFA]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z" />
                </svg>
              </div>
            </div>
            {/* After placeholder */}
            <div
              className="flex aspect-[4/3] items-center justify-center bg-[#1f1f1f]"
              role="img"
              aria-label={item.afterAlt}
            >
              <div className="text-center">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
                  After
                </span>
                <svg className="mx-auto mt-1 h-8 w-8 text-[#FAFAFA]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#FAFAFA]">{item.title}</h3>
            <span className="mt-1 inline-block rounded-full bg-[#C9A84C]/10 px-2.5 py-0.5 text-xs font-medium text-[#C9A84C]">
              {item.service}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
