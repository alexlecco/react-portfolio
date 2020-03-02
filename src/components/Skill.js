import React, { Component } from 'react';

export default class Skill extends Component {
    getStringLevel(level) {
        return level === 1 ? "principiante" : level === 2 ? "intermedio" : "avanzado";
    }

    render() {
        const { name, level, photo, color, hashtags } = this.props.info;
        const stringLevel = this.getStringLevel(level);
        console.log("color:::::::::::::::::::::", color)

        return(
            <div className="my-8 flex">
                <div style={{backgroundColor: `${color}`}}>
                    <img src={photo} class="w-32 object-cover" />
                </div>
                <div className="w-full">
                    <h3 className="text-lg">{name}</h3>
                    <p className="text-gray-300">{stringLevel}</p>
                    <div className="px-2 py-2">
                        {hashtags.map(ht => <a className="App-link" href={ht.link}>#{`${ht.tech} `} </a>)}
                    </div>
                </div>
            </div>
        );
    }
}