import React, { useState, useEffect } from "react";
import "./App.css";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import GoalsContainer from "./components/body/GoalsContainer";
import SkillsContainer from "./components/body/SkillsContainer";
import ExperienceContainer from "./components/body/ExperienceContainer";
import PortfolioContainer from "./components/body/PortfolioContainer";
import Contact from "./components/body/Contact";
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
        coverdark: snap.val().coverdark,
        coverlight: snap.val().coverlight,
        _key: snap.key,
      };

      setUser(user);
      setLoading(false);
    });
  };

  const changeTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  const { avatar, flag, name, profile, coverdark, coverlight } = user;

  if (loading)
    return (
      <div className="h-screen bg-gray-400 flex flex-col items-center justify-center">
        loading...
      </div>
    );

  return (
    <div
      className="bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${theme === "Dark" ? coverdark : coverlight})`,
      }}
    >
      <div className={`bg-transparent text-center min-h-screen`}>
        <Presentation
          avatar={avatar}
          flag={flag}
          name={name}
          profile={profile}
          theme={theme}
          changeTheme={changeTheme}
        />

        <GoalsContainer theme={theme} />
        <SkillsContainer theme={theme} />
        <ExperienceContainer theme={theme} />
        <PortfolioContainer theme={theme} />
        <Contact theme={theme} />

        <Footer name={name} theme={theme} />
      </div>
    </div>
  );
};

export default App;
