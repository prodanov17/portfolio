import FeatureCards from "./FeatureCards";

const Features = () => {
  return (
    <section className="flex flex-col items-center mb-4 w-full">
      <h2 className="text-2xl font-medium text-center mt-12 px-8">
        Following modern UI/UX design principles
      </h2>
      <div className="flex gap-4 mt-4">
        <FeatureCards
          title="Development"
          icon="bolt"
          desc="Developing stable and reliable apps using modern technologies."
          className=""
        />
        <FeatureCards
          title="UI & UX Design"
          icon="pencil"
          desc="Beautiful and eye-catching designs following UI/UX principles"
          className=""
        />
        <FeatureCards
          title="UI & UX Design"
          icon="pencil"
          desc="Beautiful and eye-catching designs following UI/UX principles"
          className="hidden sm:block"
        />
        <FeatureCards
          title="UI & UX Design"
          icon="pencil"
          desc="Beautiful and eye-catching designs following UI/UX principles"
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Features;
