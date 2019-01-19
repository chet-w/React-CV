import React from 'react';
import { Button } from "antd";

import MoreImages from "./MoreImages";

export interface propTypes {
  data: {
    name: string,
    key: string,
    details: string[],
    tech: string[],
    dir: string,
    size: number,
    laptop: number,
    mobile: number
  };
}

const ProjectDetail = (props: propTypes) => {
  return (
    <div className="project-detail">
      <h3 className="accent-down">{props.data.name}</h3>
      {props.data.details.map((el, i) => <p key={i}>{el}</p>)}
      <MoreImages data={props.data}/>
      <div className="tech-used">
      <span className="accent-down">Made using:</span>
        <ul>
          {props.data.tech.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </div>

    </div>
  )
}

export default ProjectDetail
