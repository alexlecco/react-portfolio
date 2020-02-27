import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        const { flag, avatar, name, roll, description } = this.props;

        return(
            <div className="">
                <img src={avatar} className="rounded-full mx-auto presentation-avatar" />
                <div className="">
                    <img src={flag} className="rounded-full mx-auto presentation-flag" />
                    <h1 className="text-md">{name}</h1>
                </div>
                <h2 className="text-lg text-purple-500">{roll}</h2>
                <h3 className="text-sm description">{description}</h3>
            </div>
        );
    }
}