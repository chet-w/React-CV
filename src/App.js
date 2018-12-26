import React, { Component } from 'react';

import Splash from "./components/sections/Splash";
import Section from "./components/Section";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
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
