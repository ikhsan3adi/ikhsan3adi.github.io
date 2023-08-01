<script lang="ts">
	import { darkEnabled } from '$lib/config';
	import { onMount } from 'svelte';
	import Moon from '$lib/components/graphics/Moon.svelte';

	export let isBgTransparent = true;

	// indicate if we're in dark mode or not
	let dark = false;

	onMount(() => {
		darkEnabled.set(localStorage.theme == 'dark');

		darkEnabled.subscribe((value) => {
			if (dark != value) setMode(value);
		});
	});

	function toggle() {
		setMode(!dark);
	}

	function setMode(value: boolean) {
		dark = value;
		darkEnabled.set(value);

		// update page styling
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// store the theme as a local override
		localStorage.theme = dark ? 'dark' : 'light';
	}
</script>

<svelte:head>
	<script>
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<button
	class="{dark && isBgTransparent
		? 'border-white focus:ring-white'
		: 'border-slate-900 focus:ring-slate-900 focus:ring-offset-text'} border-2 relative inline-flex flex-shrink-0 h-6 w-11 items-center px-0.5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-1 focus:ring-offset-1"
	on:click={toggle}
>
	<span
		class="{dark
			? 'translate-x-5'
			: 'translate-x-0'} translate-y-0 pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
	>
		<span
			class="{dark
				? 'opacity-100 ease-in-out duration-800'
				: 'opacity-0 ease-in-out duration-800'} translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<!-- moon icon -->
			<div
				class="w-4 h-4 text-black translate-y-0 {isBgTransparent
					? 'dark:text-white'
					: 'dark:text-text'} duration-800"
			>
				<Moon />
			</div>
		</span>
		<span
			class="{dark
				? 'opacity-0 ease-in-out duration-800'
				: 'opacity-100 ease-in-out duration-800'} translate-y-0 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<!-- sun icon -->
			<div
				class="h-4 w-4 rounded-full translate-y-0 {isBgTransparent
					? 'dark:bg-white'
					: 'dark:bg-slate-900'} bg-slate-900"
			/>
		</span>
	</span>
</button>
