import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const GoalsContainer = ({ theme, goals }) => {
  return (
    <div className={`${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}>
      <h1 className="text-center md:text-left md:pl-24 text-lg pt-8">
        Professional Goals
        <span className="ml-2" role="img" aria-label="Professional Goals">
          🏆
        </span>
      </h1>
      <div className="text-left pt-8">
        {goals &&
          goals.map((goal) => (
            <div className="flex flex-row justify-start pb-2">
              <ArrowForwardIosIcon />
              <span className="pl-2">{goal}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GoalsContainer;
