import React from "react";
import Skill from "./Skill";

const SkillsContainer = ({ skills, theme }) => {
  return (
    <>
      <h1 className="text-left my-2"> Habilidades </h1>
      <div className="flex flex-wrap overflow-hidden">
        {skills &&
          skills.map((skill) => (
            <Skill info={skill} theme={theme} key={skill.name} />
          ))}
      </div>
    </>
  );
};

export default SkillsContainer;
