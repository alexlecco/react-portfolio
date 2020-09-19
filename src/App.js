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
    const userRef = firebaseApp.database().ref().child("user");
    listenForUser(userRef);
  }, []);

  const listenForUser = (userRef) => {
    userRef.on("value", (snap) => {
      const user = {
        name: snap.val().name,
        roll: snap.val().roll,
        description: snap.val().description,
        flag: snap.val().flag,
        avatar: snap.val().avatar,
        myStudies: snap.val().myStudies,
        mySkills: snap.val().mySkills,
        myProjects: snap.val().myProjects,
        _key: snap.key,
      };

      setUser(user);
      setLoading(false);
    });
  };

  const changeTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  const {
    avatar,
    flag,
    name,
    roll,
    description,
    mySkills,
    myProjects,
    myStudies,
  } = user;

  const changeThemeText = theme === "Dark" ? "tema claro" : "tema oscuro";

  if (loading)
    return (
      <div className="h-screen bg-gray-400 text-center"> cargando... </div>
    );

  console.log("user::::::", user);

  return (
    <div className={`${theme} text-center p-3 md:px-20`}>
      <p className="text-left cursor-pointer" onClick={changeTheme}>
        {changeThemeText}
      </p>

      <Presentation
        avatar={avatar}
        flag={flag}
        name={name}
        roll={roll}
        description={description}
        theme={theme}
      />

      <StudiesContainer studies={myStudies} />
      <SkillsContainer skills={mySkills} theme={theme} />
      <ProjectsContainer projects={myProjects} />

      <Footer name={name} />
    </div>
  );
};

export default App;
