<script lang="ts">
	import Ring from '$components/galaxy/Ring.svelte';

	export let sizeHalf: number;

	const rings = 3;
	const width = sizeHalf / rings;
	const maxOrbits = Math.pow(3, rings);
</script>

{#each Array(rings) as _, index}
	<Ring {sizeHalf} {index} {width} {maxOrbits} />
{/each}
