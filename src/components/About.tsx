import { Illustration } from "../assets/illustration";
import { GitHubIcon } from "../assets/socialIcons";

const About = () => {
  return (
    <section className="px-6 flex flex-col items-center gap-4 mt-8 mx-auto w-full">
      <h2 className="text-2xl font-medium text-center my-8">
        A little about me...
      </h2>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/2 flex flex-col items-center sm:block">
          <p className="text-center text-neutral-200 px-4 sm:text-left max-w-[400px]">
            I'm a Software Engineering student at Faculty of Computer Science
            and Engineering in Skopje, North Macedonia. I'm a big enthusiast in
            tech, I love building web applications, using modern technologies
            like React, Next.js, TailwindCSS, PHP Laravel and more.
          </p>
          <button className="flex items-center ml-4 rounded-lg px-8 py-1.5 gap-3 my-8 bg-neutral-200 text-neutral-800 hover:scale-105 transition-all shadow-lg">
            <span>
              <GitHubIcon width="20" height="20" color="black" />
            </span>
            <span>Github</span>
          </button>
        </div>
        <Illustration />
      </div>
    </section>
  );
};

export default About;
