import React from 'react'
import ProfileItem from "../ProfileItem";

import { Anchor } from 'antd';
const { Link } = Anchor;

const Profile = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="title-bar">
          <h1 className="title">About Me</h1>
        </div>
        <div className="section-body">
          <h3>The Basics</h3>
          <div className="profile-items">
            <ProfileItem image="name" text="My name's Chet" />
            <ProfileItem image="age" text="I'm 22 years old" />
            <ProfileItem image="location" text="And I'm from Wellington, New Zealand" />
          </div>
          <h3>A Bit More</h3>
          <div className="body-text">
            <p>Some things I've always found interesting is solving problems, creating things, and technology. So when I first 
              got in to programming things seemed to fit pretty perfectly.</p>
              <p>Working as a Full-Stack developer gives me the oppertunity to get hands on with client-side visuals 
                as well as the nitty-gritty of back-end work too, which really lets me get hands on with a project and make sure 
                I can do my best to make it great.
              </p>
              <p>My intersts in the field include UI and UX design, responsive and mobile development, data science, and progressive web apps.</p>
              <p>If I'm not burried in VS Code or RStudio, my not-so-code-related interests include cricket, cooking, escape rooms and other puzzles, reading, 
                and going on a bit too much about Lord of the Rings.
              </p>
              <p>I pride myself on my attention to detail and providing an engaging experience in my projects, so please check out the rest of my 
                resume and get in touch if there's anything I can help with!
              </p>
          </div>
        </div>
        <div className="hr-line"></div>
      </div>
    </React.Fragment>
  )
}

export default Profile;
