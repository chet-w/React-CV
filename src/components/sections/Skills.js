import React, { Component } from 'react';
import SkillsBody from '../SkillsBody';
import { Switch } from 'antd';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { showTechnicial: true }
  }

  onChange(checked) {
    
  }



  render() {
    return (
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="section-body">
          <div className="options">No so Technicial<Switch defaultChecked onChange={(e) => this.setState({ showTechnicial: e }) } />Technicial</div>
          <SkillsBody showTechnicial={this.state.showTechnicial}/>
        </div>
        <div className="hr-line"></div>
      </div>
    )
  }
}
