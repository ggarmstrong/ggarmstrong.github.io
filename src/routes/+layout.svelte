<script>
	const ssr = false;
</script>

<svelte:head>
	<title>Gene Armstrong - Software Developer</title>
	<link rel="preload" href="/fonts/PPMori-Regular.woff2" />
	<link rel="preload" href="/fonts/PPMori-SemiBold.woff2" />
	<link rel="preload" href="/fonts/PPMori-RegularItalic.woff2" />
</svelte:head>

<main><slot /></main>

<style type="scss">
	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-SemiBold.woff2') format('woff2');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-Regular.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-RegularItalic.woff2') format('woff2');
		font-weight: normal;
		font-style: italic;
		font-display: swap;
	}

	:root {
		height: 100%;

		--theme-color-orange-500: #c23816;
		--theme-color-orange: var(--theme-color-orange-500);
		--theme-color-teal-100: #d1e1df;
		--theme-color-teal-300: #93b8b4;
		--theme-color-teal-500: #052924;
		--theme-color-teal-800: #021715;
		--theme-color-teal-900: #000a07;
		--theme-color-teal: var(--theme-color-teal-500);
		--theme-icon-stroke: 32;
		--theme-padding: 1.5rem;

		@media (min-width: 640px) {
			--theme-padding: 3rem;
		}
	}

	:global(body) {
		font-size: 1rem;
		line-height: 1.5;
		background: var(--theme-color-teal-500);
		color: var(--theme-color-teal-300);
		font-family: 'PP Mori', sans-serif;
		margin: 0;
		height: 100%;
	}

	:global(body > div:not([style])) {
		height: 100%;
	}

	:global(a) {
		color: var(--theme-color-teal-300);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		color: var(--theme-color-teal-100);
		line-height: 1;
		margin-top: 0;
		margin-bottom: 0.5em;
	}

	:global(h1) {
		font-size: 3rem;
		@media (min-width: 640px) {
			font-size: 4rem;
		}
	}

	:global(p) {
		margin-top: 0;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	main {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		height: 100%;

		@media (min-width: 960px) {
			flex-direction: row;
			justify-content: flex-start;
		}
	}
</style>
