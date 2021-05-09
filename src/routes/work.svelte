<script>
	import TimelineItem from '$lib/timelineItem.svelte';

	const timelineItems = [
		{
			id: 1,
			date: 'Summer 2020',
			title: 'Public Cloud Administrator',
			company: 'Public Cloud Team  @ Scotiabank',
			description:
				'Learnt a lot about devops process, docker, managing cloud + storage resource planning.'
		},
		{
			id: 2,
			date: 'Summer 2019',
			title: 'Software Engineer Intern',
			company: "The 'Innovation Squad' @ Scotiabank",
			description:
				'I programmed in Kotlin, built microservices, and worked on a reinforcement learning model to infer anomalies in trading platform traffic data.'
		},
		{
			id: 3,
			date: 'Fall 2019',
			title: 'Jr. Programmer',
			company: 'Payments Modernization Team @ Scotiabank',
			description:
				'A lot of microservice development in Java, usually facilitating the migration of process & data onto newly designed systems.'
		},
		{
			id: 4,
			date: 'Summer 2018',
			title: 'Customer Engagement Intern',
			company: 'Customer Success Team @ Survalent',
			description:
				"Provided e-learning webinars for existing customers that helped two initiatives: customer investment & commitment into Survalent products, and increased engagement on Survalent's cusotmer collaboration platform."
		}
	];
</script>

<svelte:head>
	<title>{'nicks.rodeo'}/work</title>
</svelte:head>

<section class="timeline">
	{#each timelineItems as { date, title, company, description }}
		<TimelineItem {date} {title} {company} {description} />
	{/each}
</section>

<style>
</style>
