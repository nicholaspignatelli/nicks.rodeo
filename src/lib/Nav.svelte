<script>
	export let segment;
</script>

<nav class="contentBg">
	<!-- logo -->
	<ul class="menu">
		<li>
			<a sveltekit:prefetch href=".">nicks.rodeo</a>
		</li>
	</ul>
	<ul class="menu">
		<li>
			<a sveltekit:prefetch href="about">/about</a>
		</li>

		<li>
			<a sveltekit:prefetch href="portfolio">/portfolio</a>
		</li>
		<li>
			<a sveltekit:prefetch href="work">/work</a>
		</li>
		<li>
			<a sveltekit:prefetch href="contact">/contact</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		height: min-content;
		display: flex;
		justify-content: space-between;
		margin: auto;
	}
	.menu {
		display: flex;
		flex-direction: row;
	}
	@media only screen and (max-width: 375px) {
		nav {
			position: fixed;
			bottom: 0;
			margin-bottom: 0;
			font-size: 0.8em;
			z-index: 2;
		}
	}
	ul {
		margin: 0;
		padding: 0;
		justify-content: space-around;
	}
	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		padding: 0 0.4rem;
		/* float: left; */
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	a:active {
		font-weight: 700;
		color: green;
	}
	a:hover {
		font-weight: 700;
		transition: 0.1s;
	}
</style>
