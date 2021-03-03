<svelte:head>
	<title>nicks.rodeo/</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<article class="product-card">
	<img
		class="product-card__image"
		src="coat-of-arms.png"
		alt="vector drawing that looks similar to me"
	/>
	<div class="product-card__container">
		<p>Hi there, and thanks for stopping by!&nbsp;:-) My name is</p>
		<h1>&nbsp;Nick<br />&nbsp;&nbsp;&nbsp;Pignatelli</h1>
		<p>
			& I am a fullstack developer who is on a mission <br />to
			<strong>universalize technology, drive value, </strong>and help to
			<br />make the
			<strong>world a better place.</strong>
		</p>
		<br />

		<a class="button1" href="/about"> Check Me Out </a>
	</div>
</article>

<style>
	h1 {
		font-size: 9rem;
		line-height: 0.86;
	}

	p {
		font-size: 17px;
		letter-spacing: 0.03em;
		margin: 1.6em 0;
		justify-content: left;
	}

	.button1 {
		background-color: #5555bbaa;
		box-shadow: 0px 0.3em 2em 0.25em #5555bb88;
		color: #f8f8ff;
		margin: 0 0.3em 0.3em 0;
		padding: 0.35em 1.2em;
		text-align: center;
		text-decoration: none;
		width: max-content;
	}

	.button1:hover {
		background-color: red;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 4.8em;
		}
		.product-card__image,
		.product-card:before {
			display: none;
		}
	}

	@media (max-width: 375px) {
		h1 {
			font-size: 3.8em;
		}
		.product-card__image,
		.product-card:before {
			display: none;
		}
	}
	.product-card {
		max-width: 100%;

		display: flex;
		/* margin: 1rem; */
		position: relative;
		overflow: hidden;

		display: flex;
	}
	.product-card:before {
		position: absolute;
		content: "";
		width: 46%;
		height: 98%;
		background: #f9f999aa;
		border-radius: 1.56rem;

		box-shadow: 0 0.8rem 2.4rem -1.4rem rgba(0, 0, 0, 0.5);
	}
	.product-card__image {
		vertical-align: top;
		width: 40%;
		height: auto;
		margin: 5% 5% 0;
		position: relative;
		z-index: 2;
		align-self: center;
	}
	.product-card__content {
		width: 98%;
		padding: 1.6rem 2rem 1rem 1rem;
		box-shadow: 0 0.8rem 2.4rem -1.4rem rgba(0, 0, 0, 0.5);
	}
	.product-card__container {
		align-self: center;
	}
</style>
