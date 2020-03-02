import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import SkillsContainer from './components/SkillsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "Dark", // Light or Dark
      avatar: "https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-9/76897222_2636224256468145_4246619209926180864_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_oc=AQn4eGCmihYU-73IGvaK4IVnGMBHaOi9T78tejZiDteiLqweT7y3kajdT58526pLvqg&_nc_ht=scontent.faep7-1.fna&oh=b2720ae719f3d088ec4d77f548d2dd98&oe=5EFC0384",
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
            }]
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
      ]
    }
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
      myProjects
    } = this.state
    
    return (
      <div className={`${theme} text-center p-2`}>
        <Presentation
            avatar={avatar}
            flag={flag} 
            name={name}
            roll={roll}
            description={description}
        />
        <div>
          <SkillsContainer skills={mySkills} />
          <ProjectsContainer projects={myProjects}/>
        </div>
        <Footer name={name}/>
      </div>
    );
  }
}

export default App;
