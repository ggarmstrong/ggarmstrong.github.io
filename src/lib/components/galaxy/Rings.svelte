<script lang="ts">
	import Ring from '$components/galaxy/Ring.svelte';

	export let sizeHalf: number;

	const rings = 3;
	const width = sizeHalf / rings;
</script>

{#each Array(rings) as _, index}
	<Ring {sizeHalf} {index} {width} />
{/each}
