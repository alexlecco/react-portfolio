import React from "react";
import Project from "./Project";

const ProjectsContainer = ({ projects }) => {
  return (
    <>
      <h1 className="text-left my-2"> Proyectos </h1>
      <div className="flex flex-wrap overflow-hidden">
        {projects &&
          projects.map((project) => (
            <Project info={project} key={project.name} />
          ))}
      </div>
    </>
  );
};

export default ProjectsContainer;
