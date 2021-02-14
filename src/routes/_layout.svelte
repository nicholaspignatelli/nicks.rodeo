<script>
	import Nav from "../components/Nav.svelte";
	import StickyFooter from "../components/StickyFooter.svelte";
	export let segment;
</script>

<div id="bgWrapper" />
<Nav {segment} />
<div>
	<main>
		<slot />
	</main>
	<StickyFooter />
</div>

<style>
	@media only screen and (max-width: 375px) {
		div {
			display: flex;
			flex-direction: column;
		}

		main {
			max-width: 100%;
			order: 2;
		}
	}

	main {
		background-color: #c4c4fd99;
		box-shadow: 0px 0px 1em 1em #c4c4fd99;
		color: #242224;
		margin: auto;
		/* max-width: 56em; */
		padding: 2em 3.24em;
		position: relative;
		/* z-index: -1; */
	}

	#bgWrapper {
		background: repeating-linear-gradient(
			146deg,
			#faf9fc,
			#faf9fc 8px,
			#ffffff 8px,
			#ffffff 13px
		);
		background-repeat: repeat;
		height: 100%;
		position: fixed;
		width: 100%;
		z-index: -1;
	}
</style>
