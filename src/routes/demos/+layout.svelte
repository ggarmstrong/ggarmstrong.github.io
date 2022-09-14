<script>
	import { base } from '$app/paths';
	import IconArrowLeft from '$components/IconArrowLeft.svelte';
</script>

<section>
	<a href="{base}/" title="Go Back"><IconArrowLeft /></a>
	<h1>Work Examples</h1>
	<slot />
</section>

<style lang="scss">
	section {
		padding: var(--theme-padding);

		@media (min-width: 768px) {
			margin-left: auto;
			margin-right: auto;
			max-width: 768px;
			width: 100%;
		}
	}

	a {
		display: block;
		padding: 1rem;
		margin-bottom: 2rem;
		margin-left: -1.5rem;
		color: #74a49e;
	}
</style>
