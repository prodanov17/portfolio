import { EmailIcon } from "../assets/icons";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "../assets/socialIcons";

const Navbar = () => {
  return (
    <header className=" w-full">
      <nav className="flex justify-between px-2 py-4 border-b-[0.5px] border-b-gray-600 w-[90vw] text-gray-300 mx-auto">
        <div className="flex gap-4 items-center">
          <EmailIcon />
          <p className="text-sm">trajce.p@live.com</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/prodanov17">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/trajche-prodanov-360274280/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/trajceprodanov/">
            <InstagramIcon />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
