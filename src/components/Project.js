import React, { Component } from 'react';

import Devices from '../components/Devices';

export default class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <Devices data={this.props.data} />
            </React.Fragment>
        )
    }
}
