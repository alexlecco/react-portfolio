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
    photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/html-logo-300x300.png"
  },
  {
    name: "CSS",
    level: 2,
    photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/css-logo-300x300.png"
  },
  {
    name: "Javascript",
    level: 1,
    photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/javascript-logo-300x300.png"
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
