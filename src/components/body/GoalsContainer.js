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
        <div className="">
          {goals &&
            goals.map((goal) => (
              <div className="flex flex-row justify-start">
                <CheckIcon />
                {goal}
              </div>
            ))}
        </div>
      </h1>
    </div>
  );
};

export default GoalsContainer;
