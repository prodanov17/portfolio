interface Props {
  img: string;
  title: string;
  desc: string;
  tags: Array<string>;
  link: string;
}

const ProjectCard = ({ title, desc, tags, img, link }: Props) => {
  return (
    <a
      href={link}
      className="rounded-xl overflow-hidden shadow-xl bg-neutral-850 w-[85vw] sm:w-full mx-auto mt-8 max-w-[400px] group cursor-pointer transition-colors hover:bg-neutral-800"
    >
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
            className="px-4 py-0.5 bg-neutral-750 w-fit rounded-xl transition-colors  group-hover:bg-neutral-850"
            key={index}
          >
            {e}
          </p>
        ))}
      </div>
      <div className="px-8 pb-4">
        <h2 className="text-lg group-hover:text-emerald-600 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 group-hover:text-neutral-600 transition-colors">
          {desc}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
