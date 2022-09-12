<script>
	import BaseLayout from '$components/BaseLayout.svelte';
	const numOrbits = 3;
	const imageSize = 100;
	const imageSizeHalf = imageSize / 2;
	const orbitWidth = imageSizeHalf / numOrbits;
	const maxMolecules = Math.pow(3, numOrbits);
	const diamondTemp = [
		// todo math
		[-2, 0],
		[-1, -1],
		[-1, 1],
		[0, -2],
		[0, 0],
		[0, 2],
		[1, -1],
		[1, 1],
		[2, 0]
	];
	const centerOrbits = 5;
	const centerRadius = 5;
	const centerStrokeDashArray = (centerRadius * 2 * Math.PI) / 20;
</script>

<BaseLayout>
	<div class="intro">
		<h1>
			Gene Armstrong<br />
			<em>Software Developer</em>
		</h1>
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
	<div class="image">
		<svg width="100%" viewBox="0 0 {imageSize} {imageSize}">
			{#each Array(centerOrbits) as _, centerOrbitIndex}
				<circle
					class="orbit orbit-center"
					cx="50"
					cy="50"
					r={centerRadius - centerOrbitIndex * 1.25}
					style:stroke-dasharray="0 {centerStrokeDashArray}"
				/>
			{/each}
			<!-- <circle
				class="orbit"
				cx="50"
				cy="50"
				r="4"
				style:stroke-dasharray="0 {centerStrokeDashArray}"
			/> -->
			{#each Array(numOrbits) as _, orbitIndex}
				{@const numAtoms = Math.pow(3, orbitIndex)}
				{@const numMolecules = maxMolecules / numAtoms}
				{@const moleculeRadius = imageSizeHalf - orbitWidth * orbitIndex}
				<g class="orbit-group">
					{#each Array(numAtoms) as _, atomIndex}
						{@const atomRadius = moleculeRadius + diamondTemp[atomIndex][0]}
						{@const strokeDashArray = (atomRadius * 2 * Math.PI) / numMolecules}
						{@const strokeDashOffset = diamondTemp[atomIndex][1]}
						<!-- {@const strokeColor = atomIndex === 0 ? 'red' : atomIndex === 1 ? 'blue' : 'green'} -->
						{@debug atomIndex, atomRadius, strokeDashOffset}
						<!-- <g style:transform="rotate({0 * atomIndex}deg)"> -->
						<!-- todo use symbol -->
						<circle
							class="orbit"
							cx="50"
							cy="50"
							r={atomRadius}
							style:stroke-dasharray="0 {strokeDashArray}"
							style:stroke-dashoffset={strokeDashOffset}
						/>
						<!-- <circle
						class="orbit-static"
						cx="50"
						cy="50"
						r={atomRadius}
						stroke={strokeColor}
						stroke-width="0.15"
						opacity="0.2"
					/> -->
						<!-- </g> -->
					{/each}
				</g>
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
		padding: 2rem;
		background: #151515;
		transform: translateX(-50%);

		h1 em {
			font-size: 2rem;
		}
	}

	.image {
		flex: 1;
		// padding: 2rem;
		// max-width: 360px;
		// background-color: rgb(194, 56, 22);
		border-radius: 0.25rem;
		position: fixed;
		z-index: -1;
		top: -50%;
		left: 33%;
		// transform: translateX(-50%);
		// width: 50%;
		height: 200%;
		// overflow: hidden;
		svg {
			overflow: visible;
			width: 100%;
			height: 100%;
		}
	}
	.orbit {
		transform-origin: 50% 50%;
		animation-name: orbit;
		animation-duration: 15s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.42, 0.2, 0.58, 0.8);
		stroke: rgb(194, 56, 22);
		stroke-width: 1;
		stroke-linecap: round;
		fill: none;
	}

	.orbit-group:nth-of-type(odd) .orbit {
		animation-direction: reverse;
		animation-duration: 25s;
		animation-delay: -10s;
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
