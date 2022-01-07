export async function get() {

    const careerItems = [
        {
            id: 1,
            job_title: "Software Engineer I",
            co_op: false,
            organization: "Scotiabank",
            details: [
                "Modernizing global payments through RESTful API development with Java/SpringBoot stack.",
                "Increasing user visibility & transaction performance time for global business customers.",
                "Leading agile initiatives like sprint retros, planning, and stand-ups."
            ],
            key_technologies: ["Java", "SpringBoot", "Cucumber", "Agile", "git"],
            duration: "JULY 2021 - CURRENT",
        },
        {
            id: 2,
            job_title: "Public Cloud Administrator, Co-op",
            co_op: true,
            organization: "Scotiabank",
            details: [
                "Managed the instances of multiuser cloud computing environments, on the public side.",
                "Secured cloud instances by applying security patches, improving relevant safety metrics by factor of x144.",
                "Setup & tore down computer & storage resources in Azure & AWS contexts, such as EC2 compute instances & S3 buckets.",
            ],
            key_technologies: ["AWS", "Azure", "Unix", "Windows", "Powershell"],
            duration: "MAY 2020 - AUGUST 2020",
        },
        {
            id: 3,
            job_title: "Software Engineer, Co-op",
            co_op: true,
            organization: "Scotiabank",
            details: [
                "Developed an Automated Issue Detection Engine (AIDE) for monitoring anomalies on the event stream data platform.",
                "Implemented as Kotlin/Vert.x dockerized micro services that touch Kafka, Elasticsearch, and MongoDB systems, with a Typescript/React frontend.",
                "Built web socket connections, defined data models & class designs, worked on disaster response handling.",
                "Accomplished development of highly performant intersystem communication with asynchronous networking, pure functions, and test-driven development."
            ],
            key_technologies: ["Kotlin", "Vert.x", "Kafka", "Docker", "MongoDB", "ElasticSearch"],
            duration: "MAY 2019 - AUGUST 2019",
        },
        {
            id: 4,
            job_title: "Jr. Programmer Analyst, Co-op",
            co_op: true,
            organization: "Scotiabank",
            details: [
                "Worked on a migration tool that mapped user data from legacy to new systems.",
                "Java was used to connect to MySQL databases & map legacy data to modern class models.",
                "Migrated data for over 3000+ users with zero impact to customer experience. "
            ],
            key_technologies: ["Java", "MySQL", "IBM WebSphere MQ", "aix"],
            duration: "SEPTEMBER 2018 - DECEMBER 2018",
        },

    ];

    return { status: 200, body: { careerItems } };
}