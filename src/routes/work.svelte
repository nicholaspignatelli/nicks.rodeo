<script>
	import TimelineItem from "../components/timelineItem.svelte";

	const timelineItems = [
		{
			id: 1,
			date: "Summer 2020",
			title: "Public Cloud Administrator",
			company: "Public Cloud Team  @ Scotiabank",
			description:
				"Learnt a lot about devops process, docker, managing cloud + storage resource planning.",
		},
		{
			id: 2,
			date: "Summer 2019",
			title: "Software Engineer Intern",
			company: "'Innosquad' @ Scotiabank",
			description:
				"I programmed in Kotlin, built microservices, and worked on a reinforcement learning model to infer anomalies in trading platform traffic data.",
		},
		{
			id: 3,
			date: "Fall 2019",
			title: "Jr. Programmer",
			company: "Payments Modernization Team @ Scotiabank",
			description:
				"A lot of microservice development in Java, usually facilitating the migration of process & data onto newly designed systems.",
		},
		{
			id: 4,
			date: "Summer 2018",
			title: "Customer Engagement Intern",
			company: "Customer Engagement Intern @ Survalent",
			description:
				"It was a fun time! I programmed in Kotlin, built microservices, worked on a reinforcement learning model to infer anomalies in trading platform traffic data.",
		},
	];
</script>

<svelte:head>
	<title>{"nicks.rodeo"}/work</title>
</svelte:head>

<h1>/work&nbsp;&nbsp;🧑‍💻</h1>

<section class="timeline">
	{#each timelineItems as { date, title, company, description }}
		<TimelineItem {date} {title} {company} {description} />
	{/each}
</section>

<style>
	.timeline {
		width: 100%;
		max-width: 56rem;
		margin: 5rem auto;
	}

	h1 {
		text-align: center;
		font-size: 3.2em;
	}
	h1:after {
		margin-bottom: 0;
		padding: 0;
		line-height: 0;
	}
</style>
