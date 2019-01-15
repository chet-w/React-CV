import React from 'react';
import { Switch } from 'antd';


export interface propTypes {
  handleThemeChange: Function;
  isDark: boolean;
}

class Splash extends React.Component<propTypes> {
  constructor(props: propTypes) {
    super(props);
  }

  render() {
    return (
      <div className="splash">
        <div className="container">
          <h1 className="accent-down">Chethana</h1>
          <h1>Wijesekera</h1>
          <div className="hr-line"></div>
          <h2><span className="accent-down">Full-stack</span> Web Developer</h2>
        </div>
        <div className="switch-container">
          <div>
            <span className={!this.props.isDark ? "accent-down" : ""}>Light mode</span>
            <Switch defaultChecked onChange={(e) => this.props.handleThemeChange(e)}/> 
            <span className={this.props.isDark ? "accent-down" : ""}>Dark mode</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash
