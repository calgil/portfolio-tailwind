import { ProjectCardType } from "../types/projectCard.type";

export const myProjects: ProjectCardType[] = [
  {
    id: 1,
    title: "14ers",
    linkUrl: "https://www.climb-colorado-fourteeners.app/",
    imgUrl: "/14ers.png",
    skills: ["react", "S3", "MongoDB"],
    repoUrl: "https://github.com/calgil/14ers-app/blob/main/README.md",
  },
  {
    id: 2,
    title: "Veterinary Center",
    linkUrl: "https://www.northspringsvrc.com/",
    imgUrl: "/vet.png",
    skills: ["next", "Typescript", "SCSS"],
    repoUrl: "https://github.com/calgil/vrc/blob/main/README.md",
  },
  {
    id: 3,
    title: "Solar",
    linkUrl: "https://solar-project-self.vercel.app/",
    imgUrl: "/solar.png",
    skills: ["react", "firebase"],
    repoUrl: "https://github.com/calgil/solar-project/blob/main/README.md",
  },
];
