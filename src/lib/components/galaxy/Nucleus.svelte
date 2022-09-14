<script>
	import Orbit from '$components/galaxy/Orbit';

	const orbits = 5;
	const radius = 5;
	const spacing = 1.25;
	const distance = 20;
	const strokeDashArray = (radius * 2 * Math.PI) / distance;
</script>

{#each Array(orbits) as _, index}
	<Orbit {index} />
	<!-- <circle
		cx="50"
		cy="50"
		r={radius - index * spacing}
		style:stroke-dasharray="0 {strokeDashArray}"
	/> -->
{/each}
