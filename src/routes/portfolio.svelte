<script>
	import PortfolioItem from "../components/portfolioItem.svelte";

	const portfolioItems = [
		{
			id: 1,
			name: "nicks.rodeo",
			githubLink: "https://github.com/nicholaspignatelli/nicks.rodeo",
			summary: `If the internet is a Wild Wild West, and a rodeo is a <strong>demonstration of cowboy skills...</strong><br />then couldn't my personal website be a <code>.rodeo</code> domain?`,
			footerDescription: "personal website and portfolio",
			tags: ["svelte", "sapper", "node", "html", "css", "js"],
		},
		{
			id: 2,
			name: "mern-todo-app",
			githubLink: "https://github.com/nicholaspignatelli/mern-todo-app",
			summary: `A simple web app that allows for the creation, reading, updating, and deletion of a To Do list and it's tasks.<br> `,
			footerDescription: "MERN Stack CRUD App",
			tags: [
				"react.js",
				"mongodb",
				"node",
				"express",
				"axios",
				"html",
				"css",
				"js",
			],
		},
		{
			id: 3,
			name: "virtual-keyboard",
			githubLink:
				"https://github.com/nicholaspignatelli/virtual-keyboard",
			summary: `A keyboard that pops up in the browser. A classic software peripheral from the land of vanilla JS.`,
			footerDescription: "qwerty keyboard for the browser",
			tags: ["html", "css", "js", "html", "css", "js"],
		},
	];
</script>

<svelte:head>
	<title>{"nicks.rodeo"}/portfolio</title>
</svelte:head>

<h1>/portfolio&nbsp;&nbsp;🧑‍💻</h1>

<div class="portfolio">
	{#each portfolioItems as { name, githubLink, summary, footerDescription, tags }}
		<PortfolioItem
			{name}
			{githubLink}
			{summary}
			{footerDescription}
			{tags}
		/>
	{/each}
	<div class="footer">&nbsp;</div>
</div>

<style>
	.portfolio {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		margin: auto;
	}
	.footer {
		margin-bottom: 5em;
		width: 100%;
	}
	h1 {
		text-align: center;
		font-size: 3.2em;
	}
</style>
