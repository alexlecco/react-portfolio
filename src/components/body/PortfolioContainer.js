import React from "react";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const PorfolioContainer = ({ theme, portfolio }) => {
  console.log(portfolio);

  return (
    <div className={`${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}>
      <h1 className="text-center md:text-right md:pr-24 text-lg pt-8">
        Personal Portfolio
        <span className="ml-2" role="img" aria-label="Personal Portfolio">
          💼
        </span>
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full text-left pt-8">
          <h2 className="mb-2">Web</h2>
          {portfolio &&
            portfolio.projects
              .filter((project) => project.type === "web")
              .map((project) => (
                <div className="flex flex-row justify-start pb-2">
                  <DesktopWindowsIcon />
                  <a href={project.url} target="blank" className="pl-2">
                    {project.name}
                  </a>
                </div>
              ))}
        </div>
        <div className="w-full text-left pt-8">
          <h2 className="mb-2">Mobile</h2>
          {portfolio &&
            portfolio.projects
              .filter((project) => project.type === "mobile")
              .map((project) => (
                <div className="flex flex-row justify-start pb-2">
                  <PhoneIphoneIcon />
                  <a href={project.url} target="blank" className="pl-2">
                    {project.name}
                  </a>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PorfolioContainer;
