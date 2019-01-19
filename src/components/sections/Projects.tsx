import React, { Component } from 'react';
import Project from "../Project";
import { Button } from "antd";

interface PropTypes {

};

interface StateTypes {
  projects: {
    name: string,
    key: string,
    details: string[],
    tech: string[],
    dir: string,
    size: number,
    laptop: number,
    mobile: number
  }[];
}

export default class Projects extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      projects: [{
        name: "Victoria Business School",
        key: "vbs",
        details: [`
          This app was created as a project for an Application Development course while I was at Uni.`, 
          `
          It's a slimmed down LMS where a user can log in as a Lecturer to create and modify courses, deal out
          assignments, and browse existing courses. As a Student, you can add courses to your feed, view your assignments, and
          browse a list of all courses.`,
          `
          Lecturer and Student experiences are tailored by using a REST API at the university.
        `],
        tech: ["JavaScript", "AngularJS", "RESTful API", "HTML/CSS"],
        dir: "../img/projects/vbs/",
        size: 7,
        laptop: 1,
        mobile: 7
      },
      {
        name: "Unique Design & Print",
        key: "udp",
        details: [`
        Unique Design & Print is my fathers company in Lower Hutt, and I remade the website as a 
        personal project. It incorperates the existing features of the website and adds in a more modern 
        and responsive design, as well as a gallery of designs and work.`,
        `
        The app is currently hosted at Firebase.
        `
        ],
        tech: ["TypeScript", "Angular", "JavaScript", "HTML/CSS", "Firebase"],
        dir: "../img/projects/udp/",
        size: 7,
        laptop: 1,
        mobile: 7
      },
      {
        name: "Old CV",
        key: "cv",
        details:[ `
          This was the last version of my CV and my first attempt at a web-based CV.`,
          `
          It included similar details to this version including a gallery of my work from the time. 
          The site is hosted at Github using Github Pages.
        `],
        tech: ["HTML/CSS", "JavaScript"],
        dir: "../img/projects/cv/",
        size: 8,
        laptop: 1,
        mobile: 8
      }
    ]
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

            {this.state.projects.map((el, i) => {
              return (
                <div className="project-wrapper">
                  <Project key={`${el.key}-${i}`} data={el} />
                </div>
              )
            })
            }
            <div className="github-plug">
              <a target="_blank" href="https://www.github.com/chet-w"><Button type="primary">See all my projects on Github</Button></a>
            </div>

          </div>
          <div className="hr-line"></div>
        </div>
      </React.Fragment>
    )
  }
}
