<script lang="ts">
	import { onMount } from 'svelte';
	import Moon from '$lib/components/graphics/Moon.svelte';

	// indicate if we're in dark mode or not
	let dark: boolean;

	// hide the control until we've decided what the intial mode is
	let hidden = true;

	onMount(() => {
		// use the existence of the dark class on the html element for the initial value
		dark = document.documentElement.classList.contains('dark');

		// show UI controls
		hidden = false;

		// listen for changes so we auto-adjust based on system settings
		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleChange);
		return () => matcher.removeEventListener('change', handleChange);
	});

	function handleChange({ matches: dark }: MediaQueryListEvent) {
		// only set if we haven't overridden the theme
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function toggle() {
		setMode(!dark);
	}

	function setMode(value: boolean) {
		dark = value;

		// update page styling
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// store the theme as a local override
		localStorage.theme = dark ? 'dark' : 'light';

		// if the toggled-to theme matches the system defined theme, clear the local override
		// this effectively provides a way to override or revert to "automatic" setting mode
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<button
	class="{dark
		? 'border-white focus:ring-white'
		: 'border-text focus:ring-text focus:ring-offset-text'} border-2 relative inline-flex flex-shrink-0 h-6 w-11 items-center px-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-1 focus:ring-offset-1"
	class:hidden
	on:click={toggle}
>
	<span
		class="{dark
			? 'translate-x-5'
			: 'translate-x-0'} pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
	>
		<span
			class="{dark
				? 'opacity-100 ease-in duration-200'
				: 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<!-- moon icon -->
			<div class="w-4 h-4 text-black dark:text-white">
				<Moon />
			</div>
		</span>
		<span
			class="{dark
				? 'opacity-0 ease-out duration-100'
				: 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<!-- sun icon -->
			<div class="h-4 w-4 bg-text rounded-full dark:bg-white" />
		</span>
	</span>
</button>
