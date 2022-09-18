import { getStoryblokApi, storyblokInit, apiPlugin } from '@storyblok/svelte';
import { SB_ACCESS_TOKEN } from '$env/static/private';

export function load(event) {
	// import { SB_ACCESS_TOKEN } from '$env/static/private';

		storyblokInit({
			bridge: process.env.NODE_ENV !== 'production',
			accessToken: SB_ACCESS_TOKEN,
			use: [apiPlugin],
			// components: {
			// 	// teaser: Teaser
			// }
		});

		return {};
	}
