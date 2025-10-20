import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import type { containerVariants } from "./variants";

export type ContainerSize = VariantProps<typeof containerVariants>["size"];

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
	size?: ContainerSize;
	ref?: HTMLDivElement | null;
	children?: Snippet;
};
