import React, { Component, Fragment } from 'react';
import Project from './Project';

export default class ProjectsContainer extends Component {
    render() {
        const { projects } = this.props;

        return(
            <Fragment>
                <h1 className="text-left my-2"> Proyectos </h1>
                <div className="flex flex-wrap overflow-hidden">
                    {projects.map(project => <Project info={project} key={project.name} />)}
                </div>
            </Fragment>
        );
    }
}