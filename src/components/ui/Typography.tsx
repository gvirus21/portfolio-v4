import React, { ElementType } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "lead"
  | "body"
  | "small"
  | "caption"
  | "overline";

const variantClasses: Record<Variant, string> = {
  display: "tracking-tight font-light text-6xl sm:text-7xl 2xl:text-8xl",
  h1: "tracking-tight font-light text-5xl sm:text-6xl 2xl:text-7xl",
  h2: "tracking-tight font-light text-4xl sm:text-5xl 2xl:text-6xl",
  h3: "tracking-tight font-light text-3xl sm:text-4xl 2xl:text-5xl",
  h4: "tracking-tight font-normal uppercase text-2xl sm:text-3xl 2xl:text-4xl",
  lead: "font-light text-xl sm:text-2xl leading-7 sm:leading-8",
  body: "font-light text-base sm:text-[1.1rem] leading-6",
  small: "font-light text-sm leading-5",
  caption: "text-xs leading-4",
  overline: "text-[10px] uppercase tracking-wider",
};

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export const Typography = <T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...rest
}: PolymorphicProps<T>) => {
  const Comp = (as ??
    (variant.startsWith("h") ? (variant as ElementType) : "p")) as ElementType;
  return (
    <Comp className={cn(variantClasses[variant], className)} {...rest}>
      {children}
    </Comp>
  );
};

Typography.displayName = "Typography";

// Convenience wrappers
export const H1 = (
  p: React.ComponentPropsWithoutRef<"h1"> & { className?: string }
) => <Typography as="h1" variant="h1" {...p} />;

export const H2 = (
  p: React.ComponentPropsWithoutRef<"h2"> & { className?: string }
) => <Typography as="h2" variant="h2" {...p} />;

export const H4 = (
  p: React.ComponentPropsWithoutRef<"h4"> & { className?: string }
) => <Typography as="h4" variant="h4" {...p} />;

export const Text = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="p" variant="body" {...p} />;

export const Lead = (
  p: React.ComponentPropsWithoutRef<"p"> & { className?: string }
) => <Typography as="p" variant="lead" {...p} />;

export const Caption = (
  p: React.ComponentPropsWithoutRef<"span"> & { className?: string }
) => <Typography as="span" variant="caption" {...p} />;
