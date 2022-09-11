<script>
	import BaseLayout from '$components/BaseLayout.svelte';
	const numOrbits = 2;
	const imageSize = 100;
	const imageSizeHalf = imageSize / 2;
	const orbitWidth = imageSizeHalf / numOrbits;
	const maxMolecules = Math.pow(3, numOrbits);
</script>

<BaseLayout>
	<div class="intro">
		<h1>Gene Armstrong</h1>
		<h2>Software Developer</h2>
		<p>I have fun assembling, integrating, and evolving resiliant ui/ux design systems.</p>
		<p>
			I'm inspired by leaders in the field of modular component-driven development and testing. I
			aim to bring design-system-first workflows into practice to help improve product quality and
			brand cohesion.
		</p>
		<ul>
			<li>
				<icon name="?" />See a demo of my work
			</li>
			<li>
				<icon name="pdf" />View my detailed CV
			</li>
			<li>
				<icon name="email" />Get in touch with me
			</li>
		</ul>
	</div>
	<div class="image" style:transform="scale(2)">
		<svg width="100%" viewBox="0 0 {imageSize} {imageSize}">
			{#each Array(numOrbits) as _, orbitIndex}
				{@const numAtoms = Math.pow(3, orbitIndex)}
				{@const numMolecules = maxMolecules / numAtoms}
				{@const moleculeRadius = imageSizeHalf - orbitWidth * orbitIndex}
				{#each Array(numAtoms) as _, atomIndex}
					{@const atomRadius = moleculeRadius - atomIndex}
					{@const strokeDashArray = (atomRadius * 2 * Math.PI) / numMolecules}
					{@const strokeColor = atomIndex === 0 ? 'red' : atomIndex === 1 ? 'blue' : 'green'}
					{@debug orbitIndex, numAtoms, maxMolecules, numMolecules, moleculeRadius, strokeDashArray, atomIndex, atomRadius}
					<!-- <g style:transform="rotate({0 * atomIndex}deg)"> -->
					<!-- todo use symbol -->
					<circle
						class="orbit"
						id="orbit-{orbitIndex}-{atomIndex}"
						cx="50"
						cy="50"
						r={atomRadius}
						style:stroke-dasharray="0 {strokeDashArray}"
					/>
					<circle
						class="orbit-static"
						cx="50"
						cy="50"
						r={atomRadius}
						stroke={strokeColor}
						stroke-width="0.15"
						opacity="0.2"
					/>
					<!-- </g> -->
				{/each}
			{/each}
		</svg>
	</div>
</BaseLayout>

<style lang="scss">
	@keyframes orbit {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.intro {
		flex: 2;
		padding: 1rem;
	}

	.image {
		flex: 1;
		padding: 1rem;
		max-width: 360px;
		svg {
			overflow: visible;
		}
	}
	.orbit {
		transform-origin: 50% 50%;
		animation-name: orbit;
		animation-duration: 15s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		// animation-direction: alternate-reverse;
		stroke: white;
		stroke-width: 1;
		stroke-linecap: round;
		fill: none;
	}

	// #orbit-2 {
	// 	stroke-dasharray: 0 8; // todo the math;
	// 	animation-duration: 20s;
	// 	animation-direction: reverse;
	// }

	// #orbit-3 {
	// 	stroke-dasharray: 0 8; // todo the math;
	// 	animation-duration: 20s;
	// 	animation-direction: reverse;
	// }

	// #orbit-4 {
	// 	stroke-dasharray: 0 8; // todo the math;
	// 	animation-duration: 20s;
	// 	animation-direction: reverse;
	// }

	.page {
		transform: scale(0.25);
		// transform-origin: 50% 50%;
	}
</style>
