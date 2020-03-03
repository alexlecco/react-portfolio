import React, {Component, Fragment} from 'react';
import Study from './Study';

export default class StudiesContainer extends Component {
    render() {
        const { studies } = this.props;

        return(
            <Fragment>
                { studies.map(study => <Study info={study} />) }
            </Fragment>
        )
    }
}