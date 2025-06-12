import { cn } from "@/lib/utils";

export const H2 = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <h2 className="text-9xl tracking-tight">{children}</h2>
  );
};

export const Description = ({
  children,
  className,
  variant = "regular",
}: {
  children: string;
  className?: string;
  variant?: "xs" | "sm" | "regular" | "lg" | "xl";
}) => {
  return (
    <h1
      className={cn(
        "leading-normal font-light tracking-[4%] lg:tracking-wide",
        variant === "xs" && "text-[0.625rem]",
        variant === "sm" && "text-base lg:text-sm",
        variant === "regular" && "text-[1.25rem] lg:text-[1.2rem] leading-6",
        variant === "lg" && "text-[2rem] lg:text-[1.5rem] leading-7",
        variant === "xl" && "text-lg xl:text-3xl",
        className
      )}
    >
      {children}
    </h1>
  );
};
