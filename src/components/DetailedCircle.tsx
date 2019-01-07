import React, { Component } from 'react';
import Circle from "./Circle";

interface PropTypes {
  image: string;
}

class DetailedCircle extends Component<PropTypes> {
  constructor(props: PropTypes) {
    super(props);

  }
  render() {
    return (
      <div className="detailed-container">
        <div className="detailed-circle">
          <Circle image={this.props.image} />
        </div>
        <div className="detailed-text show-right">
          This is text
        </div>
      </div>

    )
  }
}

export default DetailedCircle;
