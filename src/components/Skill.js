import React, { Component } from 'react';

export default class Skill extends Component {
    getStringLevel(level) {
        return level === 1 ? "principiante" : level === 2 ? "intermedio" : "avanzado";
    }

    render() {
        const { name, level, photo, hashtags } = this.props.info;
        const stringLevel = this.getStringLevel(level);

        return(
            <div className="py-5 flex">
                <img src={photo} class="h-24 object-cover"/>
                <div className="w-full">
                    <h3 className="text-lg">{name}</h3>
                    <p className="text-gray-600">{stringLevel}</p>
                    <div className="px-2 py-2">
                        {hashtags.map(ht => <a className="App-link" href={ht.link}>#{`${ht.tech} `} </a>)}
                    </div>
                </div>
            </div>
        );
    }
}