<script lang="ts">
	import type { ColorVariants, ColorVariant } from './button';

	export let variant: ColorVariant = { key: 'primary' };
	export let noDarkVariant = true;
	export let fullWidth = false;
	export let centerText = true;

	const backBackgroundColors: ColorVariants = {
		primary: 'dark:bg-primary',
		secondary: 'dark:bg-white',
		whatsapp: 'dark:bg-green-400',
		email: 'dark:bg-red-400',
		github: 'dark:bg-slate-200',
		instagram: 'dark:bg-fuchsia-400',
		facebook: 'dark:bg-sky-400',
		linkedIn: 'dark:bg-blue-400',
		medium: 'dark:bg-neutral-400',
		telegram: 'dark:bg-cyan-400'
	};

	const borderColors: ColorVariants = {
		primary: 'dark:border-primary',
		secondary: 'dark:border-white',
		whatsapp: 'dark:border-green-400',
		email: 'dark:border-red-400',
		github: 'dark:border-slate-200',
		instagram: 'dark:border-fuchsia-400',
		facebook: 'dark:border-sky-400',
		linkedIn: 'dark:border-blue-400',
		medium: 'dark:border-neutral-400',
		telegram: 'dark:border-cyan-400'
	};

	const backgroundColors: ColorVariants = {
		primary: 'bg-primary',
		secondary: 'bg-white',
		whatsapp: 'bg-green-400',
		email: 'bg-red-400',
		github: 'bg-slate-200',
		instagram: 'bg-fuchsia-400',
		facebook: 'bg-sky-400',
		linkedIn: 'bg-blue-400',
		medium: 'bg-neutral-400',
		telegram: 'bg-cyan-400'
	};

	const textColors: ColorVariants = {
		primary: 'dark:text-primary',
		secondary: 'dark:text-white',
		whatsapp: 'dark:text-green-400',
		email: 'dark:text-red-400',
		github: 'dark:text-slate-200',
		instagram: 'dark:text-fuchsia-400',
		facebook: 'dark:text-sky-400',
		linkedIn: 'dark:text-blue-400',
		medium: 'dark:text-neutral-400',
		telegram: 'dark:text-cyan-400'
	};
</script>

<!-- back -->
<button
	class="{noDarkVariant ? '' : backBackgroundColors[variant.key]} {fullWidth ? 'w-full' : ''} 
	bg-text duration-200"
>
	<!-- bg & border-->
	<div
		class="{backgroundColors[variant.key]}
		{noDarkVariant ? '' : 'dark:bg-text'}
    {noDarkVariant ? '' : borderColors[variant.key]}
		{centerText ? ' justify-center' : ''} flex items-center
		border-text border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"
	>
		<!-- icon -->
		{#if $$slots.icon}
			<div
				class="{noDarkVariant ? '' : textColors[variant.key]} mr-4 flex items-center justify-center"
			>
				<slot name="icon" />
			</div>
		{/if}

		<!-- text -->
		<h4 class="{noDarkVariant ? '' : textColors[variant.key]} duration-200">
			<slot />
		</h4>
	</div>
</button>
