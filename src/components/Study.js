import React, { Component } from 'react';

export default class Study extends Component {
    render() {
        const { level, place, year, photo } = this.props.info;

        return(
            <div className="image-container md:h-56 overflow-hidden md:w-1/2">
                <img src={photo} alt="study" />
                <div className="study-info">
                    <p>Nivel: {level} </p>
                    <p>Establecimiento: {place} </p>
                    <p>promoción: {year} </p>
                </div>
            </div>
        )
    }
}