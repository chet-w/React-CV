import React, { Component } from 'react';

import Profile from './sections/Profile';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';


export interface propTypes {
    title: string;
}

export interface stateTypes {
    page: any;
}

export default class Section extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = { page: this.getPage() }
    }

    getPage = () => {
        if(this.props.title === "about me"){
            return <Profile />
        } else if (this.props.title === "experience") {
            return <Experience />
        } else if (this.props.title === "skills") {
            return <Skills />
        } else if (this.props.title === "projects")  {
            return <Projects />
        } else if (this.props.title === "contact")  {
            return <Contact />
        }
    }

    getClassName = () => {
        if(this.props.title === "about me") {
            return "section profile"
        } else {
            return `section ${this.props.title}`
        }
    }

    render() {
        return (
            <div className={this.getClassName()}>{this.state.page}</div>
        )
    }
}
