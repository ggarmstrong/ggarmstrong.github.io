<script lang="ts">
	import IconChevronRight from '$components/icons/IconChevronRight.svelte';
	export let href: string;
</script>

<li>
	<a {href}>
		<span class="label">
			<span class="icon">
				<slot name="icon" />
			</span>
			<slot />
		</span>
		<IconChevronRight />
	</a>
</li>

<style lang="scss">
	li {
		border-style: solid;
		border-color: var(--theme-color-teal-500);
		border-width: 0;
		border-top-width: 1px;
		width: 100%;

		&:first-of-type {
			border-top-width: 0;
		}
	}

	a {
		display: flex;
		text-decoration: none;
		padding: 1.5rem var(--theme-padding) 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 1;
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
		&:hover,
		&:focus,
		&:active {
			text-decoration: underline;
			outline: 0;
		}
	}

	.label {
		display: flex;
		align-items: center;
	}

	.icon {
		margin-right: 0.75rem;
	}
</style>
