<script>
	import IconChevronRight from '$components/IconChevronRight.svelte';
	import IconMail from '$components/IconMail.svelte';
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

<div class="content">
	<div class="intro">
		<p>
			I have fun building software with smart and passionate people. It's my continuing goal to
			improve the ui/ux quality of my work while also growing my full-stack capabilities. I enjoy
			working through the interplay between dev theory and real-world business requirements.
		</p>
		<p>
			I'm particularly interested in assembling, integrating, and evolving resiliant
			component-driven design systems. I'm inspired by leaders in this field, and promote
			design-system-first dev and testing workflows to help improve products and brands.
		</p>
		<address>
			<div class="byline">
				Gene Armstrong<br />
				Software Dev
			</div>
			<div class="avatar">
				<img src="/ggarmstrong-avatar.png" />
			</div>
		</address>
	</div>
	<ul>
		<li>
			<a href="/demos/advanced-design-systems">
				<span class="label"><span class="icon"><IconMail /></span> See a demo of my work</span
				><IconChevronRight />
			</a>
		</li>
		<li>
			<a href="#">
				<span class="label"><span class="icon"><IconMail /></span> View my detailed CV</span
				><IconChevronRight />
			</a>
		</li>
		<li>
			<a href="mailto:gene.armstrong.hello@gmail.com">
				<span class="label"><span class="icon"><IconMail /></span> Get in touch with me</span
				><IconChevronRight />
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
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		@media (min-width: 640px) {
			min-width: 480px;
			width: 40%;
		}
	}

	.intro {
		background: var(--theme-color-teal-800);
		padding: 3rem 3rem 2rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	address {
		display: flex;
		justify-content: flex-end;
		padding-top: 2rem;
		padding-right: 1rem;
		align-items: center;
	}

	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		overflow: hidden;
		position: relative;

		@media (min-width: 640px) {
			width: 70px;
			height: 70px;
		}

		img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}

	.byline {
		margin-right: 1.5rem;
		line-height: 1.5;
		text-align: right;
	}

	ul {
		margin: 0;
		padding: 0;
		background: var(--theme-color-teal-900);
		list-style: none;
	}

	li {
		a {
			display: flex;
			// font-weight: bold;
			text-decoration: none;
			padding: 1.5rem 3rem 1.25rem;
			border-style: solid;
			border-color: var(--theme-color-teal-500);
			border-width: 0;
			border-top-width: 1px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 1;

			.label {
				display: flex;
				align-items: center;
			}

			.icon {
				margin-right: 0.75rem;
			}
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
		animation-duration: 20s;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(0.42, 0.2, 0.58, 0.8);
		stroke: var(--theme-color-orange);
		stroke-width: 1;
		stroke-linecap: round;
		fill: none;
	}

	.orbit-group:nth-of-type(odd) .orbit {
		animation-direction: reverse;
		animation-duration: 30s;
		animation-delay: -10s;
	}
</style>
