import React, { Component } from 'react';

export default class Footer extends Component {
    getStringYear() {
        const today = new Date(Date.now());
        const year = today.toString().substring(11, 15);

        return year
    }

    render() {
        const { name } = this.props;
        const year = this.getStringYear();

        return(
            <div className="p-6">
                <h3>{name} - {year}</h3>
            </div>
        );
    }
}