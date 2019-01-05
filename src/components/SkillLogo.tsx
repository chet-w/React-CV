import React, { Component } from 'react';

interface PropTypes 

export default class SkillLogo extends Component {
    getSymbol = () => {
        if (this.props.selected === null) {
            return "Sk";
        } else {
            return this.props.selected.symbol
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.props.selected === null ? "thick-circle faded" : "thick-circle"}>
                    <div className="symbol">{this.getSymbol()}</div>
                </div>
            </React.Fragment>
        )
    }
}
