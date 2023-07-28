<script lang="ts">
	import Wrappper from '$lib/components/Wrappper.svelte';
	import Theme from '$lib/components/Theme.svelte';
	import { onMount } from 'svelte';
	import Hamburger from '$lib/components/buttons/Hamburger.svelte';
	import { hamburgerMenuExpanded } from '$lib/config';
	import { navLinks } from '$lib/variables';

	let navbar: HTMLElement;

	let scrollY = 0;
	let prevScrollpos = scrollY;
	let prevScrollpos2 = scrollY;

	let isBgTransparent = true;
	let backgroundClasses = 'bg-opacity-0 border-opacity-0';

	onMount(() => {
		changeColors();
		window.onscroll = async () => {
			autoHideMenu();
			autoHideNavbar();
			changeColors();
		};
	});

	function autoHideNavbar() {
		let currentScrollPos = scrollY;
		if (prevScrollpos > currentScrollPos) {
			navbar.style.top = '0';
		} else {
			navbar.style.top = '-68px';
		}
		prevScrollpos = currentScrollPos;
	}

	function changeColors() {
		if (scrollY < 300) {
			backgroundClasses = 'bg-opacity-0 border-opacity-0';
		} else if (scrollY < 400) {
			backgroundClasses = 'bg-opacity-20 border-opacity-0';
		} else if (scrollY < 600) {
			backgroundClasses = 'bg-opacity-50 border-opacity-0';
		} else if (scrollY < 800) {
			isBgTransparent = true;
			backgroundClasses = 'bg-opacity-60 border-opacity-0';
		} else {
			isBgTransparent = false;
			backgroundClasses = 'bg-opacity-100 border-opacity-100';
		}
	}

	function autoHideMenu() {
		let currentScrollPos = scrollY;
		if (currentScrollPos > prevScrollpos2 + 250 || currentScrollPos < prevScrollpos2 - 250) {
			hamburgerMenuExpanded.set(false);
			prevScrollpos2 = currentScrollPos;
		}
	}
</script>

<svelte:window bind:scrollY />

<section
	bind:this={navbar}
	class="fixed top-0 left-0 right-0 bg-primary border-b-4 border-slate-900 z-40 duration-300 {backgroundClasses}"
>
	<Wrappper>
		<div class="my-auto h-16 flex justify-between w-full">
			<!-- Logo -->
			<div class="my-auto">
				<div class="mt-2 dark:mt-0 relative">
					<a href="/">
						<h3
							class="text-primary {isBgTransparent
								? 'dark:text-white'
								: 'dark:text-text'} font-mechsuit text-sm md:text-lg z-0 transition-colors duration-500"
						>
							IKHSaN3ADI
						</h3>

						<h3
							class="font-mechsuit dark:hidden text-sm md:text-lg absolute -top-1 right-1 transition-colors duration-500"
						>
							IKHSaN3ADI
						</h3>
					</a>
				</div>
			</div>

			<!-- Nav links -->
			<div
				class="hidden w-full pr-12 xl:pr-16 pl-16 xl:pl-24 lg:flex justify-evenly flex-wrap items-center text-text
				{isBgTransparent ? 'dark:text-white' : 'dark:text-text'}"
			>
				{#each navLinks as link}
					<a class="hover:underline active:text-indigo-500" href="#{link.link}">{link.text}</a>
				{/each}
			</div>

			<!-- Hamburger menu -->
			<Hamburger {isBgTransparent} />

			<!-- Dark mode toggle -->
			<div class="hidden lg:block my-auto">
				<Theme {isBgTransparent} />
			</div>
		</div>
	</Wrappper>
</section>
