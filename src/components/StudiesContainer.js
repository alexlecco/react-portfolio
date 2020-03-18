import React, {Component, Fragment} from 'react';
import Study from './Study';

export default class StudiesContainer extends Component {
    render() {
        const { studies } = this.props;

        return(
            <Fragment>
                <h1 className="text-left my-2"> Estudios </h1>
                <div className="md:flex md:w-full overflow-hidden">
                    { studies.map(study => <Study info={study} />) }
                </div>
            </Fragment>
        )
    }
}