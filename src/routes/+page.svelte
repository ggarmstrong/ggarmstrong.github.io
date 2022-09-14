<script>
	import { base } from '$app/paths';
	import Intro from '$components/intro/Intro.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Galaxy from '$components/Galaxy/Galaxy.svelte';
	// const numOrbits = 3;
	// const imageSize = 100;
	// const imageSizeHalf = imageSize / 2;
	// const orbitWidth = imageSizeHalf / numOrbits;
	// const maxMolecules = Math.pow(3, numOrbits);
	// const squareCoords = [
	// 	[-2, 0],
	// 	[-1, -1],
	// 	[-1, 1],
	// 	[0, -2],
	// 	[0, 0],
	// 	[0, 2],
	// 	[1, -1],
	// 	[1, 1],
	// 	[2, 0]
	// ];
	// const centerOrbits = 5;
	// const centerRadius = 5;
	// const centerStrokeDashArray = (centerRadius * 2 * Math.PI) / 20;
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
