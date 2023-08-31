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
      linkUrl: "https://www.climb-colorado-fourteeners.app/",
      imgUrl: "/14ers.png",
      skills: ["react", "S3", "MongoDB"],
    },
    {
      title: "Veterinary Center",
      linkUrl: "https://www.northspringsvrc.com/",
      imgUrl: "/vet.png",
      skills: ["next", "Typescript", "SCSS"],
    },
    {
      title: "Solar",
      linkUrl: "https://solar-project-self.vercel.app/",
      imgUrl: "/solar.png",
      skills: ["react", "firebase"],
    },
  ];

  return (
    <section id="projects" className="mt-40">
      <h3 className="text-3xl">Projects</h3>
      <div className="my-10 max-w-4xl flex flex-wrap gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};
