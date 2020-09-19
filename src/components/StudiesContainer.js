import React from "react";
import Study from "./Study";

const StudiesContainer = ({ studies }) => {
  console.log("studies:::::", studies);
  return (
    <>
      <h1 className="text-left my-2"> Estudios </h1>
      <div className="md:flex md:w-full overflow-hidden">
        {studies && studies.map((study) => <Study info={study} />)}
      </div>
    </>
  );
};

export default StudiesContainer;
