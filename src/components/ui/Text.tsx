import { cn } from "@/lib/utils";

export const H2 = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <h2 className={cn("text-8xl tracking-tight", className)}>{children}</h2>
  );
};

export const H4 = ({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return (
    <h2
      className={cn(
        "text-6xl 2xl:text-7xl font-normal uppercase tracking-tight",
        className
      )}
    >
      {children}
    </h2>
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
    <p
      className={cn(
        "leading-normal font-light tracking-[4%] lg:tracking-wide",
        variant === "xs" && "text-[0.625rem]",
        variant === "sm" && "text-base lg:text-sm",
        variant === "regular" && "text-[1.25rem] lg:text-[1.2rem] leading-6",
        variant === "lg" && "text-[1.4rem] lg:text-[1.5rem] leading-6 lg:leading-7",
        variant === "xl" && "text-lg xl:text-3xl",
        className
      )}
    >
      {children}
    </p>
  );
};
