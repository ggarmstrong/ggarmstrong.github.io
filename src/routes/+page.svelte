<script>
	import BaseLayout from '$components/BaseLayout.svelte';
	// const orbits = [[<circle r="4" fill="blue" />, <circle r="4" fill="red" />]];
</script>

<BaseLayout>
	<div class="intro">
		<h1>Gene Armstrong</h1>
		<h2>Software Developer</h2>
		<p>I have fun assembling, integrating, and evolving resiliant ui/ux design systems.</p>
		<p>
			I'm inspired by leaders in the field of modular component-driven product development and
			testing. I aim to bring design-system-first workflows into practice to help the companies I
			work with improve both the quality of their software products, as well as their overall brand
			cohesion.
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
		<svg width="100%" viewBox="0 0 100 100">
			<!-- <g transform="scale(2)" transform-origin="0 0"> -->
			<circle
				cx="50"
				cy="50"
				r="20"
				stroke="#333"
				stroke-width="0.25"
				stroke-dasharray="1"
				fill="none"
			/>
			<!-- <circle cx="50" cy="50" r="21" stroke="white" stroke-width="1" fill="none" />
			<circle cx="50" cy="50" r="32" stroke="white" stroke-width="1" fill="none" />
			<circle cx="50" cy="50" r="43" stroke="white" stroke-width="1" fill="none" /> -->
			<!-- <circle cx="50" cy="50" r="54" stroke="white" stroke-width="1" fill="none" /> -->

			<!-- <circle cx="23.6" cy="50" r="4" fill="blue" class="planet" /> -->
			<!-- </g> -->
			<!-- {#each orbits as orbit, orbitIndex} -->

			<g class="page">
				<svg width="72" height="112" viewBox="0 0 72 112" fill="none">
					<g class="page-inner">
					<rect y="102" width="72" height="10" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect width="72" height="8" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect x="27" y="30" width="45" height="69" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect y="30" width="24" height="69" rx="3" fill="#EEEEEE" fill-opacity="0.1" />

					<rect y="11" width="72" height="16" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<g opacity="0.6">
						<rect
							x="2.25"
							y="13.25"
							width="47.5"
							height="5.5"
							rx="2.75"
							stroke="#7B7ECC"
							stroke-width="0.5"
						/>
						<rect x="51" y="13" width="19" height="6" rx="3" fill="#9F7BCC" />
						<rect
							x="51.25"
							y="20.25"
							width="18.5"
							height="5.5"
							rx="2.75"
							stroke="#9F7BCC"
							stroke-width="0.5"
						/>
						<rect x="3" y="20" width="12" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="16" y="20" width="8" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="25" y="20" width="10" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="36" y="20" width="12" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="3" y="22.8125" width="6" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="10" y="22.8125" width="16" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="27" y="22.8125" width="12" height="2.25" rx="1" fill="#7BA5CC" />
						<rect x="40" y="22.8125" width="6" height="2.25" rx="1" fill="#7BA5CC" />
					</g>
					<!-- search bar -->
				</svg>
			</g>

			<g class="orbit">
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="#9F7BCC" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="red" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
				<g class="planet">
					<rect x="50" y="50" width="19" height="6" rx="3" fill="blue" />
				</g>
			</g>
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
			// background-color: green;
		}
	}
	.orbit {
		animation: orbit 5s infinite linear;
	}

	// .planet {
	// 	@for $i from 0 through 9 {
	// 		&:nth-child(n + #{$i}) {
	// 			transform: rotate(#{$i * (360 / $i)}deg);
	// 		}
	// 	}
	// }

	.page {
		transform: scale(0.25);
		// transform-origin: 50% 50%;
	}

	// .page-inner {
	// 	transform: translate(-50%, -50%);
	// 	transform-origin: 50% 50%;
	// }
</style>
