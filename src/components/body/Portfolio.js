import React, { useState } from "react";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

function Portfolio({ project, typeProject, theme, language }) {
  const [descripionVisible, setDescripionVisible] = useState(false);
  const icon = typeProject === "web" ? <DesktopWindowsIcon /> : <PhoneIphoneIcon />;
  const projectTextColor = theme === "Dark" ? "text-teal-400" : "text-orange-800";
  const toggleDescriptionVisibility = () => {
    setDescripionVisible(!descripionVisible);
  };

  const getDescription = description =>
    language === "english" ? description.en : description.es;

  return (
    <a href={project.url} target='blank'>
      <div
        className='flex flex-row justify-start pb-6 projectContainer cursor-pointer'
        onMouseEnter={toggleDescriptionVisibility}
        onMouseLeave={toggleDescriptionVisibility}
      >
        {icon}
        <div className='flex flex-col pl-2'>
          <h3 className={`${projectTextColor}`}>{project.name}</h3>
          {descripionVisible && <p>{getDescription(project.description)}</p>}
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
