/** @type {import('@sveltejs/kit').Config} */
import Adapter from "@sveltejs/adapter-netlify";
const adapter = Adapter('@sveltejs/adapter-netlify');
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter,
	}
};

export default config;
