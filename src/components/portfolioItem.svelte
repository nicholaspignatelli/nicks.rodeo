<script>
    export let name = "";
    export let footerDescription = "";
    export let summary = ``;
    export let tags = [""];
    export let githubLink = "";
</script>

<section>
    <div style="display:flex; justify-content: space-between;">
        <h2>{name}</h2>
        <h2><a href={githubLink} target="_blank">#</a></h2>
    </div>
    <p class="footer"><i>{footerDescription}</i></p>

    <p>{@html summary}</p>

    <div class="marquee">
        <span>
            <div class="tags">
                {#each tags as tag}
                    <p class="tag">{tag}</p>
                {/each}
                {#each tags as tag}
                    <p class="tag">{tag}</p>
                {/each}
            </div>
        </span>
    </div>
</section>

<style>
    a {
        text-decoration: none;
    }
    a:hover {
        cursor: pointer;
        color: #745463;
    }
    h2 {
        margin-bottom: 0.27em;
        font-size: 1.88em;
    }
    section {
        padding: 2.56rem 1.6rem;
        border: 0.33rem solid #222022;
        border-radius: 1.56rem;
        max-width: 22em;
        /* max-height: calc(100% - min-content); */
        margin: 1em 1em;
        box-shadow: 0 0.4rem 1rem -0.26rem rgba(0, 0, 0, 0.26);
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
        box-shadow: 0 0.11rem 0.16rem -0.06rem rgba(0, 0, 0, 0.08);
    }
    .tags {
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        margin-left: -0.4em;
        /* max-width: 20em; */
    }
    .marquee {
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
    }

    .marquee span {
        display: inline-block;
        animation: marquee 30s ease-in-out infinite;
        transition-timing-function: cubic-bezier(1, 0, 0, 1);
    }

    @keyframes marquee {
        0% {
            transform: translate(-64%, 0);
            transition-timing-function: cubic-bezier(1, 0, 0, 1);
        }

        50% {
            transform: translate(-40%, 0);
            transition-timing-function: cubic-bezier(1, 0, 0, 1);
        }
        100% {
            transform: translate(-64%, 0);
            transition-timing-function: cubic-bezier(1, 0, 0, 1);
        }
    }
    @media only screen and (max-width: 375px) {
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
        }
        h2 {
            font-size: 1.518em;
        }
        section {
            max-width: 16.8em;
            padding: 2em 2em;
            border: 0.16em solid #222022da;
        }
    }
</style>
