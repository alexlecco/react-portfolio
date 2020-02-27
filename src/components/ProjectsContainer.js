import React, { Component, Fragment } from 'react';
import Project from './Project';

export default class ProjectsContainer extends Component {
    render() {
        const { projects } = this.props;

        return(
            <div className="p-6">
                <h1 className="text-left">Proyectos</h1>
                {projects.map(project => <Project info={project} key={project.name} />)}
            </div>
        );
    }
}