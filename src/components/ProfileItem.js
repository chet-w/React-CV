import React, { Component } from 'react';
import Circle from './Circle';

export default class ProfileItem extends Component {
    render() {
        return (
            <div className="profile-item">
                <Circle image={this.props.image} />
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}
