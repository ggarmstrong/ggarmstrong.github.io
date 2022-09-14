<script lang="ts">
	import Orbit from '$components/galaxy/Orbit.svelte';

	export let index: number;
	export let sizeHalf: number;
	export let width: number;
	export let maxOrbits: number;

	const odd = index % 2 === 1;
	const minOrbits = Math.pow(3, index);
	const orbits = maxOrbits / minOrbits;
	const ringRadius = sizeHalf - width * index;
</script>

<g>
	{#each Array(minOrbits) as _, orbitIndex}
		<Orbit index={orbitIndex} {ringRadius} {orbits} {odd} />
	{/each}
</g>
