<script>
	import Nucleus from '$components/galaxy/Nucleus.svelte';
	import Rings from '$components/galaxy/Rings.svelte';
	const size = 100;
	const sizeHalf = size / 2;
	// const rings = 5;
	// const orbitWidth = sizeHalf / rings;
</script>

<div>
	<svg viewBox="0 0 {size} {size}" preserveAspectRatio="xMidyMid slice">
		<Nucleus />
		<Rings {sizeHalf} />
	</svg>
</div>

<style lang="scss">
	div {
		position: relative;
		overflow: hidden;
		min-height: 15%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	svg {
		overflow: visible;
		width: 100%;
		height: auto;

		@media (min-width: 960px) {
			transform: scale(1.15);

			@media (max-width: 1200px) {
				height: 100%;
				width: auto;
			}
		}
	}
</style>
