<script>
    export let date = "";
    export let title = "";
    export let company = "";
    export let description = ``;
    // export let tags = [""]; // maybe impl later
</script>

<article class="timeline__item contentBg" style="--date: '{date}'">
    <div class="timeline__content bg-pan-top">
        <h3 class="timeline__title">{title}</h3>
        <h6 class="timeline__company">{company}</h6>

        <p class="timeline__text">
            {description}
        </p>
    </div>
</article>

<style>
    .timeline__company {
        font-size: 13px;
        font-weight: 473;
    }
    .timeline__item {
        padding: 2.56rem 1.6rem;
        margin: 1rem 1.72rem 1.9rem;
        max-width: 28.6rem;
        position: relative;
    }
    /* alternate sides */
    .timeline__item:nth-child(even) {
        margin-left: auto;
    }

    /* timeline bullet point */
    .timeline__item:before {
        content: var(--date);
        position: absolute;
        z-index: 2;
    }

    .timeline__item:nth-child(odd):before {
        right: -19%;
        transform: translateX(50%);
    }
    .timeline__item:nth-child(even):before {
        left: -19%;
        transform: translateX(-50%);
    }
    .timeline__item:nth-child(odd):after {
        right: -19.5%;
    }
    .timeline__item:nth-child(even):after {
        left: 19.5%;
    }

    .timeline__content {
        /* padding: 2.56rem 1.6rem; */
    }
    .timeline__title {
        font-size: 1.41rem;
        margin: 0 0 1rem;
    }
</style>
