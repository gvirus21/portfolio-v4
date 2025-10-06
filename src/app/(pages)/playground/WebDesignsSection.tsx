"use client";
import { useState } from "react";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";

const WebDesignsSection = () => {
  const WEB_DESIGNS = [
    {
      id: 1,
      title: "Design 01",
      year: "2025",
      imageUrl: "/assets/images/playground-section/webdesigns/design-01.jpg",
    },
    {
      id: 2,
      title: "Design 02",
      year: "2025",
      imageUrl: "/assets/images/playground-section/webdesigns/design-02.jpg",
    },
    {
      id: 3,
      title: "Design 03",
      year: "2025",
      imageUrl: "/assets/images/playground-section/webdesigns/design-03.jpg",
    },
    {
      id: 4,
      title: "Design 04",
      year: "2024",
      imageUrl: "/assets/images/playground-section/webdesigns/design-04.jpg",
    },
    {
      id: 5,
      title: "Design 05",
      year: "2025",
      imageUrl: "/assets/images/playground-section/webdesigns/design-05.jpg",
    },
    {
      id: 6,
      title: "Design 06",
      year: "2025",
      imageUrl: "/assets/images/playground-section/webdesigns/design-06.jpg",
    },
  ];

  const [selectedDesign, setSelectedDesign] = useState<null | {
    id: number;
    title: string;
    year: string;
    imageUrl: string;
  }>(null);

  const handleOpen = (design: {
    id: number;
    title: string;
    year: string;
    imageUrl: string;
  }) => setSelectedDesign(design);

  const handleClose = () => setSelectedDesign(null);

  return (
    <div className="mt-40">
      <h3>(02) Web designs</h3>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-32 auto-rows-[minmax(200px,auto)] mt-10">
        {WEB_DESIGNS.map((design) => (
          <div
            key={design.id}
            className={`overflow-hidden cursor-pointer`}
            onClick={() => handleOpen(design)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpen(design);
            }}
            aria-label={`Open ${design.title}`}
          >
            <Image
              src={design.imageUrl}
              alt={design.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="flex justify-between text-2xl mt-2">
              <h3>{design.title}</h3>
              <p>({design.year})</p>
            </div>
          </div>
        ))}
      </main>

      {selectedDesign && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative bg-transparent max-w-6xl w-full h-[100%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-20 right-40 text-white/90 hover:text-white text-3xl md:text-3xl"
            >
              <TfiClose />
            </button>
            <Image
              src={selectedDesign.imageUrl}
              alt={selectedDesign.title}
              width={1600}
              height={1000}
              className="w-auto --h-auto max-w-full h-[80vh] object-contain rounded"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDesignsSection;
