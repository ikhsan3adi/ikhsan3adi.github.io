<script lang="ts">
	export let duration = 15;
	export let repeat = 2;
	export let paused = false;
	export let direction: 'left' | 'right' = 'left';
</script>

<div class="overflow-hidden">
	<div class="marquee-content" class:paused={paused === true}>
		{#each Array(repeat) as _}
			<div
				id={_}
				class="{direction === 'left'
					? 'marquee-direction-left'
					: 'marquee-direction-right'} content"
				style="animation-duration: {duration}s"
			>
				<slot />
			</div>
		{/each}
	</div>
</div>

<style>
	.marquee-content {
		width: 100000px;
	}

	.paused .content {
		animation-play-state: paused;
	}

	.marquee-direction-left {
		animation-name: animation-L;
		float: left;
	}

	.marquee-direction-right {
		animation-name: animation-R;
		float: left;
	}

	.content {
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes animation-L {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes animation-R {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
