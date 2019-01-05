import React from 'react';

export interface propTypes {
    project: string
}

const ProjectDetail = (props:propTypes) => {
  return (
    <div className="project-detail">
      {props.project}
    </div>
  )
}

export default ProjectDetail
