import Image from "next/image";
import { ProjectCardType } from "./Projects";

type ProjectCardProps = {
  project: ProjectCardType;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border-2 border-solid border-rich-black py-4 rounded-lg drop-shadow-md">
      <div className="flex align-middle justify-between px-4 py-4">
        <h4 className="text-3xl text-accent">{project.title}</h4>
        <Image src="/link.svg" alt="link" width={25} height={25} />
      </div>
      <Image
        src={project.imgUrl}
        alt={project.title}
        width={372}
        height={166}
      />
    </div>
  );
};
