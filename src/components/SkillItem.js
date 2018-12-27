import React from 'react';
import { Progress } from 'antd';

const SkillItem = (props) => {
  return (
    <div className="skill-card">
      {props.name} - {props.level}
      <Progress percent={props.level * 10} showInfo={false} />
    </div>
  )
}

export default SkillItem
