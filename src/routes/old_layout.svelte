<script>
	import Nav from '../components/Nav.svelte';
	import StickyFooter from '../components/StickyFooter.svelte';
	export let segment;
	export const route = segment;
</script>

<div id="bgWrapper" />

<Nav {segment} />
<div>
	<main>
		{#if segment}
			<h4>/{segment}</h4>
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
	#bgWrapper {
		background: repeating-linear-gradient(
			56deg,
			hsla(52, 42%, 71%, 0.38),
			hsla(204, 47%, 75%, 0.38) 0.38rem,
			hsla(204, 47%, 75%, 0.38) 0.38rem,
			hsla(52, 42%, 71%, 0.38) 0.52rem
		);
		height: 100%;
		position: fixed;
		width: 100%;
		z-index: -1;
	}
</style>
