export async function get() {
    const portfolioItems = [
        {
            id: 1,
            name: 'nicks.rodeo',
            githubLink: 'https://github.com/nicholaspignatelli/nicks.rodeo',
            summary: `Built with svelte and svelte-kit.`,
            synopsis: 'personal website and portfolio',
            tags: ['svelte', 'node', 'npm', 'html', 'css', 'js', 'sveltekit']
        },
        {
            id: 2,
            name: 'mern-todo-app',
            githubLink: 'https://github.com/nicholaspignatelli/mern-todo-app',
            summary: `A simple web app that demonstrates persistent storage of user-defined state `,
            synopsis: 'MERN Stack CRUD App',
            tags: ['react.js', 'mongodb', 'node', 'express', 'axios', 'html', 'css', 'js']
        },
        {
            id: 3,
            name: 'virtual-keyboard',
            githubLink: 'https://github.com/nicholaspignatelli/virtual-keyboard',
            summary: `A keyboard that pops up in the browser. A classic software peripheral from the land of vanilla JS.`,
            synopsis: 'qwerty keyboard for the browser',
            tags: ['html', 'css', 'js']
        }
    ];

    return { status: 200, body: { portfolioItems } };
}