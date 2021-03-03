<script>
    export let date = "";
    export let title = "";
    export let company = "";
    export let description = ``;
    // export let tags = [""]; // maybe impl later
</script>

<article class="timeline__item" style="--date: '{date}'">
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
        font-family: Sintony;
        font-size: 13px;
        letter-spacing: 0.026rem;
        color: #333;
    }
    .timeline__item {
        max-width: 52%;
        margin: 2.56rem 0rem;
        position: relative;
        box-shadow: 0 0.4rem 1rem -0.32rem rgba(0, 0, 0, 0.16);
    }
    /* alternate sides */
    .timeline__item:nth-child(even) {
        margin-left: auto;
    }

    /* timeline bullet point */
    .timeline__item:before {
        content: var(--date);
        position: absolute;
        border: 0.11rem solid #222022;

        /* width: 1.6rem; */
        /* height: 1.6rem; */
        padding: 0.44rem;
        /* margin: 0 -2.54rem; */
        background-color: #f8f0c7;
        border-radius: 1.62rem;
        top: 1rem;
        z-index: 2;
    }

    .timeline__item:nth-child(odd):before {
        right: -19%;
        transform: translateX(50%);
    }
    .timeline__item:nth-child(even):before {
        right: -19%;
        transform: translateX(50%);
    }
    .timeline__item:nth-child(odd):after {
        right: -19.5%;
    }
    .timeline__item:nth-child(even):after {
        left: -19.5%;
    }

    .timeline__content {
        padding: 2.56rem 1.6rem;
        border: 0.33rem solid #222022;
        border-radius: 1.56rem;
        /* margin-right: 12px !important; */
    }
    .timeline__title {
        font-size: 1.41rem;
        margin: 0 0 1rem;
    }

    .bg-pan-top {
        background: repeating-linear-gradient(
            34deg,
            #faf9fc,
            #faf9fc 8px,
            #ffffff 8px,
            #ffffff 13px
        );
        background-repeat: repeat;
        height: 100%;
        /* position: fixed; */
        width: 100%;
        z-index: -1;
    }
</style>
