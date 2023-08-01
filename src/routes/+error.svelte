<script lang="ts">
	import { page } from '$app/stores';
	import { githubLink } from '$lib/api/socials';
</script>

<div class="w-full h-full flex absolute dark:bg-slate-800">
	<div class="m-auto flex flex-col justify-center">
		<h1 class="text-center dark:text-white mb-4">{$page.status}: {$page.error?.message}</h1>
		<a
			href="{githubLink}ikhsan3adi.github.io/issues"
			class="text-center dark:text-sky-300 text-sky-500 hover:text-accent"
		>
			Report
		</a>
	</div>
</div>
