import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section className="flex flex-col justify-center w-full">
      <h2 className="text-2xl font-medium text-center mt-12">
        Education & Experience
      </h2>
      <div className="relative flex-col items-center flex justify-center my-24 gap-8">
        <div className="w-[1px] h-[750px] bg-neutral-700 absolute -z-10"></div>
        <EducationCard
          title="Faculty of Computer Science and Engineering"
          time="10/2022 - present"
          desc="Software engineering and information systems"
          className="sm:relative sm:-left-[170px]"
          innerClass="sm:left-2/3 sm:-z-10"
        />
        <EducationCard
          title="Stadiaconnect"
          time="06/2023 - present"
          desc="Working on a CRM using Vue.js and Laravel Lumen for the backend"
          className="sm:relative sm:left-[170px]"
          innerClass="sm:right-2/3 sm:-z-10"
        />
        <EducationCard
          title="Digimak Inc."
          time="06/2022 - 09/2022"
          desc="Working on full stack apps using PHP and a standalone API"
          className="sm:relative sm:-left-[170px]"
          innerClass="sm:left-2/3 sm:-z-10"
        />
        <EducationCard
          title="Jane Sandanski"
          time="06/2022 - 09/2022"
          desc="Studied General Mathematics in High School and worked on a few projects, including a LEGO robot"
          className="sm:relative sm:left-[170px]"
          innerClass="sm:right-2/3 sm:-z-10"
        />
      </div>
    </section>
  );
};

export default Education;
