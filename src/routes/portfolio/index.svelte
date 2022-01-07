<!-- PORTFOLIO -->
<script context="module">
    // fetch snippet from .json content file
    export async function load({ fetch }) {
        const res = await fetch("/portfolio.json");
        const { portfolioItems } = await res.json();

        if (res.ok) {
            return {
                props: { portfolioItems },
            };
        }

        return {
            status: res.status,
            error: new Error("Could not fetch portfolio items. :("),
        };
    }
</script>

<script>
    export let portfolioItems;
</script>

<h2>PORTFOLIO</h2>
{#each portfolioItems as { name, githubLink, summary, synopsis, tags }}
    <section>
        <p class="text_small">{synopsis.toUpperCase()}</p>
        <h3>{name}</h3>
        <h5>
            <i>
                {#each tags as tag}
                    {tag},&nbsp;
                {/each}
            </i>
        </h5>
        <p>{summary}</p>
        <a href={githubLink}><u>to repo</u></a>
    </section>
    <br />
{/each}
