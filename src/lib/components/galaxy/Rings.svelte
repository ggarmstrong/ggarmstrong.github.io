<script lang="ts">
	import Ring from '$components/galaxy/Ring.svelte';

	export let sizeHalf: number;

	const rings = 5;
	const width = sizeHalf / rings;
</script>

{#each Array(rings) as _, index}
	<Ring {index} {width} />
{/each}
