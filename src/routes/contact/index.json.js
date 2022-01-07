export async function get() {

    const contactItems = [
        {
            id: 1,
            phone_number: "+1 (647) 992-2732",
            email: "nickpignatelli@icloud.com",
            github: "github.com/nicholaspignatelli",
            linkedin: "linkedin.com/in/nickpignatelli"
        },
    ];

    return { status: 200, body: { contactItems } };
}