import React, { Component } from 'react';

import Devices from "./Devices";
import ProjectDetail from "./ProjectDetail";

interface PropTypes {
    data: {
        name: string,
        key: string,
        details: string[],
        tech: string[],
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
                <ProjectDetail data={this.props.data}/>
            </React.Fragment>
        )
    }
}
