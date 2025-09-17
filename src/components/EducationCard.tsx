
interface Props {
  title: string;
  time: string;
  desc: string;
  className: string;
  innerClass: string;
}

const EducationCard = ({ title, time, desc, className, innerClass }: Props) => {
  return (
      <div
        className={`px-6 py-4 w-min min-w-[250px] mx-auto bg-neutral-850 rounded-xl ${className}`}
      >
        <div
          className={`hidden sm:block h-[1px] w-32 bg-neutral-700 absolute top-1/2 ${innerClass}`}
        ></div>
        <h4 className="text-xs text-neutral-700 mb-1">{time}</h4>
        <h3 className="text-lg text-neutral-200">{title}</h3>
        <p className="text-sm text-neutral-600 mt-4">{desc}</p>
      </div>
  );
};

export default EducationCard;
