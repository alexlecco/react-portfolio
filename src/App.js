import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import SkillsContainer from './components/SkillsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import StudiesContainer from './components/StudiesContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "Dark", // Light or Dark
      avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHulXu2eGehkg/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=rEImrtkR0KNgbuJW0u8GNp7fXLx1ZoUrJYRqpeJe1FA",
      flag: "https://cdn.countryflags.com/thumbs/argentina/flag-round-250.png",
      name: "Alex Lecco",
      roll: "Web UI Developer",
      description: "Desarrollador Web/Mobile, Aprendedor frecuente, Entusiasta de la tecnología. Actualmente desempleñandome como Web UI development en Globant y como mentor en Rolling Code School, busco crecer en el mundo del desarrollo de software y ayudar a otros a lograrlo tambien.",
      mySkills: [
        {
          name: "HTML",
          level: 3,
          photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/html-logo-300x300.png",
          color: "#AB8C20",
          hashtags: [
            {
              tech: "geolocation",
              link: "https://www.w3schools.com/html/html5_geolocation.asp"
            }, {
              tech: "webStorage",
              link: "https://www.w3schools.com/html/html5_webstorage.asp"
            }, {
              tech: "accessibility",
              link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
            },
            {
              tech: "HTML6Tags",
              link: ""
            }
          ]
        },
        {
          name: "CSS",
          level: 2,
          photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/css-logo-300x300.png",
          color: "#4A90E2",
          hashtags: [
            {
              tech: "pseudo-elements",
              link: "https://www.w3schools.com/css/css_pseudo_elements.asp"
            }, {
              tech: "flexbox",
              link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            }]
        },
        {
          name: "Javascript",
          level: 1,
          photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/javascript-logo-300x300.png",
          color: "#EBD729",
          hashtags: [
            {
              tech: "es6",
              link: "https://www.w3schools.com/js/js_es6.asp"
            }, {
              tech: "es2020",
              link: "https://alligator.io/js/es2020/"
            }, {
              tech: "functionalProgramming",
              link: "https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5?gi=1e82492b7c73"
            }]
        }],
      myProjects: [
        {
          name: "RollingBook",
          photo: "https://i.ytimg.com/vi/qL_P1pkuD3g/maxresdefault.jpg"
        },
        {
          name: "RollingMedical",
          photo: "https://www.websitesdesign.site/imagini/medicom-flat-design-doctor-website-template.jpg"
        }
      ],
      myStudies: [
        {
          level: "primario",
          place: "Raul Colombres",
          year: "2002"
        },
        {
          level: "secundario",
          place: "Alberto Einstein",
          year: "2007"
        },
        {
          level: "universitario",
          place: "UTN",
          year: "?"
        }
      ]
    }
  }

  changeTheme() {
    this.setState({theme: this.state.theme === "Dark" ? "Light" : "Dark"})
  }

  render() {
    const {
      theme,
      avatar,
      flag,
      name,
      roll,
      description,
      mySkills,
      myProjects,
      myStudies
    } = this.state
    
    const changeTheme = () => this.changeTheme();
    const changeThemeText = theme === "Dark" ? "tema claro" : "tema oscuro";
    
    return (
      <div className={`${theme} text-center p-2`}>
        <p className="text-left cursor-pointer" onClick={changeTheme}>{changeThemeText}</p>
        
        <Presentation
            avatar={avatar}
            flag={flag} 
            name={name}
            roll={roll}
            description={description}
            theme={theme}
        />
        
        <StudiesContainer studies={myStudies}/>

        <SkillsContainer skills={mySkills} theme={theme} />
        <ProjectsContainer projects={myProjects}/>
        <Footer name={name}/>
      </div>
    );
  }
}
