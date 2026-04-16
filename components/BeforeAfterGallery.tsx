import Image from "next/image";

interface GalleryItem {
  title: string;
  service: string;
  before?: { src: string; alt: string };
  after?: { src: string; alt: string };
  photos?: { src: string; alt: string }[];
}

const galleryItems: GalleryItem[] = [
  {
    title: "BMW X5 Trunk Carpet Cleaning",
    service: "Interior Detail",
    before: {
      src: "/images/bmw-x5-trunk-before.jpg",
      alt: "BMW X5 trunk carpet before detailing showing heavy dirt and stains",
    },
    after: {
      src: "/images/bmw-x5-trunk-after.jpg",
      alt: "BMW X5 trunk carpet after professional extraction cleaning with fresh lines",
    },
  },
  {
    title: "Chevy Silverado Rear Seat Cleaning",
    service: "Interior Detail",
    before: {
      src: "/images/silverado-rear-before.png",
      alt: "Chevy Silverado rear seat before detailing with dirt and stains on cloth seats",
    },
    after: {
      src: "/images/silverado-rear-after.png",
      alt: "Chevy Silverado rear seat after professional interior detailing with clean cloth and carpet",
    },
  },
  {
    title: "Jeep Wrangler Rubicon Full Detail",
    service: "Full Detail",
    photos: [
      {
        src: "/images/jeep-wrangler-exterior.png",
        alt: "Jeep Wrangler Rubicon exterior after full detail with gleaming paint and bronze wheels",
      },
      {
        src: "/images/jeep-wrangler-interior-front.png",
        alt: "Jeep Wrangler Rubicon interior after detail showing clean red leather seats",
      },
    ],
  },
  {
    title: "Ram 3500 Dually Exterior & Interior",
    service: "Full Detail",
    photos: [
      {
        src: "/images/ram-3500-exterior.png",
        alt: "White Ram 3500 dually truck after exterior detail with polished chrome wheels",
      },
      {
        src: "/images/ram-3500-interior.png",
        alt: "Ram 3500 interior after detail showing clean tan leather seats and fresh carpet",
      },
    ],
  },
  {
    title: "Range Rover Sport Full Detail",
    service: "Full Detail",
    photos: [
      {
        src: "/images/range-rover-front.png",
        alt: "Dark green Range Rover Sport front view after full exterior detail with glossy paint",
      },
      {
        src: "/images/range-rover-interior-dash.png",
        alt: "Range Rover Sport interior after detail showing clean steering wheel and dashboard",
      },
    ],
  },
  {
    title: "Ram 3500 Chrome Wheel Detail",
    service: "Exterior Detail",
    photos: [
      {
        src: "/images/ram-3500-chrome-wheel.png",
        alt: "Ram 3500 dually chrome wheel polished to a mirror finish after detailing",
      },
      {
        src: "/images/ram-3500-exterior.png",
        alt: "White Ram 3500 dually truck after full exterior wash and detail",
      },
    ],
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
          {item.before && item.after ? (
            <div className="grid grid-cols-2">
              <div className="relative aspect-[4/3]">
                <span className="absolute left-2 top-2 z-10 rounded bg-red-500/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">
                  Before
                </span>
                <Image
                  src={item.before.src}
                  alt={item.before.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <span className="absolute left-2 top-2 z-10 rounded bg-[#10B981]/90 px-2 py-0.5 text-xs font-semibold uppercase text-white">
                  After
                </span>
                <Image
                  src={item.after.src}
                  alt={item.after.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ) : item.photos ? (
            <div className="grid grid-cols-2">
              {item.photos.map((photo, i) => (
                <div key={i} className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
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
