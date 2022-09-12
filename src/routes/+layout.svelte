<main><slot /></main>

<style type="scss">
	// :root {
	// }

	:global(body) {
		background: #052924;
		color: #ddd;
		font-family: 'PP Mori';
		margin: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		line-height: 1;
		// margin-bottom: 1em;
	}

	:global(h1) {
		font-size: 4rem;
	}

	:global(p) {
		line-height: 1.6;
	}

	main {
		max-width: 640px;
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		// background: rgb(194, 56, 22);
		// transform: translateX(-50%);

		@media (min-width: 640px) {
			flex-direction: row;
		}
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-Extralight.woff2') format('woff2'),
			url('/fonts/PPMori-Extralight.woff') format('woff');
		font-weight: 100;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-ExtralightItalic.woff2') format('woff2'),
			url('/fonts/PPMori-ExtralightItalic.woff') format('woff');
		font-weight: 100;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-SemiBold.woff2') format('woff2'),
			url('/fonts/PPMori-SemiBold.woff') format('woff');
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-Regular.woff2') format('woff2'),
			url('/fonts/PPMori-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-SemiBoldItalic.woff2') format('woff2'),
			url('/fonts/PPMori-SemiBoldItalic.woff') format('woff');
		font-weight: 600;
		font-style: italic;
		font-display: swap;
	}

	@font-face {
		font-family: 'PP Mori';
		src: url('/fonts/PPMori-RegularItalic.woff2') format('woff2'),
			url('/fonts/PPMori-RegularItalic.woff') format('woff');
		font-weight: normal;
		font-style: italic;
		font-display: swap;
	}
</style>
