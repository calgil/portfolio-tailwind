import Image from "next/image";
import { ProjectCard } from "./ProjectCard";

export type ProjectCardType = {
  title: string;
  linkUrl: string;
  imgUrl: string;
  skills: string[];
};

export const Projects = () => {
  const projects: ProjectCardType[] = [
    {
      title: "14ers",
      linkUrl: "/",
      imgUrl: "/14ers.png",
      skills: ["react", "S3"],
    },
    {
      title: "14ers",
      linkUrl: "/",
      imgUrl: "/14ers.png",
      skills: ["react", "S3"],
    },
    {
      title: "14ers",
      linkUrl: "/",
      imgUrl: "/14ers.png",
      skills: ["react", "S3"],
    },
    {
      title: "14ers",
      linkUrl: "/",
      imgUrl: "/14ers.png",
      skills: ["react", "S3"],
    },
  ];

  return (
    <section className="mt-40">
      <h3 className="text-3xl">Projects</h3>
      <div className="my-10 max-w-4xl flex flex-wrap gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};
