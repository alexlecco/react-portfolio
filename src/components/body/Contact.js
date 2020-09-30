import React from "react";

const GoalsContainer = ({ theme }) => {
  return (
    <div className={`${theme} h-auto pb-20`}>
      <h1 className="text-center text-lg pt-8">
        Leave me a message
        <span className="ml-2" role="img" aria-label="Leave me a message">
          📲
        </span>
      </h1>
    </div>
  );
};

export default GoalsContainer;
