<svelte:head>
	<title>About</title>
</svelte:head>

<h1>/about&nbsp;&nbsp;🤔</h1>

<article class="product-card">
	<div class="product-card__container">
		<div class="product-card__content">
			<h2 class="product-card__title">languages</h2>
			<p class="product-card__text">
				C, HTML, CSS, Javascript, Typescript, Kotlin
			</p>
		</div>
		<div class="product-card__content">
			<h2 class="product-card__title">frameworks & other tools</h2>
			<p class="product-card__text">
				JSX, Jest, React, Svelte, Sapper, Vert.x, Kafka, elasticsearch,
				MongoDB, node, express, graphql, gatsby.js, slack, JIRA, Trello,
				monday
			</p>
		</div>

		<div class="product-card__content">
			<h2 class="product-card__title">technical competencies</h2>
			<p class="product-card__text">
				object oriented programming, functional programming, systems
				design, SOLID Principles, Test-Driven Development,
			</p>
		</div>
	</div>
</article>

<style>
	.product-card {
		max-width: 100%;

		display: flex;
		margin: 1rem;
		position: relative;
		overflow: hidden;
		/* box-shadow: 0 0.8rem 2.4rem -1.4rem rgba(0, 0, 0, 0.5); */
		display: flex;
	}

	.product-card__content {
		width: 98%;
		padding: 1.6rem 2rem 1rem 1rem;
		box-shadow: 0 0.8rem 2.4rem -1.4rem rgba(0, 0, 0, 0.5);
	}
	.product-card__title {
		margin: 1rem 0;
	}
	.product-card__text {
		margin: 1rem 0;
		color: #332235;
	}
	.product-card__text:not(:last-child) {
		margin-bottom: 2.6rem;
	}

	h1 {
		text-align: center;
		font-size: clamp(3.2rem, 8vw, 3.5rem);
	}
	h2 {
		font-size: 1.8rem;
	}
	h5 {
		font-size: 1.27rem;
		letter-spacing: 0rem;
	}
</style>
