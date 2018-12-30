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
        size: 6,
        laptop: 1,
        mobile: 5
      },
      {
        name: "Unique Design & Print",
        key: "udp",
        details: "details about the project",
        dir: "../img/projects/udp/",
        size: 6,
        laptop: 1,
        mobile: 6
      },
      {
        name: "Old CV",
        key: "cv",
        details: "details about the project",
        dir: "../img/projects/cv/",
        size: 7,
        laptop: 1,
        mobile: 6
      }]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="title">Projects</h1>
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
