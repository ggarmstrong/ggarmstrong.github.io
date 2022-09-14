<script>
	import Nucleus from '$components/galaxy/Nucleus.svelte';
	import Rings from '$components/galaxy/Rings.svelte';
	const size = 100;
	const sizeHalf = size / 2;
</script>

<div>
	<svg viewBox="0 0 {size} {size}" preserveAspectRatio="xMidyMid slice">
		<Nucleus />
		<Rings {sizeHalf} />
	</svg>
</div>

<style lang="scss">
	@keyframes -global-orbit {
		// todo confirm this isn't repeated
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	:global(.orbit) {
		transform-origin: 50% 50%;
		animation-name: orbit;
		animation-duration: 20s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.42, 0.2, 0.58, 0.8);
		stroke: var(--theme-color-orange);
		stroke-width: 1;
		stroke-linecap: round;
		fill: none;
	}

	:global(.orbit.reverse) {
		animation-direction: reverse;
		animation-duration: 30s;
		animation-delay: -10s;
	}

	div {
		position: relative;
		overflow: hidden;
		min-height: 15%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	svg {
		overflow: visible;
		width: 100%;
		height: auto;

		@media (min-width: 960px) {
			transform: scale(1.15);

			@media (max-width: 1200px) {
				height: 100%;
				width: auto;
			}
		}
	}
</style>
