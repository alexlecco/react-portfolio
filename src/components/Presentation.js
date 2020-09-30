import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import NavigatorMenu from "./NavigatorMenu";

const Presentation = ({
  flag,
  avatar,
  name,
  profile,
  description,
  theme,
  changeTheme,
  scroller,
  social,
}) => {
  const [labelsVisible, setLabelsVisible] = useState({
    theme: false,
    resume: false,
  });
  const profileTextColor =
    theme === "Dark" ? "text-teal-400" : "text-orange-900";

  const changeThemeText = theme === "Dark" ? "light theme" : "dark theme";
  const getMyResumeText = "get my resume";

  const toggleLabelsVisible = (e) => {
    e.currentTarget.classList[0] === "theme"
      ? setLabelsVisible({ ...labelsVisible, theme: !labelsVisible.theme })
      : setLabelsVisible({ ...labelsVisible, resume: !labelsVisible.resume });
  };

  return (
    <div className="h-screen">
      <div className={`${theme}-transparent flex justify-between`}>
        <div
          className="theme cursor-pointer flex flex-col items-center p-8 w-20 h-20"
          onClick={changeTheme}
          onMouseEnter={toggleLabelsVisible}
          onMouseLeave={toggleLabelsVisible}
        >
          <Brightness4Icon fontSize="small" />
          {labelsVisible.theme && (
            <p className="hidden md:inline noselect">{changeThemeText}</p>
          )}
        </div>
        <div
          className="resume cursor-pointer flex flex-col items-center p-8 w-20 h-20"
          onClick={() => {}}
          onMouseEnter={toggleLabelsVisible}
          onMouseLeave={toggleLabelsVisible}
        >
          <GetAppIcon fontSize="small" />
          {labelsVisible.resume && (
            <p className="hidden md:inline noselect">{getMyResumeText}</p>
          )}
        </div>
      </div>
      <div className="md:flex p-6 md:p-6">
        <div className="flex justify-center md:justify-end md:w-1/2 md:mx-20">
          <img
            className="w-32 md:w-64 rounded-full mx-auto md:mx-0 items-center"
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col md:justify-center md:items-start">
          <div className="flex flex-row justify-center align-middle pb-3">
            {/*<img src={flag} className="presentation-flag" alt="flag" />*/}
            <h2 className={`text-3xl ${theme}-transparent`}>{name}</h2>
          </div>
          <div className={`text-lg ${profileTextColor} mb-4`}>{profile}</div>
          <div className="flex justify-center align-center">
            {social &&
              social.map((socNetwork) => (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={socNetwork.url} target="_blank">
                  <img
                    src={socNetwork.icon}
                    className="w-16 px-2"
                    alt={socNetwork.name}
                  />
                </a>
              ))}
          </div>
          <h3 className="text-sm font-hairline md:text-lg md:w-3/4">
            {description}
          </h3>
        </div>
      </div>
      <NavigatorMenu theme={theme} scroller={scroller} />
    </div>
  );
};

export default Presentation;
