import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;


// import Adapter from "@sveltejs/adapter-netlify";
// const adapter = Adapter('@sveltejs/adapter-netlify');
// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte',
// 		adapter: adapter,
// 	}
// };