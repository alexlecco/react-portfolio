import React from "react";
import Skill from "./Skill";

const SkillsContainer = ({ theme, skills, t, language }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center align-items-center ${theme} h-auto pr-8 pl-8 md:pr-20 md:pl-20 pb-20`}
    >
      <h1 className='text-center md:text-right md:pr-24 text-lg pt-8'>
        {t("titles.title2")}
        <span className='ml-2' role='img' aria-label='Technical Skills'>
          🏅
        </span>
      </h1>
      <div className='flex flex-wrap overflow-hidden'>
        {skills.map(({ name, list }) => (
          <Skill
            name={name}
            list={list}
            theme={theme}
            key={name.en}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
