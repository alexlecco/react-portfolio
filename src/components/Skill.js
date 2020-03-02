import React, { Component } from 'react';

export default class Skill extends Component {
    getStringLevel(level) {
        return level === 1 ? "principiante" : level === 2 ? "intermedio" : "avanzado";
    }

    render() {
        const { name, level, photo, color, hashtags } = this.props.info;
        const { theme } = this.props;
        const stringLevel = this.getStringLevel(level);
        const htTextColor = theme === "Dark" ? "text-teal-400" : "text-orange-800";

        return(
            <div className="my-8 flex">
                <div style={{backgroundColor: `${color}`}}>
                    <img src={photo} className="w-32 object-cover" alt="skill" />
                </div>
                <div className="w-full">
                    <h3 className="text-lg">{name}</h3>
                    <p className="text-gray-300">{stringLevel}</p>
                    <div className="px-2 py-2">
                        {hashtags.map(ht => <a className={`${htTextColor} cursor-pointer`} href={ht.link} key={ht.tech}>#{`${ht.tech} `} </a>)}
                    </div>
                </div>
            </div>
        );
    }
}