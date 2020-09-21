import React from "react";
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
}) => {
  const profileTextColor =
    theme === "Dark" ? "text-purple-500" : "text-orange-900";

  const changeThemeText = theme === "Dark" ? "light theme" : "dark theme";
  const getMyResumeText = "get my resume";

  return (
    <>
      <div className={`${theme}-transparent flex justify-between`}>
        <p
          className="cursor-pointer flex flex-col items-center pl-2 pt-2"
          onClick={changeTheme}
        >
          <Brightness4Icon fontSize="small" />
          {false && <div className="noselect">{changeThemeText}</div>}
        </p>
        <p
          className="cursor-pointer flex flex-col items-center pr-2 pt-2"
          onClick={() => {}}
        >
          <GetAppIcon fontSize="small" />
          {false && <div className="noselect">{getMyResumeText}</div>}
        </p>
      </div>
      <div class="md:flex p-6">
        <div className="flex justify-center md:justify-end md:w-1/2 md:mx-20">
          <img
            class="w-32 md:w-64 rounded-full mx-auto md:mx-0 items-center"
            src={avatar}
            alt="avatar"
          />
        </div>
        <div class="md:w-1/2 md:flex md:flex-col md:justify-center md:items-start">
          <div className="flex flex-row justify-center align-middle pb-3">
            <img src={flag} className="presentation-flag" alt="flag" />
            <h2 class={`text-3xl pl-3 ${theme}-transparent`}>{name}</h2>
          </div>
          <div class={`text-lg ${profileTextColor}`}>{profile}</div>
          <h3 className="text-sm font-hairline md:text-lg md:w-3/4">
            {description}
          </h3>
        </div>
      </div>
      <NavigatorMenu theme={theme} />
    </>
  );
};

export default Presentation;
