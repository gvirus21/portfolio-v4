"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedImage from "@/components/ui/AnimatedImage";
import useCursorState from "@/store/useCursorState";

const WebDesignsSection = () => {
  const { setCursorState, setCursorText } = useCursorState();

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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedDesign) {
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      // Store for restoration
      document.body.dataset.scrollY = scrollY.toString();

      // Cleanup when modal closes
      return () => {
        const savedScrollY = document.body.dataset.scrollY;

        // Remove all styles
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        // Restore scroll position
        if (savedScrollY) {
          window.scrollTo(0, parseInt(savedScrollY));
          delete document.body.dataset.scrollY;
        }
      };
    }
  }, [selectedDesign]);

  return (
    <div className="font-main tracking-tighter pt-28">
      <h3>(02) Web designs</h3>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-20 auto-rows-[minmax(200px,auto)] mt-10">
        {WEB_DESIGNS.map((design) => (
          <div
            key={design.id}
            className={`overflow-hidden cursor-pointer`}
            onClick={() => handleOpen(design)}
            onMouseEnter={() => setCursorText("Open")}
            onMouseLeave={() => setCursorText("")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpen(design);
            }}
            aria-label={`Open ${design.title}`}
          >
            <AnimatedImage
              src={design.imageUrl}
              alt={design.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="flex justify-between xl:text-xl 3xl:text-2xl mt-2">
              <h3
                onMouseEnter={() => setCursorState("sm-hovered")}
                onMouseLeave={() => setCursorState("regular")}
              >
                {design.title}
              </h3>
              <p
                onMouseEnter={() => setCursorState("sm-hovered")}
                onMouseLeave={() => setCursorState("regular")}
              >
                ({design.year})
              </p>
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
            className="relative h-fit max-w-fit w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              onMouseEnter={() => setCursorState("md-hovered")}
              onMouseLeave={() => setCursorState("regular")}
              aria-label="Close"
              className="absolute top-6 right-0 xl:top-4 xl:right-6 text-white mix-blend-exclusion text-lg"
            >
              CLOSE
            </button>

            <Image
              src={selectedDesign.imageUrl}
              alt={selectedDesign.title}
              width={1600}
              height={1000}
              className="h-[80vh] w-auto max-w-full object-contain rounded"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDesignsSection;
