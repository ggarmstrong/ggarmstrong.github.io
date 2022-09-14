<script lang="ts">
	export let index: number;
	export let ringRadius: number;
	export let orbits: number;
	export let odd: boolean;

	const squareCoords = [
		[-2, 0],
		[-1, -1],
		[-1, 1],
		[0, -2],
		[0, 0],
		[0, 2],
		[1, -1],
		[1, 1],
		[2, 0]
	];
	const radius = ringRadius + squareCoords[index][0];
	const strokeDashArray = (radius * 2 * Math.PI) / orbits;
	const strokeDashOffset = squareCoords[index][1];
</script>

<circle
	class:reverse={odd}
	cx="50"
	cy="50"
	r={radius}
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
