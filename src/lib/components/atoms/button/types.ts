import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./variants";
import type { WithElementRef } from "@/lib/utils";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
	WithElementRef<HTMLAnchorAttributes> & {
		variant?: ButtonVariant;
		size?: ButtonSize;
		newTab?: boolean;
	};
