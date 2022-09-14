<script>
	import Avatar from '$components/intro/Avatar.svelte';
</script>

<address>
	<div>
		Gene Armstrong<br />
		Software Dev
	</div>
	<Avatar />
</address>

<style>
	address {
		display: flex;
		justify-content: flex-end;
		padding-top: 1.5rem;
		padding-right: 0.5rem;
		align-items: center;
	}

	div {
		margin-right: 1.5rem;
		line-height: 1.5;
		text-align: right;
	}
</style>
