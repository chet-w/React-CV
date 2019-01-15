import React from 'react';
// import { Progress } from 'antd';
import { Progress } from "antd";

export interface propTypes {
  name: string; 
  level: number; 
  symbol: string; 
  index: number;
  details: string[];
  handleSkillSelect: Function; 
}

const SkillItem = (props: propTypes) => {
  return (
    <div className="skill-card" onClick={() => props.handleSkillSelect({name: props.name, symbol: props.symbol, level: props.level, details: props.details})}>
      {props.name}
      <Progress percent={props.level * 10} showInfo={false} />
    </div>
  )
}

export default SkillItem
