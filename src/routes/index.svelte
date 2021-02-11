<svelte:head>
	<title>nicks.rodeo/</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<p>Hi there, and thanks for stopping by!&nbsp;:-) My name is</p>
<h1>&nbsp;Nick<br />&nbsp;&nbsp;&nbsp;Pignatelli</h1>
<p>
	& I am a fullstack developer who is on a mission <br />to
	<strong>universalize technology, deliver value, </strong>and
	<strong>elate society.</strong>
</p>
<br />

<a class="button1" href="/about"> Check Me Out </a>

<style>
	h1 {
		font-size: 9em;
		line-height: 0.86;
		margin: 0 0 0.5em -0.06em;
	}

	p {
		font-size: 17px;
		letter-spacing: 0.03em;
		margin: 1em auto;
	}

	.button1 {
		background-color: #5555bbaa;
		/* border: 0.1em solid #228912; */
		box-shadow: 0px 0.3em 2em 0.25em #5555bb88;
		color: #f8f8ff;
		/* display: inlin; */
		margin: 0 0.3em 0.3em 0;
		padding: 0.35em 1.2em;
		text-align: center;
		text-decoration: none;
	}

	.button1:hover {
		background-color: red;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 4.8em;
		}
	}

	@media (max-width: 375px) {
		h1 {
			font-size: 3.8em;
		}
	}
</style>
