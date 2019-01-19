import React, { Component } from 'react';

export interface PropTypes {  
    selected: {
        symbol: string,
        name: string,
        level: number
    };
}

export default class SkillLogo extends Component<PropTypes> {
    getSymbol = () => {
        if (this.props.selected.symbol === "") {
            return "Sk";
        } else {
            return (
                this.props.selected.symbol
                )
        }
    }

    render() {
        return (
            <React.Fragment>
                    {/* <div className="symbol">{this.getSymbol()}</div> */}
                    <div className="skill-name accent-down">{this.props.selected.name}</div>
                    <div className="skill-level-subtitle">Skill level: <span className="accent-down">{this.props.selected.level}</span></div>
            </React.Fragment>
        )
    }
}
