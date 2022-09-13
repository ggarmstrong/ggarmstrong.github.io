<svelte:head>
	<link rel="preload" href="/fonts/PPMori-Regular.woff2" />
	<link rel="preload" href="/fonts/PPMori-SemiBold.woff2" />
	<link rel="preload" href="/fonts/PPMori-RegularItalic.woff2" />
</svelte:head>

<main><slot /></main>

<style type="scss">
	:root {
		height: 100%;

		--theme-color-orange-500: #c23816;
		--theme-color-orange: var(--theme-color-orange-500);
		--theme-color-teal-100: #d1e1df;
		--theme-color-teal-300: #93b8b4;
		--theme-color-teal-500: #042f2b;
		--theme-color-teal-600: #052924;
		--theme-color-teal-800: #021715;
		--theme-color-teal-900: #000a07;
		--theme-color-teal: var(--theme-color-teal-500);

		--theme-icon-stroke: 32;
	}

	:global(body) {
		font-size: 1rem;
		line-height: 1.5;
		background: var(--theme-color-teal-600);
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
		font-size: 4rem;
	}

	:global(p) {
		// font-size: 1.2rem;
		// line-height: 1.5;
		margin-top: 0;
		&:last-of-type {
			margin-bottom: 0;
		}
	}

	main {
		// max-width: 640px;
		display: flex;
		flex-direction: column;
		height: 100%;
		// margin-left: auto;
		// margin-right: auto;
		// background: rgb(194, 56, 22);
		// transform: translateX(-50%);

		@media (min-width: 640px) {
			flex-direction: row;
		}
	}

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
</style>
