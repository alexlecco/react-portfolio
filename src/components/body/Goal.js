import React from "react";

const Goal = ({ info }) => {
  const { name, photo } = info;

  return (
    <div className="image-container my-8 flex md:w-1/2 md:h-64 md:px-6">
      <img src={photo} alt="project" />
      <h1 className="project-name">{name}</h1>
    </div>
  );
};

export default Goal;
