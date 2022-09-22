export const prerender = true;
import { storyblokInit, apiPlugin } from "@storyblok/svelte";
import { SB_ACCESS_TOKEN } from '$env/static/private';
import image from '$components/image/CMS.svelte';

storyblokInit({
    bridge: process.env.NODE_ENV !== 'production',
    accessToken: SB_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
        image
    }
});
