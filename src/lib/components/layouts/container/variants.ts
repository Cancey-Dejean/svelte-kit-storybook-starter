import { tv } from "tailwind-variants";

export const containerCva = {
  variants: {
    size: {
      base: "max-w-[1280px]",
      contained: "max-w-5xl",
      design: "max-w-[1440px]",
      thin: "max-w-[996px]",
      full: "max-w-full",
    },
    defaultVariants: {
      size: "base",
    },
  },
  defaultVariants: {
    size: "base",
  },
} as const;

export const containerVariants = tv({
  base: "mx-auto w-full md:px-8 px-4",
  ...containerCva,
});
