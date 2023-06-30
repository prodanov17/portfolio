const Hero = () => {
  return (
    <section className="flex flex-col px-8 gap-6 items-center mt-36 w-full">
      <div>
        <div className="w-32 h-32 mb-4 overflow-hidden bg-neutral-500 rounded-full">
          <img
            src="https://imgur.com/axN1oyX.png"
            alt=""
            className="block object-cover object-right grayscale w-full h-full"
          />
        </div>
        <p className="text-sm text-neutral-400 text-center">
          Hi, I'm Trajche 👋🏻
        </p>
      </div>
      <h1 className="text-3xl text-center leading-9 max-w-[466px] px-4">
        Building beautiful & functioning web applications
      </h1>
      <button className="button-bg px-8 py-2 rounded-lg mt-4 hover:scale-105 hover:-translate-y-1 transition-all shadow-lg">
        Get in touch
      </button>
    </section>
  );
};

export default Hero;
