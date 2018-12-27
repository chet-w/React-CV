import React, { Component } from 'react'

export default class SkillLogo extends Component {

    getSymbol = () => {
        if(this.props.selected === null){
            return "Sk";
        } else {
            return this.props.selected.symbol
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="thick-circle faded">
                    <div className="symbol">{this.getSymbol()}</div>
                </div>
            </React.Fragment>
        )
    }
}
