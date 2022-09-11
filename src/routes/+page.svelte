<script>
	import BaseLayout from '$components/BaseLayout.svelte';
	// const orbits = [[<circle r="4" fill="blue" />, <circle r="4" fill="red" />]];
</script>

<BaseLayout>
	<h1>Gene Armstrong</h1>
	<h2>Software Developer</h2>
	<p>I have fun assembling, integrating, and evolving resiliant ui/ux design systems.</p>
	<p>
		I'm inspired by leaders in the field of modular component-driven product development and
		testing. I aim to bring design-system-first workflows into practice to help the companies I work
		with improve both the quality of their software products, as well as their overall brand
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
	<svg height="100" width="100" viewBox="0 0 100 100">
		<g transform="scale(2)" transform-origin="0 0">
			<!-- <circle cx="50" cy="50" r="10" stroke="white" stroke-width="1" fill="none" /> -->
			<!-- <circle cx="50" cy="50" r="21" stroke="white" stroke-width="1" fill="none" />
			<circle cx="50" cy="50" r="32" stroke="white" stroke-width="1" fill="none" />
			<circle cx="50" cy="50" r="43" stroke="white" stroke-width="1" fill="none" /> -->
			<!-- <circle cx="50" cy="50" r="54" stroke="white" stroke-width="1" fill="none" /> -->

			<!-- <circle cx="23.6" cy="50" r="4" fill="blue" class="planet" /> -->
			<!-- </g> -->
			<!-- {#each orbits as orbit, orbitIndex} -->

			<svg width="72" height="112" viewBox="0 0 72 112">
				<g transform="scale(0.5)" transform-origin="0 0">
					<rect y="102" width="72" height="10" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect width="72" height="8" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect y="11" width="72" height="16" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect x="27" y="30" width="45" height="69" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<rect y="30" width="24" height="69" rx="3" fill="#EEEEEE" fill-opacity="0.1" />
					<g opacity="0.5">
						<rect x="2" y="13" width="48" height="6" rx="2" fill="#7B7ECC" />
						<rect x="51" y="13" width="19" height="6" rx="2" fill="#7BCCC7" />
					</g>
				</g>
			</svg>

			<g>
				<!-- {#each Array(3) as _, ip} -->

				<circle r="4" fill="blue" class="planet" />
				<!-- {/each} -->
			</g>
			<!-- {/each} -->
			<!-- <circle cx="50" cy="50" r="10" fill="red" id="center" /> -->
			<!-- <g>
			<circle
				cx="50"
				cy="50"
				r="10"
				stroke="white"
				stroke-width="1"
				fill="none"
				id="layer1"
				clip-path="url(#clip1)"
			/>
			<clipPath id="clip1"> <use xlink:href="#layer1" /> </clipPath>
			<circle cx="39.5" cy="39.5" r="4" fill="blue" id="planet1" />
		</g>
		<g>
			<circle
				cx="50"
				cy="50"
				r="20"
				stroke="white"
				stroke-width="1"
				fill="none"
				id="layer2"
				clip-path="url(#clip2)"
			/>
			<clipPath id="clip2"> <use xlink:href="#layer2" /> </clipPath>
			<circle cx="28" cy="28" r="4" fill="blue" id="planet2" />
		</g> -->
		</g>
	</svg>
</BaseLayout>

<style>
	@keyframes orbit {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
	/* g {
		transform-origin: 50% 50%;
		animation: orbit 5s infinite linear;
	} */
</style>
