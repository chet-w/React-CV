import React, { Component } from 'react';
import SkillsBody from '../SkillsBody';
import { Switch } from 'antd';

export interface stateTypes {
  showTechnical: boolean;  
}

export interface propsTypes {

}

export default class Skills extends Component<propsTypes, stateTypes> {
  constructor(props: any) {
    super(props);
    this.state = { showTechnical: true }
  }

  onChange(checked: string) {
    
  }



  render() {
    return (
      <div className="container">
        <div className="title-bar">
        <h1 className="title">Skills</h1>
        </div>
        <div className="section-body">
          <div className="options">No so Technicial<Switch defaultChecked onChange={(e) => this.setState({ showTechnical: e }) } />Technicial</div>
          <SkillsBody showTechnicial={this.state.showTechnical}/>
        </div>
        <div className="hr-line"></div>
      </div>
    )
  }
}
