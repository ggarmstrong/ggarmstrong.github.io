import adapter from "@sveltejs/adapter-static"; 
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
        }),
        paths: {
            base: dev ? '' : '',
        },
		alias: {
			'$routes': './src/routes',
			'$components': './src/lib/components',
		}
	}
};

export default config;
