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
	class="orbit"
	class:reverse={odd}
	cx="50"
	cy="50"
	r={radius}
	style:stroke-dasharray="0 {strokeDashArray}"
	style:stroke-dashoffset={strokeDashOffset}
/>
