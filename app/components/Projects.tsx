import { myProjects } from "../data/projectCards";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="mt-40">
      <h3 className="text-3xl">Projects</h3>
      <div className="my-10 max-w-4xl flex flex-wrap gap-5">
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
