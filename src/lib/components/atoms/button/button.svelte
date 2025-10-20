<!-- Imports -->
<script lang="ts" module>
	import { cn } from "$lib/utils.js";
	import type { ButtonProps } from "./types";
	import { buttonVariants } from "./variants";
</script>

<!-- Props -->
<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		newTab = false,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

<!-- Component -->
{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		data-variant={variant}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		target={newTab ? "_blank" : "_self"}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		data-variant={variant}
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
