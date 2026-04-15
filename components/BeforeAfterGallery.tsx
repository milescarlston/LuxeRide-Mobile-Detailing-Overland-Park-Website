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
    beforeAlt: "BMW X5 before full detail showing dirt and grime in customer driveway Overland Park",
    afterAlt: "BMW X5 after full detail looking clean and shiny in customer driveway Overland Park",
  },
  {
    title: "Tesla Model Y Ceramic Coating",
    service: "Ceramic Coating",
    beforeAlt: "Tesla Model Y before ceramic coating with swirl marks and water spots",
    afterAlt: "Tesla Model Y after ceramic coating with water beading on the surface",
  },
  {
    title: "Ford F-150 Interior Detail",
    service: "Interior Detail",
    beforeAlt: "Ford F-150 interior before detailing with stains and debris on seats",
    afterAlt: "Ford F-150 interior after detailing with clean seats and fresh surfaces",
  },
  {
    title: "Honda Accord Exterior Detail",
    service: "Exterior Detail",
    beforeAlt: "Honda Accord exterior before detail with water spots and dull paint",
    afterAlt: "Honda Accord exterior after detail with glossy clean finish",
  },
  {
    title: "Chevy Tahoe Full Detail",
    service: "Full Detail",
    beforeAlt: "Chevy Tahoe before full detail showing muddy wheels and dirty paint",
    afterAlt: "Chevy Tahoe after full detail looking brand new in driveway",
  },
  {
    title: "Toyota Camry Headlight Restoration",
    service: "Headlight Restoration",
    beforeAlt: "Toyota Camry headlights before restoration showing yellowing and haze",
    afterAlt: "Toyota Camry headlights after restoration crystal clear",
  },
];

export default function BeforeAfterGallery({ limit }: { limit?: number }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="grid grid-cols-2">
            {/* Before placeholder */}
            <div
              className="flex aspect-[4/3] items-center justify-center bg-gray-100"
              role="img"
              aria-label={item.beforeAlt}
            >
              <div className="text-center">
                <span className="block text-xs font-semibold uppercase tracking-wider text-red-500">
                  Before
                </span>
                <svg className="mx-auto mt-1 h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z" />
                </svg>
              </div>
            </div>
            {/* After placeholder */}
            <div
              className="flex aspect-[4/3] items-center justify-center bg-gray-50"
              role="img"
              aria-label={item.afterAlt}
            >
              <div className="text-center">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#10B981]">
                  After
                </span>
                <svg className="mx-auto mt-1 h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#1C1C1C]">{item.title}</h3>
            <span className="mt-1 inline-block rounded-full bg-[#1E5FAE]/10 px-2.5 py-0.5 text-xs font-medium text-[#1E5FAE]">
              {item.service}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
