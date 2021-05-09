<script>
	export let name = '';
	export let footerDescription = '';
	export let summary = ``;
	export let tags = [''];
	export let githubLink = '';
</script>

<section class="portfolioItem contentBg">
	<div style="display:flex; justify-content: space-between;">
		<h4 style="margin-left: -0.19rem;">{name}</h4>
		<h4><a href={githubLink} target="_blank">#</a></h4>
	</div>
	<p class="text_small">{footerDescription}</p>
	<p>{@html summary}</p>
	<div class="marquee">
		<span>
			<div class="tags">
				{#each tags as tag}
					<p class="tag text_small">{tag}</p>
				{/each}
				{#each tags as tag}
					<p class="tag text_small">{tag}</p>
				{/each}
			</div>
		</span>
	</div>
</section>

<style>
	a {
		text-decoration: none;
		border-radius: 1rem;
		padding: 0 0.38rem 0.1rem;
		border: 0.16rem solid hsla(204, 47%, 12%, 1);
	}
	a:hover {
		cursor: pointer;
	}
	section {
		padding: 1rem 1.72rem 1.9rem;
		margin: 1rem 1.72rem 1.9rem;
		max-width: 28.6rem;
	}
	.tag {
		letter-spacing: 0.019rem;
		border-radius: 1.38rem;
		text-align: center;
		padding: 0.19rem 0.38rem;
		margin: 0.19rem 0.38rem;
		display: inline;
		box-shadow: 0 0.11rem 0.16rem -0.06rem hsla(204, 47%, 75%, 1);
	}
	.tags {
		display: flex;
		flex-direction: row;
		overflow-x: hidden;
		max-width: 100%;
	}
	.marquee {
		white-space: nowrap;
		overflow: hidden;
		border-radius: 1.38rem;
	}
	.marquee span {
		display: inline-block;
		animation: marquee 30s ease-out infinite;
		transition-timing-function: cubic-bezier(1, 0, 0, 1);
	}
	@keyframes marquee {
		0% {
			transform: translate(-33%, 0);
			transition-timing-function: cubic-bezier(1, 0, 0, 1);
		}
		50% {
			transform: translate(-5%, 0);
			transition-timing-function: cubic-bezier(1, 0, 0, 1);
		}
		100% {
			transform: translate(-20%, 0);
			transition-timing-function: cubic-bezier(1, 0, 0, 1);
		}
	}
</style>
