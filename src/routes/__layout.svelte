<script>
    import "../styles/globals.css";
</script>

<!-- Move to /lib as Navbar.svelte move to  -->
<nav>
    <div>
        <li><a href="/">nicholas pignatelli</a></li>
        <li><a href="/about">/about</a></li>
        <li><a href="/career">/career</a></li>
        <li><a href="/contact">/contact</a></li>
        <li><a href="/portfolio">/portfolio</a></li>
    </div>

    <div class="text_small">
        <li>
            <a
                href="https://drive.google.com/file/d/1BGuXNjOQIJZnXItIvZU-TGHXZyskwIIA/view?usp=sharing"
            >
                download resume
            </a>
        </li>

        <li>
            <a href="https://github.com/nicholaspignatelli" target="_blank">
                go to github
            </a>
        </li>

        <li>
            <a href="mailto:nickpignatelli@icloud.com"> send me an email </a>
        </li>
    </div>
</nav>

<slot />
<p class="footer">NICHOLAS PIGNATELLI,&nbsp;2022</p>

<style>
    nav {
        background: #000;
        height: 100%; /* set same as height & line-height below, will move to a param variable of Nav component */
    }
    .footer {
        z-index: 2;
        background-color: #00000033;
        text-align: center;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        width: 85%;
        margin: auto;
    }
    li {
        list-style: none;
        height: 100%;
        line-height: 100%;
        color: whitesmoke;
        text-decoration: none;
    }

    a:hover {
        color: salmon;
        transition: background 0.3s;
        text-decoration: none;
    }
</style>
