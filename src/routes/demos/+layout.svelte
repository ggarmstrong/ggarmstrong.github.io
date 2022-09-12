<script>
	import IconArrowLeft from '$components/IconArrowLeft.svelte';
</script>

<section>
	<a href="/" title="Go Back"><IconArrowLeft /></a>
	<h1>Demos</h1>
	<slot />
</section>

<style>
	section {
		padding: 2rem;
		width: 100%;
		max-width: 768px;
		margin-left: auto;
		margin-right: auto;
	}

	a {
		display: block;
		padding: 1rem;
		margin-bottom: 2rem;
		margin-left: -1rem;
		color: #74a49e;
	}
</style>
