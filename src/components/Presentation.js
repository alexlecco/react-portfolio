import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        const { flag, avatar, name, roll, description, theme } = this.props;
        const rollTextColor = theme === "Dark" ? "text-purple-500" : "text-orange-900";

        return(
            <div className="">
                <img src={avatar} className="rounded-full mx-auto presentation-avatar" alt="avatar" />
                <div className="">
                    <img src={flag} className="mx-auto presentation-flag" alt="flag" />
                    <h1 className="mr-auto text-md">{name}</h1>
                </div>
                <h2 className={`text-lg ${rollTextColor}`}>{roll}</h2>
                <h3 className="text-sm description">{description}</h3>
            </div>
        );
    }
}