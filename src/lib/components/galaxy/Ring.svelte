<script>
	export let orbits: number;
</script>

<g>
	{#each Array(orbits) as _, index}
		<Orbit {index} />
	{/each}
</g>

<style>
	/* g:nth-of-type(odd) circle {
		animation-direction: reverse;
		animation-duration: 30s;
		animation-delay: -10s;
	} */
</style>
