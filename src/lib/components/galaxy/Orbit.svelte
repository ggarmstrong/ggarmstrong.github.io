<script>
	export let index: number;
	const odd = index % 2 === 1;
	const radius = moleculeRadius + squareCoords[index][0];
	const strokeDashArray = (radius * 2 * Math.PI) / numMolecules;
	const strokeDashOffset = squareCoords[atomIndex][1];
</script>

<circle
	class:reverse={odd}
	cx="50"
	cy="50"
	r={atomRadius}
	style:stroke-dasharray="0 {strokeDashArray}"
	style:stroke-dashoffset={strokeDashOffset}
/>

<style lang="scss">
	@keyframes orbit {
		// todo confirm this isn't repeated
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	circle {
		transform-origin: 50% 50%;
		animation-name: orbit;
		animation-duration: 20s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.42, 0.2, 0.58, 0.8);
		stroke: var(--theme-color-orange);
		stroke-width: 1;
		stroke-linecap: round;
		fill: none;

		&.reverse {
			animation-direction: reverse;
			animation-duration: 30s;
			animation-delay: -10s;
		}
	}
</style>
