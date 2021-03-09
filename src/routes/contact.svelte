<script>
	import ContactItem from "../components/contactItem.svelte";

	const contactItems = [
		{
			id: 1,
			name: "647&nbsp;&nbsp;992&nbsp;&nbsp;2732",
			summary: `If you would like to call, or text`,
		},
		{
			id: 2,
			name: "nickpignatelli@icloud.com",
			summary: `Also, my email address is`,
		},
		{
			id: 3,
			name: "thanks for stopping by!",
			summary: `One last thing...`,
		},
	];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div>
	{#each contactItems as { name, githubLink, summary, footerDescription, tags }}
		<ContactItem {name} {summary} />
	{/each}
</div>

<style>
</style>
