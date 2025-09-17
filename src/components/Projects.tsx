import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section className="flex flex-col justify-center pb-8 w-screen">
            <h2 className="text-2xl font-medium text-center mt-4 mb-8">Projects</h2>
            <div className="gridbox">
                <ProjectCard
                    link="https://nextime.mk"
                    img="https://imgur.com/4lAfLQ7.png"
                    title="NexTime MK"
                    desc="An appointment management suite of apps for service-based busiensses. Features a web app, mobile app, admin dashboard and sophisticated backend system."
                    tags={[
                        "Springboot",
                        "React.js",
                        "Mobile App",
                    ]}
                />
                <ProjectCard
                    link="https://prodanov.dev/page-builder"
                    img="https://imgur.com/0TJnRoE.png"
                    title="React Page Builder"
                    desc="A page builder application built with React.js and TailwindCSS. It features an intuitive interface, component library, and real-time preview."
                    tags={[
                        "TypeScript",
                        "React.js",
                        "Web App",
                    ]}
                />
                <ProjectCard
                    link="https://github.com/prodanov17/aws-email-processing-engine"
                    img="https://imgur.com/pQkNLzy.png"
                    title="Email Processing Engine"
                    desc="A serverless email processing engine built with AWS Lambda and Node.js. It processes incoming student emails, extracts relevant events and tasks, and stores them in the user's Google Calendar."
                    tags={[
                        "AWS Lambda",
                        "Node.js",
                        "Serverless",
                    ]}
                />
                <ProjectCard
                    link="#"
                    img="https://imgur.com/SR8DR6d.png"
                    title="Billiard's Club Dashboard"
                    desc="A dashboard application for managing a billiard club. It includes features for stopwatches, light switches, customer management, and reporting."
                    tags={[
                        "Laravel",
                        "TypeScript",
                        "React.js",
                    ]}
                />
                <ProjectCard
                    link="https://prodanov17.github.io/online-menu"
                    img="https://imgur.com/UHC67pA.png"
                    title="Business Website"
                    desc="A personal project of mine I did a while back as a business website using HTML, CSS and JS."
                    tags={["HTML", "CSS", "Javascript"]}
                />
                <ProjectCard
                    link="https://prodanov17.github.io/recipe-app"
                    img="https://imgur.com/0jpwrwB.png"
                    title="Recipe App"
                    desc="A university project featuring front-end development with React.js and an external API called Spoonacular."
                    tags={["React.js", "API", "Web design"]}
                />
                <ProjectCard
                    link="https://prodanov17.github.io/city-center-public"
                    img="https://imgur.com/XCrfTPd.png"
                    title="City Center Apartments"
                    desc="A project I did for a local business focused on copywriting and CTA buttons"
                    tags={["React.js", "UI/UX", "Web design"]}
                />
                <ProjectCard
                    link="https://euroconnect.mk"
                    img="https://euroconnect.mk/_next/image?url=https%3A%2F%2Fcdn.euroconnect.mk%2Fstorage%2Fcategories%2FQZiZfjKijDomVk8OFaOCxAH2XISUmfuMXDr1oTPK.jpg&w=640&q=75"
                    title="Euroconnect"
                    desc="A website I did for a local client featuring product management dashboard, filter management and more"
                    tags={["Next.js", "Laravel", "Dashboard"]}
                />
                <ProjectCard
                    link="https://github.com/prodanov17/dashing-runner"
                    img="https://user-images.githubusercontent.com/79107695/247877919-31c5fbc4-2f8a-4018-b214-6f14ba2861b2.jpg"
                    title="Dashing Runner"
                    desc="A 2D game I made for a high school project. It's my first game I made from start to finish"
                    tags={["C#", "Unity", "Game Dev"]}
                />
            </div>
        </section>
    );
};

export default Projects;
