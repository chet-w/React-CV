import React, { Component } from 'react';
import SkillLogo from './SkillLogo';
import { Progress } from "antd";

interface PropTypes {
  selected: {
    name: string, symbol: string, level: number; details: string[]
  },
}

interface StateTypes {
  didUpdate: boolean;
}

class SkillDetail extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      didUpdate: false
    };
  }


  componentDidUpdate(prevProps: PropTypes) {
    if (prevProps !== this.props) {
      if (!this.state.didUpdate) {
        this.setState({ didUpdate: true }, () => {
          setTimeout(() => this.setState({ didUpdate: false }), 500);
        });
      }

    }
  }

  render() {
    return (
      <div className={this.state.didUpdate ? "fade-up" : ""}>
        <SkillLogo selected={this.props.selected} />
        <div className="selected-skill">
          <Progress percent={this.props.selected.level * 10} showInfo={false} />
        </div>
        <div className="skills-details">
          {this.props.selected.details.map(el => <p>{el}</p>)}
        </div>
      </div>
    )
  }
}

export default SkillDetail;
