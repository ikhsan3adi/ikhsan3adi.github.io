<script lang="ts">
	import ThemeButton from '$lib/components/widgets/ThemeButton.svelte';
	import { hamburgerMenuExpanded } from '$lib/config';
	import { onMount } from 'svelte';

	export let isBgTransparent = true;

	let open = false;

	onMount(() => {
		hamburgerMenuExpanded.subscribe((value) => {
			if (value != open) open = value;
		});
	});

	function toggle(value: boolean) {
		open = value;
		hamburgerMenuExpanded.set(value);
	}
</script>

<div
	class="{isBgTransparent ? 'dark:text-white' : 'dark:text-text'}
  text-text my-auto flex flex-col lg:hidden"
>
	<!-- Hamburger button -->
	<button class="m-auto block" on:click={() => toggle(!open)}>
		{#if open}
			<svg
				class="fill-current"
				xmlns="http://www.w3.org/2000/svg"
				height="30"
				viewBox="0 -960 960 960"
				width="30"
			>
				<path
					d="M80-212v-94h554v94H80Zm735-56L602-481l212-212 67 67-145 145 146 146-67 67ZM80-435v-94h434v94H80Zm0-219v-95h554v95H80Z"
				/>
			</svg>
		{:else}
			<svg
				class="fill-current"
				xmlns="http://www.w3.org/2000/svg"
				height="30"
				viewBox="0 -960 960 960"
				width="30"
			>
				<path d="M95-203v-95h771v95H95Zm0-230v-94h771v94H95Zm0-229v-95h771v95H95Z" />
			</svg>
		{/if}
	</button>

	<!-- Menu -->
	<div class="relative {open ? '' : 'hidden'} text-slate-800 z-50">
		<div
			class="absolute right-0 w-max p-0 flex flex-col overflow-hidden bg-slate-100 dark:bg-slate-700 border-4 border-slate-900 dark:border-white"
		>
			<!-- Dark mode toggle -->
			<div class="mx-auto py-1 flex items-center gap-4 pr-4">
				<p class="dark:text-white py-2 pl-5 duration-200">Darkmode</p>
				<ThemeButton isBgTransparent={true} />
			</div>
		</div>
	</div>

	<!-- Click outside to close -->
	<button on:click={() => (open = false)} class="z-40">
		<div class="fixed left-0 right-0 top-0 bottom-0 cursor-default {open ? '' : 'hidden'}" />
	</button>
</div>
