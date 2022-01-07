<!-- CONTACT -->
<script context="module">
    // fetch content from .json content file
    export async function load({ fetch }) {
        const res = await fetch("/contact.json");
        const { contactItems } = await res.json();

        if (res.ok) {
            return {
                props: { contactItems },
            };
        }

        return {
            status: res.status,
            error: new Error("Could not fetch portfolio items. :("),
        };
    }
</script>

<script>
    export let contactItems;
</script>

<h2>CONTACT</h2>
{#each contactItems as { phone_number, email, github, linkedin }}
    <div>
        <p class="text_small">PHONE</p>
        <p class="h5">{phone_number}</p>
        <p class="text_small">E-MAIL</p>
        <p class="h5">{email}</p>
        <p class="text_small">GITHUB</p>
        <p class="h5">
            <a href="https://github.com/nicholaspignatelli">{github}</a>
        </p>
        <p class="text_small">LINKEDIN</p>
        <p class="h5">
            <a href="https://linkedin.com/in/nickpignatelli">{linkedin}</a>
        </p>
    </div>
{/each}

<style>
    a {
        text-decoration: none;
    }
</style>
