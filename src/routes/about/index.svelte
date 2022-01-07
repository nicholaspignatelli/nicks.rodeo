<!-- ABOUT -->
<script context="module">
    export async function load({ fetch }) {
        const res = await fetch("/about.json");
        const { aboutItems } = await res.json();

        if (res.ok) {
            return {
                props: { aboutItems },
            };
        }

        return {
            status: res.status,
            error: new Error("Could not fetch portfolio items. :("),
        };
    }
</script>

<script>
    // import aboutItems from "$lib/about.svelte";
    export let aboutItems;
</script>

<h2>ALL ABOUT ME</h2>
{#each aboutItems as { education, objective_statement, competency_summary }}
    <div>
        <p class="h5">{competency_summary}</p>
    </div>
    <br />
    <div>
        <h2>EDUCATION</h2>

        <p class="text_small">MAJOR</p>
        <p class="h5">{education.major}</p>

        <p class="text_small">DEGREE</p>
        <p class="h5">{education.degree}</p>

        <p class="text_small">INSTITUTION</p>
        <p class="h5">{education.institution}</p>

        <p class="text_small">DURATION</p>
        <p class="h5">{education.graduation_date}</p>

        <p class="text_small">COURSES</p>
        {education.courses_completed}
    </div>
{/each}
