import React, { Component } from 'react';
import SkillLogo from './SkillLogo';

interface PropTypes {
  selected: { 
    name: string, symbol: string, level: number },
}

const SkillDetail = (props: PropTypes) => {
    return (
      <React.Fragment>
        <SkillLogo selected={props.selected}/>
        <div className="skills-details">
            Details about how i use {props.selected !== null ? props.selected.name : "the skills"}
        </div>
      </React.Fragment>
    )
}

export default SkillDetail;
