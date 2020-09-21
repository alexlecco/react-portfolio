import React from "react";

const GoalsContainer = ({ projects, theme }) => {
  return (
    <div className={`${theme} h-64 pl-8 md:pl-48`}>
      <h1 className="text-left text-lg pt-8"> Professional Goals </h1>
    </div>
  );
};

export default GoalsContainer;
