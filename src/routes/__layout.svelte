<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import StickyFooter from '$lib/StickyFooter.svelte';
	export let segment;
	let route = segment;
</script>

<!-- <div id="bgWrapper" /> -->

<Nav {segment} />
<div>
	<main>
		{#if segment}
			<h4>/{route}</h4>
		{:else}
			<h4>/you-landed</h4>
		{/if}
	</main>
	<main>
		<slot />
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
