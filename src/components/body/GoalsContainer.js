import React from "react";
import CheckIcon from "@material-ui/icons/Check";

const GoalsContainer = ({ theme, goals }) => {
  return (
    <div className={`${theme} h-auto pl-8 md:pl-48 pb-20`}>
      <h1 className="text-left text-lg pt-8">
        Professional Goals
        <span className="ml-2" role="img" aria-label="Professional Goals">
          🏆
        </span>
      </h1>
      <div className="text-left pt-8">
        {goals &&
          goals.map((goal) => (
            <div className="flex flex-row justify-start pb-2">
              <CheckIcon />
              <span className="pl-2">{goal}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GoalsContainer;
