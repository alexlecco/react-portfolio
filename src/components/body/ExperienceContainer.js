import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ExperienceContainer = ({ theme, experience }) => {
  return (
    <div className={`${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}>
      <h1 className="text-center md:text-left md:pl-24 text-lg pt-8">
        Work Experience
        <span className="ml-2" role="img" aria-label="Work Experience">
          👷
        </span>
      </h1>
      <div className="text-left pt-8">
        {experience &&
          experience.map((exp) => (
            <div className="flex flex-row justify-start pb-2">
              <ArrowForwardIosIcon />
              <span className="pl-2">{exp}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperienceContainer;
