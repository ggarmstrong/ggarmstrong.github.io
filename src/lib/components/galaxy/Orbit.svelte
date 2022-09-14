<script>
	export let index: number;
	const radius = moleculeRadius + squareCoords[index][0];
	const strokeDashArray = (radius * 2 * Math.PI) / numMolecules;
	const strokeDashOffset = squareCoords[atomIndex][1];
</script>

<circle
	class="orbit"
	cx="50"
	cy="50"
	r={atomRadius}
	style:stroke-dasharray="0 {strokeDashArray}"
	style:stroke-dashoffset={strokeDashOffset}
/>
