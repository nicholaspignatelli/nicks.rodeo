<script>
    export let name = "";
    export let summary = ``;
</script>

<section class="contactItem contentBg">
    <p>{@html summary}</p>
    <div style="display:flex; justify-content: center; ">
        <h4>{@html name}</h4>
    </div>
</section>

<style>
    section {
        padding: 1rem 1.72rem 1.9rem;
        margin: 1rem 1.72rem 1.9rem;
        max-width: 28.6rem;
        text-align: center;
    }
</style>
