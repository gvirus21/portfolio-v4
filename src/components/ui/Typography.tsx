import { ElementType } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h6"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "caption-lg"
  | "caption-md"
  | "caption-sm";

export const typographyVariants: Record<Variant, string> = {
  h1: "",
  h2: "text-xl sm:text-8xl 2xl:text-9xl font-normal uppercase tracking-tight",
  h3: "text-6xl 2xl:text-7xl font-normal uppercase tracking-tight",
  h4: "text-3xl sm:text-6xl capitalize font-light tracking-[-1px]",
  h6: "text-xl tracking-tight mb-3 uppercase",
  "display-lg": "text-lg md:text-3xl lg:text-2xl leading-6 sm:leading-8",
  "display-md": "text-lg 2xl:text-xl tracking-wide",
  "display-sm": "text-base md:text-lg font-light",
  "caption-lg": "",
  "caption-md": "",
  "caption-sm": "text-sm",
};

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export const Typography = <T extends ElementType = "p">({
  as,
  variant = "display-md",
  className,
  children,
  ...rest
}: PolymorphicProps<T>) => {
  const Comp = (as ??
    (variant.startsWith("h") ? (variant as ElementType) : "p")) as ElementType;
  return (
    <Comp className={cn(typographyVariants[variant], className)} {...rest}>
      {children}
    </Comp>
  );
};

export const H2 = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="h2" variant="h2" {...p} />;

export const H3 = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="h3" variant="h3" {...p} />;

export const H4 = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="h4" variant="h4" {...p} />;

export const H6 = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="h6" variant="h6" {...p} />;

export const DisplayLargeText = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="p" variant="display-lg" {...p} />;

export const DisplayMediumText = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="p" variant="display-md" {...p} />;

export const DisplaySmallText = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="p" variant="display-sm" {...p} />;

export const CaptionSmallText = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="p" variant="caption-sm" {...p} />;
