import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        const { flag, avatar, name, roll, description, theme } = this.props;
        const rollTextColor = theme === "Dark" ? "text-purple-500" : "text-orange-900";

        return(
            <div>
                <div class="md:flex p-6">
                    <div className="flex justify-center md:justify-end md:w-1/2 md:mx-20">
                        <img class="w-32 md:w-64 rounded-full mx-auto md:mx-0" src={avatar} />
                    </div>
                    <div class="md:w-1/2 md:text-left text-center md:justify-end">
                        <div className="md:flex">
                            <img src={flag} className="mx-auto md:mx-0 presentation-flag" alt="flag" />
                            <h2 class="text-lg">{name}</h2>
                        </div>
                        <div class={`text-lg ${rollTextColor}`}>{roll}</div>
                        <h3 className="text-sm font-hairline md:text-lg md:w-3/4">{description}</h3>
                    </div>
                </div>
            </div>
        );
    }
}