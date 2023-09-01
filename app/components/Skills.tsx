import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mySkills, skillImages } from "../data/mySkills";
import Image from "next/image";

export const Skills = () => {
  return (
    <section id="skills" className="mt-40">
      <h3 className="text-3xl">Skills</h3>
      <div className="my-10 grid grid-cols-2 gap-4 md:grid-cols-4 ">
        {skillImages.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Image src={skill.imgSrc} alt={skill.name} width={42} height={42} />
            <p>{skill.name}</p>
          </div>
        ))}
        {mySkills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            {skill.icon && (
              <FontAwesomeIcon
                className="text-accent"
                icon={skill.icon}
                size="3x"
              />
            )}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
