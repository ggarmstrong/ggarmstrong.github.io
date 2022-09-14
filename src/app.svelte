<script>
	import { storyblokInit, apiPlugin } from '@storyblok/svelte';
	import { SB_ACCESS_TOKEN } from '$env/static/private';

	storyblokInit({
		accessToken: SB_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			// teaser: Teaser
		}
	});
</script>
