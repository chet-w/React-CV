import React, { Component } from 'react';
import Circle from "./Circle";

interface PropTypes {
  direction: string;
  image: string;
}

class DetailedCircle extends Component<PropTypes> {
  constructor(props: PropTypes) {
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

export default DetailedCircle;
