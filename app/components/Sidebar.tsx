import Image from "next/image";
import Link from "next/link";
import { SIDEBAR_LINKS } from "../data/sidebarLinks";

export const Sidebar = () => {
  return (
    <div className="hidden w-1/3 pt-16 px-6 pr-0 h-screen sticky top-0 sm:flex justify-center md:w-1/4">
      <div className="flex flex-col align-middle">
        <Link href="/" className="flex align-middle justify-center">
          <Image src="/C.webp" alt="logo" width={76.27} height={111.62} />
        </Link>
        <div className="flex flex-col">
          <ul className="w-full mt-10">
            {SIDEBAR_LINKS.map((link, i) => (
              <li
                key={link.title}
                className="mb-4 pr-6 pb-1 relative group transition-all duration-200 hover:scale-105"
              >
                <a href={link.url} className="text-base">
                  <span className="text-accent mr-2">0.{i + 1}</span>
                  <span className="font-bold">{link.title}</span>
                </a>
                <div className="h-1 w-full absolute bottom-0 left-0 bg-gradient-to-r from-accent via-accent-85 to-transparent transition-all duration-200 opacity-0 group-hover:opacity-100"></div>
              </li>
            ))}
          </ul>
          <a
            className="mb-4 block transition-all duration-200 hover:scale-105"
            href="https://github.com/calgil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/gitHub.png"
              alt="github"
              width={24.21}
              height={23.61}
            />
          </a>
          <a
            className="mb-4 block transition-all duration-200 hover:scale-105"
            href="https://www.linkedin.com/in/calvin-gilbert-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/li.png" alt="linked in" width={24.21} height={23.61} />
          </a>
          <div className="w-1 min-h-full ml-2 bg-gradient-to-b from-accent via-accent-85 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
