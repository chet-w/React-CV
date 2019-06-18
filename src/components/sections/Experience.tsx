import React, { Component } from 'react';
import { ExperienceBody } from "../ExperienceBody";

export default class Experience extends Component {
  render() {
    return (
      <div className="container">
        <div className="title-bar">
        <h1 className="title">Experience</h1>
        </div>
        <div className="prelude">
          Here's a quick summary of my work so far. Click on a circle to get some more information about my role, 
          the skills I used, and how it's helped me out.
        </div>
        <div className="section-body experience-body">
        <ExperienceBody />
        </div>
        <div className="hr-line"></div>
      </div>

    )
  }
}
