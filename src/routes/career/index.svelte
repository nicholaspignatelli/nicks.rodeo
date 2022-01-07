<!-- CAREER -->
<script context="module">
    // fetch content from .json content file
    export async function load({ fetch }) {
        const res = await fetch("/career.json");
        const { careerItems } = await res.json();

        if (res.ok) {
            return {
                props: { careerItems },
            };
        }

        return {
            status: res.status,
            error: new Error("Could not fetch portfolio items. :("),
        };
    }
</script>

<script>
    export let careerItems;
</script>

<h2>CAREER</h2>
{#each careerItems as { job_title, organization, duration, key_technologies, details }}
    <div>
        <p class="text_small">{duration}</p>
        <h3>{job_title}</h3>
        <p class="h5"><i>@ {organization}</i></p>
        <h6>
            {#each key_technologies.sort() as tool}
                {tool},&nbsp;
            {/each}
        </h6>
        {#each details as detail}
            <li class="li">{detail}</li>
        {/each}
        <br />
    </div>
{/each}
