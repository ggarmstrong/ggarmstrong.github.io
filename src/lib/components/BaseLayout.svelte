<script>
	// import Header from '$components/Header.svelte';
</script>

<!-- <slot name="header">
	<Header />
</slot>
<slot name="menu" /> -->
<main>
	<slot />
</main>

<!-- <slot name="footer" /> -->
<style>
	:global(body) {
		background: #111;
		color: #eee;
	}
</style>
