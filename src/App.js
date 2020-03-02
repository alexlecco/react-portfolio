import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import SkillsContainer from './components/SkillsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import avatar from './assets/avatar.png';

const theme = "Dark"; // Light or Dark
const flag = "https://cdn.countryflags.com/thumbs/argentina/flag-round-250.png";
const name = "Alex Lecco";
const roll = "Web UI Developer";
const description = "Desarrollador Web/Mobile, Aprendedor frecuente, Entusiasta de la tecnología. Actualmente desempleñandome como Web UI development en Globant y como mentor en Rolling Code School, busco crecer en el mundo del desarrollo de software y ayudar a otros a lograrlo tambien.";
const mySkills = [
  {
    name: "HTML",
    level: 3,
    photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/html-logo-300x300.png",
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
  }];
const myProjects = [
  {
    name: "RollingBook",
    photo: "https://i.ytimg.com/vi/qL_P1pkuD3g/maxresdefault.jpg"
  },
  {
    name: "RollingMedical",
    photo: "https://www.websitesdesign.site/imagini/medicom-flat-design-doctor-website-template.jpg"
  }
]

function App() {
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

export default App;
