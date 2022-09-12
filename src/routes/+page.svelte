<script>
	import BaseLayout from '$components/BaseLayout.svelte';
	import IconChevronRight from '$components/IconChevronRight.svelte';
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
	<div class="content">
		<div class="intro">
			<p>I have fun assembling, integrating, and evolving resiliant ui/ux design systems.</p>
			<p>
				I'm inspired by leaders in the field of modular component-driven frontend development and
				testing. I aim to bring design-system-first workflows into practice to help improve
				real-world product quality and brand cohesion.
			</p>
			<address>
				<div class="byline">
					Gene Armstrong<br />
					<em>Software Developer</em>
				</div>
				<img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45" />
			</address>
		</div>
		<ul>
			<li>
				<a href="#">
					See a demo of my work <IconChevronRight />
				</a>
			</li>
			<li>
				<a href="#">
					View my detailed CV<IconChevronRight />
				</a>
			</li>
			<li>
				<a href="#">
					Get in touch with me<IconChevronRight />
				</a>
			</li>
		</ul>
	</div>
	<div class="image">
		<div class="image-inner">
			<svg width="100%" height="100%" viewBox="0 0 {imageSize} {imageSize}">
				{#each Array(centerOrbits) as _, centerOrbitIndex}
					<circle
						class="orbit orbit-center"
						cx="50"
						cy="50"
						r={centerRadius - centerOrbitIndex * 1.25}
						style:stroke-dasharray="0 {centerStrokeDashArray}"
					/>
				{/each}
				{#each Array(numOrbits) as _, orbitIndex}
					{@const numAtoms = Math.pow(3, orbitIndex)}
					{@const numMolecules = maxMolecules / numAtoms}
					{@const moleculeRadius = imageSizeHalf - orbitWidth * orbitIndex}
					<g class="orbit-group">
						{#each Array(numAtoms) as _, atomIndex}
							{@const atomRadius = moleculeRadius + diamondTemp[atomIndex][0]}
							{@const strokeDashArray = (atomRadius * 2 * Math.PI) / numMolecules}
							{@const strokeDashOffset = diamondTemp[atomIndex][1]}
							<circle
								class="orbit"
								cx="50"
								cy="50"
								r={atomRadius}
								style:stroke-dasharray="0 {strokeDashArray}"
								style:stroke-dashoffset={strokeDashOffset}
							/>
						{/each}
					</g>
				{/each}
			</svg>
		</div>
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

	.content {
		// flex: 2;
		// position: relative;
		// left: 10rem;
		display: flex;
		flex-direction: column;
		height: 100%;
		@media (min-width: 640px) {
			min-width: 480px;
			width: 40%;
		}
	}

	.intro {
		background: #021412;
		padding: 3rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		// border-top-right-radius: 2rem;
		// border-top-left-radius: 2rem;
	}

	address {
		display: flex;
		justify-content: flex-end;
		// margin-top: 2rem;
		padding-top: 2rem;
		padding-right: 1rem;
		// padding-left: 1rem;
		align-items: center;
		// border-style: solid;
		// border-color: #03201d;
		// border-width: 0;
		// border-top-width: 1px;
		img {
			width: 50px;
			height: 50px;
			border-radius: 100%;

			@media (min-width: 640px) {
				width: 70px;
				height: 70px;
			}
		}
	}

	.byline {
		font-style: normal;
		font-weight: bold;
		margin-right: 1rem;
		line-height: 1.5;
		color: #62968f;
		em {
			font-weight: normal;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		// padding: 3rem;
		background: #000a07;
		list-style: none;
		// flex: 1;
	}

	li {
		a {
			display: block;
			font-weight: bold;
			text-decoration: none;
			padding: 2rem 3rem;
			border-style: solid;
			border-color: #021412;
			border-width: 0;
			border-bottom-width: 1px;
			color: #62968f;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&:last-child a {
			border-bottom-width: 0;
		}
	}

	.image {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;

		svg {
			overflow: visible;
			width: 100%;
			height: 100%;
		}
	}

	.image-inner {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scale(1.35);
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
</style>
