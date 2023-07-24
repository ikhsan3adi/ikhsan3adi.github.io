<script lang="ts">
	import type { ColorVariants, ColorVariant } from './button';

	export let variant: ColorVariant = { key: 'primary' };
	export let noDarkVariant: boolean = true;

	const backBackgroundColors: ColorVariants = {
		primary: noDarkVariant ? 'bg-text' : 'bg-text dark:bg-primary',
		secondary: noDarkVariant ? 'bg-text' : 'bg-text dark:bg-white'
	};

	const borderColors: ColorVariants = {
		primary: noDarkVariant ? 'border-text' : 'border-text dark:border-primary',
		secondary: noDarkVariant ? 'border-text' : 'border-text dark:border-white'
	};

	const backgroundColors: ColorVariants = {
		primary: noDarkVariant ? 'bg-primary' : 'bg-primary dark:bg-text',
		secondary: noDarkVariant ? 'bg-white' : 'bg-white dark:bg-text'
	};

	const textColors: ColorVariants = {
		primary: noDarkVariant ? '' : 'dark:text-primary',
		secondary: noDarkVariant ? '' : 'dark:text-white'
	};
</script>

<!-- back -->
<button class="{backBackgroundColors[variant.key]} duration-200">
	<!-- bg * border-->
	<div
		class="{backgroundColors[variant.key]}
    {borderColors[
			variant.key
		]} border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5"
	>
		<!-- text -->
		<h4 class="{textColors[variant.key]} duration-200">
			<slot />
		</h4>
	</div>
</button>

<style>
</style>
