"use client";

import Copy from "@/components/Copy";
import { DisplaySmallText } from "@/components/ui/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useCursorState from "@/store/useCursorState";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

const PricingTable = () => {
  const container = useRef(null);
  const { setCursorState } = useCursorState();
  const isTouchDevice = useIsTouchDevice();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const firstLineWidth = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["10%", "100%"]
  );
  const secondLineWidth = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["10%", "100%"]
  );
  const thirdLineWidth = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["10%", "100%"]
  );

  const PRICING_CARDS = [
    {
      id: 1,
      title: "Custom Website",
      priceRange: "$3,500 - $10,000",
      features: [
        "Custom design phase",
        "Custom coded development",
        "3-6 Pages + Blog/articles section",
        "Mobile-first responsive code",
        "CMS if required",
        "No eCcommerce functionality",
      ],
      notIncluded: [
        "eCommerce functionality",
        "Advanced automations and analytics available additionally",
      ],
      animatedLineWidth: firstLineWidth,
    },
    {
      id: 2,
      title: "Custom E-commerce",
      priceRange: "$4,000 - $20,000",
      features: [
        "Custom design phase",
        "Custom coded development",
        "3-6 Pages + Blog/articles section",
        "Mobile-first responsive code",
        "eCommerce storefront",
        "Advanced eCcommerce functionality",
      ],
      notIncluded: ["Post-purchase upsell systems available extra"],
      animatedLineWidth: secondLineWidth,
    },
    {
      id: 3,
      title: "AWWWARDS Worthy",
      priceRange: "$20,000+",
      features: [
        "Exceptionally unique & detailed designs",
        "Professional-grade site animations",
        "Interactive scroll-based animations",
        "Seamless full-page transitions",
      ],
      notIncluded: ["WebGL or 3d integrations"],
      premium: true,
      animatedLineWidth: thirdLineWidth,
    },
  ];

  return (
    <section
      ref={container}
      className="relative flex flex-col md:flex-row justify-between min-h-[40vh] 3xl:text-base w-screen max-w-full lg:mt-20 xl:mt-40"
    >
      <div className="2xl:w-3/12 3xl:w-5/12 pt-6">
        <Copy>
          <DisplaySmallText
            className="text-lg md:text-sm lg:text-lg"
            onMouseEnter={() => !isTouchDevice && setCursorState("sm-hovered")}
            onMouseLeave={() => !isTouchDevice && setCursorState("regular")}
          >
            Our Pricing
          </DisplaySmallText>
        </Copy>
      </div>

      <div className="md:w-[80%] xl:w-9/12 2xl:w-10/12 3xl:w-9/12">
        {PRICING_CARDS.map((card) => (
          <div key={card.id}>
            <motion.div
              style={{
                width: card.animatedLineWidth,
              }}
              className="h-[1px] bg-foreground rounded-full mt-4"
            />

            <div className="flex justify-between  mt-6 mb-8 sm:mb-16 lg:mb-20">
              <div className="flex justify-between w-full sm:w-auto">
                <Copy>
                  <DisplaySmallText
                    className="w-[9rem] lg:w-[16rem] sm:text-sm md:text-sm"
                    onMouseEnter={() =>
                      !isTouchDevice && setCursorState("sm-hovered")
                    }
                    onMouseLeave={() =>
                      !isTouchDevice && setCursorState("regular")
                    }
                  >
                    <span>({String(card.id).padStart(2, "0")}) </span>
                    {card.title}
                  </DisplaySmallText>
                </Copy>
                <div className="ml-4 sm:ml-10 md:ml-14 lg:ml-10 xl:ml-28 2xl:ml-40 3xl:ml-[16rem] w-[14rem] sm:w-auto">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <Copy>
                        <DisplaySmallText
                          className="sm:text-sm md:text-sm mb-1"
                          onMouseEnter={() =>
                            !isTouchDevice && setCursorState("sm-hovered")
                          }
                          onMouseLeave={() =>
                            !isTouchDevice && setCursorState("regular")
                          }
                        >
                          {feature}
                        </DisplaySmallText>
                      </Copy>
                    </div>
                  ))}
                  <p
                    className="text-lg mt-10 sm:hidden"
                    onMouseEnter={() =>
                      !isTouchDevice && setCursorState("sm-hovered")
                    }
                    onMouseLeave={() =>
                      !isTouchDevice && setCursorState("regular")
                    }
                  >
                    {card.priceRange}
                  </p>
                </div>
              </div>
              <Copy>
                <DisplaySmallText
                  className="hidden sm:block text-xs sm:text-sm md:text-sm"
                  onMouseEnter={() =>
                    !isTouchDevice && setCursorState("sm-hovered")
                  }
                  onMouseLeave={() =>
                    !isTouchDevice && setCursorState("regular")
                  }
                >
                  {card.priceRange}
                </DisplaySmallText>
              </Copy>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
