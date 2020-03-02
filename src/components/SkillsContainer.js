import React, { Component } from 'react';
import Skill from './Skill';

export default class SkillsContainer extends Component {
    render() {
        const { skills, theme } = this.props;

        return(
            <div className="m-6">
                <h1 className="text-left my-2">Habilidades</h1>
                {skills.map(skill => <Skill info={skill} theme={theme} key={skill.name} />)}
            </div>
        );
    }
}