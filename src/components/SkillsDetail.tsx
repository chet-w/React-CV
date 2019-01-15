import React, { Component } from 'react';
import SkillLogo from './SkillLogo';

interface PropTypes {
  selected: { 
    name: string, symbol: string, level: number; details: string[] },
}

const SkillDetail = (props: PropTypes) => {
  
    return (
      <React.Fragment>
        <SkillLogo selected={props.selected}/>
        <div className="skills-details">
            {props.selected.details.map(el => <p>{el}</p>)}
        </div>
      </React.Fragment>
    )
}

export default SkillDetail;
