<script>
    export let name = "";
    export let footerDescription = "";
    export let summary = ``;
    export let tags = [""];
</script>

<section>
    <h2>{name}</h2>
    <p class="footer"><i>{footerDescription}</i></p>

    <p>{@html summary}</p>

    <div class="tags">
        {#each tags as tag}
            <p class="tag">{tag}</p>
        {/each}
    </div>
</section>

<style>
    h2 {
        margin-bottom: 0.618em;
    }
    section {
        padding: 2.4em 3.2em;
        border: 8px solid #f8f8ff;
        border-radius: 2.4em;
        max-width: min-content;
        margin-bottom: 3.2em;
    }
    p.footer {
        font-size: 0.718em;
        letter-spacing: 0.036em;
        margin-bottom: 2.618em;
    }
    p.tag {
        font-size: 0.82em;
        letter-spacing: 0.016em;
        border-radius: 3em;
        background-color: #f8f8ff;
        text-align: center;
        padding: 0.32em 0.92em 0.1em;
        display: inline;
        margin: 0.2em 0.32em;
    }
    .tags {
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        text-shadow: 0 0 4px 14px #f8f8ff;
        margin-left: -0.4em;
        max-width: 24em;
    }
</style>
