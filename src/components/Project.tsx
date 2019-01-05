import React, { Component } from 'react';

import Devices from "./Devices";

interface PropTypes {
    data: {
        name: string,
        key: string,
        details: string,
        dir: string,
        size: number,
        laptop: number,
        mobile: number
    };
}

export default class Project extends Component<PropTypes> {
    render() {
        return (
            <React.Fragment>
                <Devices data={this.props.data} />
            </React.Fragment>
        )
    }
}
