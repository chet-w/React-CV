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
            <p>General text that ill get to later</p>
          </div>
        </div>
        <div className="hr-line"></div>
      </div>
    </React.Fragment>
  )
}

export default Profile;
