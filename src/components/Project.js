import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        console.log(`../img/projects/${this.props.data.key}/${this.props.data.key}${this.props.data.laptop}.png`)
        return (
            <React.Fragment>
                <div className="devices-container">
                    <div className="laptop">
                        <img className="screen" src={
                            require(`../img/projects/${this.props.data.key}/${this.props.data.key}${this.props.data.laptop}.png`)
                        } />
                        <img className="skin" src={require("../img/macbook3.png")} />
                    </div>
                    <div className="mobile">
                        {/* <img src={
                        require(`../img/projects/${this.props.data.key}/${this.props.data.key}${this.props.data.mobile}.png`)
                        } /> */}
                        <img className="skin" src={require("../img/iphone.png")} />
                    </div>
                </div>



            </React.Fragment>
        )
    }
}
