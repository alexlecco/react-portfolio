import React from "react";

const PorfolioContainer = ({ theme }) => {
  return (
    <div className={`${theme} h-64 pr-8 md:pr-48`}>
      <h1 className="text-right text-lg pt-8">
        Personal Portfolio
        <span className="ml-2" role="img" aria-label="Personal Portfolio">
          💼
        </span>
      </h1>
    </div>
  );
};

export default PorfolioContainer;
