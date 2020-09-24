import React from "react";

const PorfolioContainer = ({ theme }) => {
  return (
    <div className={`${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}>
      <h1 className="text-center md:text-right md:pr-24 text-lg pt-8">
        Personal Portfolio
        <span className="ml-2" role="img" aria-label="Personal Portfolio">
          💼
        </span>
      </h1>
    </div>
  );
};

export default PorfolioContainer;
