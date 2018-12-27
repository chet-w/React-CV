import React, { Component } from 'react';

import Circle from './Circle';

export default class DetailedCircle extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className={this.props.direction === "left" ? "detailed-container reversed" : "detailed-container"}>
        <div className="detailed-circle">
          <Circle image={this.props.image} />
        </div>
        <div className={this.props.direction === "left" ? "detailed-text show-left" : "detailed-text show-right"}>
          This is text
        </div>
      </div>

    )
  }
}
