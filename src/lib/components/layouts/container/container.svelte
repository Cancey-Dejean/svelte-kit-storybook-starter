<!-- Imports -->
<script lang="ts" module>
	import { cn } from "@/lib/utils";
	import type { ContainerProps } from "./types";
	import { containerVariants } from "./variants";
</script>

<!-- Props -->
<script lang="ts">
	let {
		class: className,
		size = "base",
		ref = $bindable(null),
		children,
		...restProps
	}: ContainerProps = $props();
</script>

<!-- Component -->
<div bind:this={ref} class={cn(containerVariants({ size }), className)} {...restProps}>
	{@render children?.()}
</div>
