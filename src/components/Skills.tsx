import {
  NextLogo,
  NodeLogo,
  PHPLogo,
  ReactLogo,
  VueLogo,
} from "../assets/logos";

import { useState, useEffect } from "react";

const Skills = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <section className="bg-neutral-800 w-screen h-36 mt-24 flex gap-4 items-center justify-between px-8 sm:px-8 md:px-20 lg:px-32">
      <ReactLogo size={windowSize >= 640 ? "sm" : ""} />
      <PHPLogo size={windowSize >= 640 ? "sm" : ""} />
      <VueLogo size={windowSize >= 640 ? "sm" : ""} />
      <NextLogo size={windowSize >= 640 ? "sm" : ""} />
      <NodeLogo size={windowSize >= 640 ? "sm" : ""} />
    </section>
  );
};

export default Skills;
