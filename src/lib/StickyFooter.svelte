<script>
	import SendIcon from '$lib/vectors/SendIcon.svelte';
	import DownloadDocumentIcon from '$lib/vectors/DownloadDocumentIcon.svelte';
	import GithubIcon from '$lib/vectors/GithubIcon.svelte';
</script>

<ul class="row">
	<li>
		<a href="/">
			<DownloadDocumentIcon />
		</a>
	</li>

	<li>
		<a href="https://github.com/nicholaspignatelli" target="_blank">
			<GithubIcon />
		</a>
	</li>

	<li>
		<a href="mailto:nickpignatelli@icloud.com">
			<SendIcon />
		</a>
	</li>
</ul>

<style>
	.row {
		bottom: 0;
		right: 0;
		justify-content: space-evenly;
		position: fixed;
		margin: auto;
	}
	ul {
		margin: 0;
		padding: 0;
		justify-content: space-evenly;
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
		float: left;
	}
	a {
		text-decoration: none;
		padding: 1.91rem 1.38rem;
		display: block;
	}
</style>
