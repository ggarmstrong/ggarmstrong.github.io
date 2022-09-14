<script>
	import { base } from '$app/paths';
	import Intro from '$components/intro/Intro.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Galaxy from '$components/galaxy/Galaxy.svelte';
</script>

<div>
	<Intro />
	<Nav />
</div>
<Galaxy />

<style>
	div {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		min-width: 40%;
	}
</style>
