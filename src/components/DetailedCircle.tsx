import React, { Component } from 'react';
import Circle from "./Circle";
import { expItem } from "./ExperienceBody";

import { Collapse } from 'antd';

const Panel = Collapse.Panel;

interface PropTypes {
  image: string;
  data: expItem;
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

          <Collapse defaultActiveKey={['0']}>
            <Panel showArrow={false} header={<React.Fragment>
              <div className="name accent-down"><h4>{this.props.data.title}</h4></div>
              <div className="timeframe">{this.props.data.timeframe}</div>
            </React.Fragment>
            } key="1">
              <div className="details">
                {this.props.data.details.map(el => <p>{el}</p>)}
              </div>
              {this.props.data.skills ? (
                <div className="skills-learned">
                  <h5 className="accent-down">Skills applied</h5>
                  <ul>
                    {this.props.data.skills.map(el => <li>{el}</li>)}
                  </ul>
                </div>
              ) : ""
              }
            </Panel>
          </Collapse>
        </div>
      </div>

    )
  }
}

export default DetailedCircle;
