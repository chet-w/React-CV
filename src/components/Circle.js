import React, { Component } from 'react'

export default class Circle extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div class="circle">
                <img src={require(`../img/${this.props.image}.svg`)} className="circle-icon" />
            </div>
        )
    }
}
