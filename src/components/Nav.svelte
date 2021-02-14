<script>
	export let segment;
</script>

<nav>
	<!-- logo -->
	<ul class="menu">
		<li>
			<a
				aria-current={segment === undefined ? "page" : undefined}
				href=".">nicks.rodeo</a
			>
		</li>
	</ul>

	<!-- nav bar -->
	<ul class="menu">
		<li>
			<a
				aria-current={segment === "about" ? "page" : undefined}
				href="about">/about</a
			>
		</li>

		<li>
			<a
				rel="prefetch"
				aria-current={segment === "portfolio" ? "page" : undefined}
				href="portfolio">/portfolio</a
			>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === "work" ? "page" : undefined}
				href="work">/work</a
			>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === "contact" ? "page" : undefined}
				href="contact">/contact</a
			>
		</li>
	</ul>
</nav>

<style>
	nav {
		padding: 0 0em;
		background: linear-gradient(90deg, #5555bbba, #5555bbda);
		color: #f8f8ff;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		margin: auto;
		margin-bottom: 2em;
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
		}
	}

	ul {
		margin: 0;
		padding: 0;
		justify-content: space-around;
		/* display: flex; */
	}

	/* clearfix */
	ul::after {
		content: "";
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
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: #aaffac;
		display: block;
		bottom: 16%;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
