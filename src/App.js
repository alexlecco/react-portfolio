import React, { useState, useEffect } from "react";
import "./App.css";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import { firebaseApp } from "./firebase";
import GetAppIcon from "@material-ui/icons/GetApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("Dark");
  const [user, setUser] = useState({});

  useEffect(() => {
    const userRef = firebaseApp.database().ref().child("data");
    listenForUser(userRef);
  }, []);

  const listenForUser = (userRef) => {
    userRef.on("value", (snap) => {
      const user = {
        name: snap.val().name,
        profile: snap.val().profile,
        flag: snap.val().flag,
        avatar: snap.val().avatar,
        _key: snap.key,
      };

      setUser(user);
      setLoading(false);
    });
  };

  const changeTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  const { avatar, flag, name, profile } = user;

  const changeThemeText = theme === "Dark" ? "light theme" : "dark theme";
  const getMyResumeText = "get my resume";

  if (loading)
    return (
      <div className="h-screen bg-gray-400 flex flex-col items-center justify-center">
        loading...
      </div>
    );

  return (
    <div className={`${theme} text-center p-3 md:px-20 min-h-screen`}>
      <div className="flex justify-between">
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

      <Presentation
        avatar={avatar}
        flag={flag}
        name={name}
        profile={profile}
        theme={theme}
      />

      <Footer name={name} />
    </div>
  );
};

export default App;
