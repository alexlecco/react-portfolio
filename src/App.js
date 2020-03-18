import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import SkillsContainer from './components/SkillsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import StudiesContainer from './components/StudiesContainer';

import { firebaseApp } from './firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "Dark", // Light or Dark
      isLoading: true,
      claps: 0,
      user: {
        name: "",
        roll: "",
        description: "",
        flag: "",
        avatar: "",
        myProjects: [],
        mySkills: [],
        myStudies: []
      }
    }

    // pasame una referencia al child user de la database de firebaseApp
    this.userRef = firebaseApp.database().ref().child('user')
  }

  componentWillMount() {
    this.listenForUser(this.userRef);
  }

  listenForUser(userRef) {
    userRef.on('value', snap => {
      const user = {
        name: snap.val().name,
        roll: snap.val().roll,
        description: snap.val().description,
        flag: snap.val().flag,
        avatar: snap.val().avatar,
        myStudies: snap.val().myStudies,
        mySkills: snap.val().mySkills,
        myProjects: snap.val().myProjects,
        _key: snap.key
      }

      this.setState({user: user, isLoading: false});
    });
  }

  changeTheme() {
    this.setState({theme: this.state.theme === "Dark" ? "Light" : "Dark"})
  }

  render() {
    const {
      avatar,
      flag,
      name,
      roll,
      description,
      mySkills,
      myProjects,
      myStudies
    } = this.state.user;
    const { theme, isLoading } = this.state;
    const changeTheme = () => this.changeTheme();
    const changeThemeText = theme === "Dark" ? "tema claro" : "tema oscuro";
    console.log("render")

    if(isLoading) return <div className="h-screen bg-gray-400 text-center">cargando...</div>

    return (
      <div className={`${theme} text-center p-3 md:px-20`}>
        <p className="text-left cursor-pointer" onClick={changeTheme}>{changeThemeText}</p>

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
        <ProjectsContainer projects={myProjects}/>
        
        <Footer name={name}/>
      </div>
    );
  }
}
