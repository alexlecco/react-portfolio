import React, { Component } from 'react';

export default class Study extends Component {
    render() {
        const { level, place, year } = this.props.info;

        return(
            <div className="p-5">
                <p>Nivel: {level} </p>
                <p>Establecimiento: {place} </p>
                <p>promoción: {year} </p>
            </div>
        )
    }
}