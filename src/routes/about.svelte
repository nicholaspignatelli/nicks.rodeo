<script>
	export let aboutBlurb = `Here are five random facts about me:`;
	export let languages = ['javascript', 'typescript', 'c', 'java', 'kotlin', 'python'];
	export let frameworksAndTools = [
		'jsx',
		'jest',
		'react',
		'svelte',
		'sapper',
		'vert.x',
		'kafka',
		'elasticsearch',
		'mongodb',
		'node',
		'express',
		'graphql',
		'gatsby.js',
		'gradle',
		'slack',
		'jira',
		'trello',
		'monday',
		'mockito',
		'sveltkejs/kit'
	];
	export let competencies = [
		'object oriented programming',
		'functional programming',
		'systems design',
		'SOLID principles',
		`test-driven development`,
		'agile development'
	];
</script>

<svelte:head>
	<title>About Nick Pignatelli</title>
</svelte:head>
<div>
	<article class="contentBg">
		<div>
			<div>
				<h4>{@html aboutBlurb}</h4>
				<div class="facts">
					<p>1.&nbsp;&nbsp;I grew up in the Greater Toronto Area</p>
					<p>2.&nbsp;&nbsp;People describe me as easy to get along with.</p>
					<p>
						3.&nbsp;&nbsp;I have a strong affinity towards a functional & atomic approach to solving
						problems.
					</p>
					<p>
						4.&nbsp;&nbsp;My favourite passtimes right now are playing guitar & making yummy food.
					</p>
					<p>
						5.&nbsp;&nbsp;I drove across Canada to move to Vancouver (P.S. check out our <a
							href="https://youtube.com"
							target="_blank">vlogs</a
						>).
					</p>
				</div>
			</div>
		</div>
	</article>

	<article class="contentBg">
		<div>
			<!-- languages -->
			<div>
				<h4 style="margin-left: 0;">languages</h4>
				<div class="tags">
					{#each languages.sort() as language}
						<p class="tag">{language}</p>
					{/each}
				</div>
			</div>
			<!-- frameworks,tools -->
			<div>
				<h4 style="margin-left: 0;">frameworks, tools</h4>
				<div class="tags">
					{#each frameworksAndTools.sort() as tool}
						<p class="tag">{tool}</p>
					{/each}
				</div>
			</div>
			<!-- some other competencies -->
			<div>
				<h4 style="margin-left: 0;">some other competencies</h4>
				<div class="tags">
					{#each competencies.sort() as competency}
						<p class="tag">{competency}</p>
					{/each}
				</div>
			</div>
		</div>
	</article>
</div>

<style>
	h4 {
		margin-left: 0;
	}
	article {
		padding: 1rem 1.72rem 1.9rem;
		margin: 1rem 1.72rem 1.9rem;
		max-width: 48rem;
		box-shadow: 0 0.72rem 1.38rem -0.28rem rgba(0, 0, 0, 0.28);
	}
	.facts {
		margin: 1rem 1.72rem 1.9rem;
	}
	.tag {
		letter-spacing: 0.019rem;
		border-radius: 1.38rem;
		background-color: hsla(204, 47%, 25%, 0.19);
		text-align: center;
		padding: 0.18rem 0.76rem;
		margin: 0.19rem 0.72rem;
		display: inline;
		margin-bottom: 0.55rem;
		box-shadow: 0 0.11rem 0.16rem -0.06rem hsla(204, 47%, 25%, 0.19);
	}
	.tags {
		display: flex;
		flex-direction: row;
		max-width: 100%;
		flex-wrap: wrap;
		justify-content: left;
	}
</style>
