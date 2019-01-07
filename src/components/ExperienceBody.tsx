import React, { Component } from 'react';

import CircleChain from "./CircleChain";

export default class ExperienceBody extends Component {
  render() {
    return (
      <React.Fragment>
        <CircleChain type="job" length={3} />
        <CircleChain type="school" length={2} />
      </React.Fragment>
    )
  }
}
