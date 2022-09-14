<script>
	import { base } from '$app/paths';
	import NavItem from '$components/nav/NavItem.svelte';
	import IconPlay from '$components/icons/IconPlay.svelte';
	import IconNewWindow from '$components/icons/IconNewWindow.svelte';
	import IconMail from '$components/icons/IconMail.svelte';
</script>

<ul>
	<NavItem href="{base}/demos">
		<IconPlay slot="icon" />
		See examples of my work
	</NavItem>
	<NavItem href="{base}/gene-armstrong-resume-2022.pdf">
		<IconNewWindow slot="icon" />
		View my CV (PDF)
	</NavItem>
	<NavItem href="mailto:gene.armstrong.hello@gmail.com">
		<IconMail slot="icon" />
		Get in touch with me
	</NavItem>
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		background: var(--theme-color-teal-900);
		list-style: none;
	}
</style>
