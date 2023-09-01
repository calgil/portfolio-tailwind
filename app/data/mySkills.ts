import {
  faHtml5,
  faCss3,
  faSass,
  faSquareJs,
  faReact,
  faNode,
  faGitAlt,
  faGoogle,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SkillIcon, SkillImage } from "../types/skills.type";

export const skillImages: SkillImage[] = [
  { name: "Next", imgSrc: "/next1.png" },
  { name: "TypeScript", imgSrc: "/ts.png" },
];

export const mySkills: SkillIcon[] = [
  {
    name: "React",
    icon: faReact,
  },
  {
    name: "Node",
    icon: faNode,
  },
  {
    name: "JavaScript",
    icon: faSquareJs,
  },
  {
    name: "Git",
    icon: faGitAlt,
  },
  { name: "Firebase", icon: faGoogle },
  { name: "MongoDB", icon: faDatabase },
  { name: "Amazon S3", icon: faAws },
  {
    name: "Sass",
    icon: faSass,
  },
  {
    name: "HTML",
    icon: faHtml5,
  },
  {
    name: "CSS",
    icon: faCss3,
  },
];
