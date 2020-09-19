import React, { useState, useEffect } from "react";
import "./App.css";
import Presentation from "./components/Presentation";
import SkillsContainer from "./components/SkillsContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import Footer from "./components/Footer";
import StudiesContainer from "./components/StudiesContainer";

import { firebaseApp } from "./firebase";

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

  const changeThemeText = theme === "Dark" ? "tema claro" : "tema oscuro";

  if (loading)
    return (
      <div className="h-screen bg-gray-400 text-center"> cargando... </div>
    );

  return (
    <div className={`${theme} text-center p-3 md:px-20 min-h-screen`}>
      <p className="text-left cursor-pointer" onClick={changeTheme}>
        {changeThemeText}
      </p>

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
