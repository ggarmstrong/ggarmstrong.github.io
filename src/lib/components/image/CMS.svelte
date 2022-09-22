<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import Image from '$components/';
	export let blok;
</script>

<Image use={storyblokEditable(blok)} />
