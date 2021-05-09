<script>
	export let segment;
</script>

<nav class="contentBg">
	<!-- logo -->
	<ul class="menu">
		<li>
			<a aria-current={segment === undefined ? 'page' : undefined} href=".">nicks.rodeo</a>
		</li>
	</ul>

	<!-- nav bar -->
	<ul class="menu">
		<li>
			<a aria-current={segment === '/about' ? 'page' : undefined} href="about">/about</a>
		</li>

		<li>
			<a rel="prefetch" aria-current={segment === 'portfolio' ? 'page' : undefined} href="portfolio"
				>/portfolio</a
			>
		</li>
		<li>
			<a rel="prefetch" aria-current={segment === 'work' ? 'page' : undefined} href="work">/work</a>
		</li>
		<li>
			<a rel="prefetch" aria-current={segment === 'contact' ? 'page' : undefined} href="contact"
				>/contact</a
			>
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
	[aria-current] {
		position: relative;
		display: inline-block;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1rem);
		height: 0.23rem;
		background-color: #ff3322;
		display: block;
		bottom: 0.48rem;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
