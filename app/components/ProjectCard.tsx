import Image from "next/image";
import { ProjectCardType } from "./Projects";

type ProjectCardProps = {
  project: ProjectCardType;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className=" border-2 border-solid border-black-rich pt-4 rounded-lg transition duration-250 ease-out drop-shadow-md hover:scale-105">
      <a href={project.linkUrl} rel="noopener noreferrer" target="_blank">
        <div className="flex align-middle justify-between px-4 py-4">
          <h4 className="text-3xl text-accent">{project.title}</h4>
        </div>
        <div className="relative w-80 h-44">
          <Image
            src={project.imgUrl}
            alt={project.title}
            fill
            sizes="320px, 166px"
          />
        </div>
        <ul className="p-4 flex gap-2">
          {project.skills.map((skill) => (
            <li key={skill} className="text-gray-400">
              {skill}
            </li>
          ))}
        </ul>
      </a>
      <div className="mb-2 pr-4 flex justify-end">
        <a href={project.repoUrl} rel="noopener noreferrer" target="_blank">
          <Image src="/github.png" alt="github" width={24.21} height={23.61} />
        </a>
      </div>
    </div>
  );
};
