import React, { Component, Fragment } from 'react';

export default class Project extends Component {
    render() {
        const { name, photo } = this.props.info;

        return(
            <div className="project-container">
                <img src={photo} />
                <h1 className="project-name">{name}</h1>
            </div>
        );
    }
}