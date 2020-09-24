import React from "react";
import Skill from "./Skill";

const SkillsContainer = ({ theme, skills }) => {
  return (
    <div className={`${theme} h-auto pr-8 pl-8 md:pr-48 md:pl-48 pb-20`}>
      <h1 className="text-right text-lg pt-8">
        Technical Skills
        <span className="ml-2" role="img" aria-label="Technical Skills">
          🏅
        </span>
      </h1>
      <div className="flex flex-wrap overflow-hidden">
        {skills.map(({ name, list }) => (
          <Skill name={name} list={list} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
