import React from "react";
import Skill from "./Skill";

const SkillsContainer = ({ skills, theme }) => {
  return (
    <div className={`${theme} h-64 pr-8 md:pr-48`}>
      <h1 className="text-right text-lg pt-8">
        Technical Skills
        <span className="ml-2" role="img" aria-label="Technical Skills">
          🏅
        </span>
      </h1>
      <div className="flex flex-wrap overflow-hidden">
        {skills &&
          skills.map((skill) => (
            <Skill info={skill} theme={theme} key={skill.name} />
          ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
