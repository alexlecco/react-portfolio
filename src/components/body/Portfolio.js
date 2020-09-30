import React, { useState } from "react";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

function Portfolio({ project, typeProject, theme }) {
  const [descripionVisible, setDescripionVisible] = useState(false);
  const icon =
    typeProject === "web" ? <DesktopWindowsIcon /> : <PhoneIphoneIcon />;
  const projectTextColor =
    theme === "Dark" ? "text-teal-400" : "text-orange-800";
  const toggleDescriptionVisibility = () => {
    setDescripionVisible(!descripionVisible);
  };

  return (
    <a href={project.url} target="blank">
      <div
        className="flex flex-row justify-start pb-2 projectContainer cursor-pointer"
        onMouseEnter={toggleDescriptionVisibility}
        onMouseLeave={toggleDescriptionVisibility}
      >
        {icon}
        <div className="flex flex-col pl-2">
          <h3 className={`${projectTextColor}`}>{project.name}</h3>
          {descripionVisible && <p>{project.description}</p>}
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
