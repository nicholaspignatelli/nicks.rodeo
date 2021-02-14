<script>
	import PortfolioItem from "../components/portfolioItem.svelte";
</script>

<svelte:head>
	<title>nicks.rodoe/portfolio</title>
</svelte:head>

<h1>/portfolio&nbsp;&nbsp;🧑‍💻</h1>

<div class="portfolio">
	<PortfolioItem />
	<PortfolioItem />
	<PortfolioItem /><PortfolioItem /><PortfolioItem /><PortfolioItem />
</div>

<style>
	.portfolio {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	h1 {
		text-align: center;
	}
</style>
