export async function get() {

    const aboutItems = [
        {
            id: 1,
            education: {
                major: "Software Engineering",
                degree: "Bachelor of Computing (B. Comp)",
                institution: "University Of Guelph",
                graduation_date: "April 2021",
                courses_completed: ["Algorithms", "Data Structures", "Angel of Death"],
            },
            objective_statement: "I want to change the world to make it a better place, because I love life and want others to love it too.",
            competency_summary: "Full-time SWE at Scotiabank working on Global Business Payment micro services. Most professional development experience is in a Java/SpringBoot shop. Grew up writing C, currently most prefer JavaScript, and that is partly because of Svelte.",
        },
    ];

    return { status: 200, body: { aboutItems } };
}