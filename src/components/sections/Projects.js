import React, { Component } from 'react';
import Project from '../Project';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        name: "Victoria Business School",
        key: "vbs",
        details: "details about the project",
        dir: "../img/projects/vbs/",
        size: 7,
        laptop: 1,
        mobile: 7
      },
      {
        name: "Unique Design & Print",
        key: "udp",
        details: "details about the project",
        dir: "../img/projects/udp/",
        size: 7,
        laptop: 1,
        mobile: 7
      },
      {
        name: "Old CV",
        key: "cv",
        details: "details about the project",
        dir: "../img/projects/cv/",
        size: 8,
        laptop: 1,
        mobile: 8
      }]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div className="title-bar">
        <h1 className="title">Projects</h1>
        </div>
          <div className="section-body">
            {this.state.projects.map(el => {
              return <Project data={el}/>
            })
            }

          </div>
          <div className="hr-line"></div>
        </div>
      </React.Fragment>
    )
  }
}
