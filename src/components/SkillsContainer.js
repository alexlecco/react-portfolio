import React, { Component, Fragment } from 'react';
import Skill from './Skill';

export default class SkillsContainer extends Component {
    render() {
        const { skills, theme } = this.props;

        return(
            <Fragment>
                <h1 className="text-left my-2"> Habilidades </h1>
                <div className="flex flex-wrap overflow-hidden">
                    {skills.map(skill => <Skill info={skill} theme={theme} key={skill.name} />)}
                </div>
            </Fragment>
        );
    }
}