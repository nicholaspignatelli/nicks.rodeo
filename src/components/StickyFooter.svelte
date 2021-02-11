<script>
    import SendIcon from "./vectors/SendIcon.svelte";
    import DownloadDocumentIcon from "./vectors/DownloadDocumentIcon.svelte";
    import GithubIcon from "./vectors/GithubIcon.svelte";
</script>

<nav>
    <a href="/">
        <DownloadDocumentIcon />
    </a>
    <a href="https://github.com/nicholaspignatelli" target="_blank">
        <GithubIcon />
    </a>
    <a href="mailto:nickpignatelli@icloud.com">
        <SendIcon />
    </a>
</nav>

<style>
    nav {
        position: fixed;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        /* border: 1px solid red; */
        background-color: #c4c4fdaa;
        box-shadow: 0px 0px 1em 1em #c4c4fdaa;
        color: #222022;
        /* border-radius: 0.1em; */
        border-bottom: none;
        margin: auto;
    }
    a {
        margin: 0.8em 1.28em 0 1.28em;
    }
    @media only screen and (max-width: 375px) {
        nav {
            position: relative;
            order: 1;
            min-width: 100%;
            justify-content: space-evenly;
            top: 0;
            margin: auto;
            bottom: auto;
            border-radius: 0;
            box-shadow: none;
        }
    }
</style>
