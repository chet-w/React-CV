import React, { Component } from 'react';
import SkillLogo from './SkillLogo';

export default class SkillsDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <SkillLogo selected={this.props.selected}/>
        <div className="skills-details">
            Details about how i use {this.props.selected !== null ? this.props.selected.name : "the skills"}
        </div>
      </React.Fragment>
    )
  }
}
