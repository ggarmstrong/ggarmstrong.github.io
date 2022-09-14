<script lang="ts">
	import Orbit from '$components/galaxy/Orbit.svelte';

	export let index: number;
	export let sizeHalf: number;
	export let width: number;

	const odd = index % 2 === 1;
	const orbits = Math.pow(3, index);
	const ringRadius = sizeHalf - width * index;
	console.log('mango4', index);
</script>

<g>
	{#each Array(orbits) as _, orbitIndex}
		<Orbit index={orbitIndex} {ringRadius} {orbits} {odd} />
	{/each}
</g>
