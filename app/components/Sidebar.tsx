import Image from "next/image";
import Link from "next/link";

type SidebarLink = {
  text: string;
  href: string;
};

export const Sidebar = () => {
  const sidebarLinks: SidebarLink[] = [
    {
      text: "About Me",
      href: "#aboutMe",
    },
    {
      text: "Projects",
      href: "#projects",
    },
    {
      text: "Skills",
      href: "#skills",
    },
    {
      text: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className=" w-1/4 pt-16 px-6 h-screen sticky top-0 flex justify-center">
      <div>
        <Image src="/C.webp" alt="logo" width={76.27} height={111.62} />
      </div>
      <ul className="w-full pl-10">
        {sidebarLinks.map((link) => (
          <li key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
