import React from "react";
import { cn } from "@/lib/utils";

interface BlackDotProps {
  height?: string;
  color?: string;
  className?: string;
}

const BlackDot: React.FC<BlackDotProps> = ({
  height = "",
  color = "bg-black",
  className,
}) => {
  return (
    <span
      className={cn(
        "absolute aspect-square rounded-full h-[2.5vw] md:h-[1.8vw] lg:h-[1.6vw] xl:h-4.5 3xl:h-7",
        height,
        color,
        className
      )}
    />
  );
};

export default BlackDot;
