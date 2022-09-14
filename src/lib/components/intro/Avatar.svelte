<script>
	import { base } from '$app/paths';
</script>

<div>
	<img src="{base}/ggarmstrong-avatar.png" alt="Gene Armstrong - Software Developer" />
</div>

<style lang="scss">
	div {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		overflow: hidden;
		position: relative;

		@media (min-width: 640px) {
			width: 70px;
			height: 70px;
		}
	}

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
