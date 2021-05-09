<script>
	import ContactItem from '$lib/contactItem.svelte';

	const contactItems = [
		{
			id: 1,
			name: '647&nbsp;&nbsp;992&nbsp;&nbsp;2732',
			summary: `If you would like to call, or text`
		},
		{
			id: 2,
			name: 'nickpignatelli@icloud.com',
			summary: `Also, my email address is`
		},
		{
			id: 3,
			name: 'thanks for stopping by!',
			summary: `One last thing...`
		}
	];
</script>

<svelte:head>
	<title>Contact Nick Pignatelli</title>
</svelte:head>

<div>
	{#each contactItems as { name, summary }}
		<ContactItem {name} {summary} />
	{/each}
</div>

<style>
	header {
		padding: 60px;
		text-align: center;
		background: #1abc9c;
		color: white;
		font-size: 30px;
	}
</style>
