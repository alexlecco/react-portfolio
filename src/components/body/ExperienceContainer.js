import React from "react";
import CheckIcon from "@material-ui/icons/Check";

const ExperienceContainer = ({ theme, experience }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center align-items-center ${theme} h-auto pl-8 pr-8 md:pr-20 md:pl-20 pb-20`}
    >
      <h1 className='text-center md:text-left md:pl-24 text-lg pt-8'>
        Work Experience
        <span className='ml-2' role='img' aria-label='Work Experience'>
          👷
        </span>
      </h1>
      <div className='text-left pt-8'>
        {experience &&
          experience.map(job =>
            job.description ? (
              <div className='flex flex-row justify-start pb-2' key={job.company}>
                <CheckIcon />
                <span className='pl-2'>{job.description}</span>
              </div>
            ) : (
              <div className='flex flex-col justify-start pb-2' key={job.company}>
                <div>
                  <CheckIcon />
                  <span className='pl-2'>{job.company}</span>
                </div>
                <div className='flex flex-col md:ml-16'>
                  {job.projects.map(project => (
                    <p className='my-4'>
                      • {project.client}, {project.time}: {project.description}
                    </p>
                  ))}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default ExperienceContainer;
