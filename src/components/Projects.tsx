import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col justify-center pb-8 w-screen">
      <h2 className="text-2xl font-medium text-center mt-4 mb-8">Projects</h2>
      <div className="flex gap-8 px-0 lg:px-12 flex-col lg:flex-row">
        <ProjectCard
          img="https://user-images.githubusercontent.com/79107695/247877919-31c5fbc4-2f8a-4018-b214-6f14ba2861b2.jpg"
          title="Dashing Runner"
          desc="A 2D game I made for a high school project. It's my first game I made from start to finish"
          tags={["C#", "Unity", "Game Dev"]}
        />
        <ProjectCard
          img="https://imgur.com/UHC67pA.png"
          title="Business Website"
          desc="A personal project of mine I did a while back as a business website using HTML, CSS and JS."
          tags={["HTML", "CSS", "Javascript"]}
        />
        <ProjectCard
          img="https://imgur.com/0jpwrwB.png"
          title="Recipe App"
          desc="A university project featuring front-end development with React.js and an external API called Spoonacular."
          tags={["React.js", "API", "Web design"]}
        />
      </div>
    </section>
  );
};

export default Projects;
