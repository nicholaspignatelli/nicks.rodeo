<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import StickyFooter from '$lib/StickyFooter.svelte';
	export let segment;
</script>

<!-- <div id="bgWrapper" /> -->

<Nav />

<div>
	<main>
		<slot {segment} />
	</main>
</div>
<StickyFooter />

<style>
	main {
		display: flex;
		justify-content: center;
		margin: auto;
	}
</style>
