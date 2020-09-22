import React from "react";

const ExperienceContainer = ({ theme }) => {
  return (
    <div className={`${theme} h-64 pl-8 md:pl-48`}>
      <h1 className="text-left text-lg pt-8">
        Work Experience
        <span className="ml-2" role="img" aria-label="Work Experience">
          👷
        </span>
      </h1>
    </div>
  );
};

export default ExperienceContainer;
