import React, { Component } from 'react';

import Splash from "./components/sections/Splash";
import Section from "./components/Section";

import "antd/dist/antd.css";
import './App.css';
import './App.light.css';
import './App.media.css';

export interface stateTypes {
  isDarkTheme: boolean;
}

class App extends Component<{}, stateTypes> {

  constructor(props:any) {
    super(props);
    this.state = {
      isDarkTheme: true
    }
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange = (isDark: boolean) => {
    this.setState({ isDarkTheme: isDark })
  }

  render() {
    return (
      <div className={this.state.isDarkTheme ? "App" : "App light"}>
        <Splash handleThemeChange={this.handleThemeChange} isDark={this.state.isDarkTheme}/>
        <Section title="about me" />
        <Section title="experience" />
        <Section title="skills" />
        <Section title="projects" />
        <Section title="contact" />
      </div>
    );
  }
}

export default App;
