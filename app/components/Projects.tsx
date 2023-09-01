import { ProjectCard } from "./ProjectCard";

export type ProjectCardType = {
  title: string;
  linkUrl: string;
  imgUrl: string;
  skills: string[];
  repoUrl: string;
};

export const Projects = () => {
  const projects: ProjectCardType[] = [
    {
      title: "14ers",
      linkUrl: "https://www.climb-colorado-fourteeners.app/",
      imgUrl: "/14ers.png",
      skills: ["react", "S3", "MongoDB"],
      repoUrl: "https://github.com/calgil/14ers-app/blob/main/README.md",
    },
    {
      title: "Veterinary Center",
      linkUrl: "https://www.northspringsvrc.com/",
      imgUrl: "/vet.png",
      skills: ["next", "Typescript", "SCSS"],
      repoUrl: "https://github.com/calgil/vrc/blob/main/README.md",
    },
    {
      title: "Solar",
      linkUrl: "https://solar-project-self.vercel.app/",
      imgUrl: "/solar.png",
      skills: ["react", "firebase"],
      repoUrl: "https://github.com/calgil/solar-project/blob/main/README.md",
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
