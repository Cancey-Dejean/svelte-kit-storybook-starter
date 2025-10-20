<script lang="ts" module>
	import { cn } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	export type StoryWrapperProps = HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
	};
</script>



<!-- Props -->
<script lang="ts">
	let {
		class: className,
		children,
		...restProps
	}: StoryWrapperProps = $props();
</script>

<!-- Component -->
<div class={cn("mx-auto flex h-[90vh] w-full items-center justify-center", className)} {...restProps}>
	{@render children?.()}
</div>
