<script>
	import PortfolioItem from "../components/portfolioItem.svelte";

	const portfolioItems = [
		{
			id: 1,
			name: "nicks.rodeo",
			summary: `If the internet is a Wild Wild West, and a rodeo is a <strong>demonstration of cowboy skills...</strong><br />then couldn't my personal website be a <code>.rodeo</code> domain?<br /><br />Whether you find the branding clever or silly, you can checkout the repo <a href="https://github.com/nicholaspignatelli/nicks.rodeo" target="_blank">here</a> !`,
			footerDescription: "personal website and portfolio",
			tags: ["svelte", "sapper", "node", "html", "css", "js"],
		},
		{
			id: 2,
			name: "mern-todo-app",
			summary: `A simple web app that allows for the creation, reading, updating, and deletion of a To Do list and it's tasks.`,
			footerDescription: "MERN Stack CRUD App",
			tags: ["react.js", "mongodb", "node", "express", "axios", "js"],
		},
		{
			id: 3,
			name: "virtual-keyboard",
			summary: `Software peripherals from the land of vanilla JS.`,
			footerDescription: "qwerty keyboard for the browser",
			tags: ["svelte", "sapper", "node", "html", "css", "js"],
		},
		{
			id: 4,
			name: "virtual-keyboard",
			summary: `Software peripherals from the land of vanilla JS.`,
			footerDescription: "qwerty keyboard for the browser",
			tags: ["svelte", "sapper", "node", "html", "css", "js"],
		},
		{
			id: 5,
			name: "You're a Huge Tank",
			summary: `Software peripherals from the land of vanilla JS.`,
			footerDescription: "buddy",
			tags: ["svelte", "sapper", "node", "html", "css", "js"],
		},
	];
</script>

<svelte:head>
	<title>{"nicks.rodeo"}/portfolio</title>
</svelte:head>

<h1>/portfolio&nbsp;&nbsp;🧑‍💻</h1>

<div class="portfolio">
	{#each portfolioItems as { name, summary, footerDescription, tags }}
		<PortfolioItem {name} {summary} {footerDescription} {tags} />
	{/each}
</div>

<style>
	.portfolio {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin: auto;
	}
	h1 {
		text-align: center;
	}
</style>
