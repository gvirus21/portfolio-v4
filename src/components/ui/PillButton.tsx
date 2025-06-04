import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  title: string;
  link: string;
  className?: string;
}

const PillButton = ({ title, link, className }: PillButtonProps) => {
  return (
    <Link href={link}>
      <div
        className={cn(
          "inline-block px-3 py-1 text-sm bg-black text-white rounded-full font-light hover:opacity-90 transition-opacity",
          className
        )}
      >
        {title}
      </div>
    </Link>
  );
};

export default PillButton;
