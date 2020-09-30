import React from "react";
import Portfolio from "./Portfolio";

const PorfolioContainer = ({ theme, portfolio }) => {
  let webProjects = [];
  let mobileProjects = [];
  portfolio.projects.forEach((project) =>
    project.typeProject === "web"
      ? webProjects.push(project)
      : mobileProjects.push(project)
  );

  return (
    <div className={`${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}>
      <h1 className="text-center md:text-right md:pr-24 text-lg pt-8">
        Personal Portfolio
        <span className="ml-2" role="img" aria-label="Personal Portfolio">
          💼
        </span>
      </h1>
      <h2 className="text-center md:text-right md:pr-24 text-sm">
        <span className="hidden md:inline-block">
          (hover the link to see description)
        </span>
        <span className="inline-block md:hidden">
          (long press the link to see description)
        </span>
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full text-left pt-8">
          <h2 className="mb-2">Web</h2>
          {webProjects.map((project) => (
            <Portfolio
              project={project}
              typeProject="web"
              theme={theme}
              key={project.name}
            />
          ))}
        </div>
        <div className="w-full text-left pt-8">
          <h2 className="mb-2">Mobile</h2>
          {mobileProjects.map((project) => (
            <Portfolio
              project={project}
              typeProject="mobile"
              theme={theme}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PorfolioContainer;
