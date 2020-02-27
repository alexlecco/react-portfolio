import React, { Component, Fragment } from 'react';

export default class Skill extends Component {
    getStringLevel(level) {
        return level === 1 ? "principiante" : level === 2 ? "intermedio" : "avanzado";
    }

    render() {
        const { name, level } = this.props.info;
        const stringLevel = this.getStringLevel(level);

        return(
            <Fragment>
                <h3>{name}</h3>
                <p>{stringLevel}</p>
            </Fragment>
        );
    }
}