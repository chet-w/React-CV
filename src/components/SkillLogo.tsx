import React, { Component } from 'react';

export interface PropTypes {  
    selected: {
        symbol: string
    };
}

export default class SkillLogo extends Component<PropTypes> {
    getSymbol = () => {
        if (this.props.selected.symbol === "") {
            return "Sk";
        } else {
            return this.props.selected.symbol
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.props.selected.symbol === "" ? "thick-circle faded" : "thick-circle"}>
                    <div className="symbol">{this.getSymbol()}</div>
                </div>
            </React.Fragment>
        )
    }
}
