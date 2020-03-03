import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const { name, photo } = this.props.info;

        return(
            <div className="image-container">
                <img src={photo} alt="project" />
                <h1 className="project-name">{name}</h1>
            </div>
        );
    }
}