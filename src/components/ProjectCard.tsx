interface Props {
  img: string;
  title: string;
  desc: string;
  tags: Array<string>;
}

const ProjectCard = ({ title, desc, tags, img }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl bg-neutral-850 w-[85vw] sm:w-full mx-auto mt-8 max-w-[400px]">
      <div className="overflow-hidden h-[180px] ">
        <img
          src={img}
          alt="project image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex gap-2 px-4 py-3 text-sm">
        {tags.map((e, index) => (
          <p
            className="px-4 py-0.5 bg-neutral-750 w-fit rounded-xl"
            key={index}
          >
            {e}
          </p>
        ))}
      </div>
      <div className="px-8 pb-4">
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm text-neutral-500">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
