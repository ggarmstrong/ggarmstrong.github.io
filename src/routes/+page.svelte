<script>
	import { base } from '$app/paths';
	import Intro from '$components/intro/Intro.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Galaxy from '$components/galaxy/Galaxy.svelte';

	import { onMount } from 'svelte';
	import { getStoryblokApi } from '@storyblok/svelte';

	onMount(async () => {
		const storyblokApi = getStoryblokApi();
		const { data } = await storyblokApi.get('cdn/stories/home', {
			version: 'draft'
		});
	});
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
