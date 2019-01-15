import React, { Component } from 'react';
import SkillItem from './SkillItem';
import SkillsDetail from './SkillsDetail';


export interface propTypes {
    showTechnicial: boolean;
}

export interface skillType {
    name: string;
    symbol: string;
    level: number;
    details: string[];
}

export interface stateTypes {
    technical: {
        front: skillType[],
        back: skillType[]
    };
    professional: skillType[];
    show: string;
    selectedSkill: skillType;
}

export default class SkillsBody extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {
            technical: {
                front: [
                    { name: "JavaScript", symbol: "Js", level: 9, details: [
                        `JavaScript is my bread and butter.`,
                        `I used JavaScript on all my projects whether its for simple DOM manipulation or 
                        rich web applications built in React or Angular. I'm experienced with using ES6/7 syntax,
                        using APIs to access offsite data, and modules which I integrate into my projects.`,
                        `I'm always trying to improve my skills with JavaScript by increasing my use of JavaScript frameworks and libraries
                        like React and Angular.`
                    ]},
                    { name: "TypeScript", symbol: "Ts", level: 9, details: [
                        `I find TypeScript to be the future of JavaScript.`,
                        `Coming from three years of using Java in uni, TypeScript seemed like a logical and familiar step in web development. 
                        I've used TypeScript increasingly in my projects whether it be in React (like this app), Angular, or the Ionic framework.`
                    ] },
                    { name: "React", symbol: "Re", level: 8, details: [
                            `React is my preferred library for front-end work. It's lightweight, modern, and makes web development easier with components.`,
                            `I've used React mainly on the web platform to make projects like this and a few other small apps, as well as React Native to create 
                            a basic Pokedex app for a uni project.`
                    ] },
                    { name: "Angular", symbol: "Ng", level: 8, details: [
                        `I've used Angular for a few of my larger projects. Firstly, I've used AngularJS for creating a lightweight LMS for a uni project and 
                        Angular2 for creating a more modern and dynamic website for my father's company.`,
                        `I'm familar with both variations of the framework despite how different they are, as well as the Angular-based Ionic framework which I 
                        used to create a hybrid mobile Pokedex app for uni.`
                    ] },
                    { name: "R Shiny", symbol: "Rs", level: 8, details:[
                        `Shiny is a relatively new framework that I've learned to use at Epi-interactive.`,
                        `I primarily use Shiny for creating data-driven web apps powered by R. Using reactive values, datatables, and charts
                        I'm able to create rich data dashboards to visualise vast amounts of data.`
                    ] },
                    { name: "HTML/CSS", symbol: "Ht", level: 10, details: [] },
                    { name: "npm", symbol: "Np", level: 8, details: [] }
                ],
                back: [
                    { name: "R", symbol: "R", level: 8, details: [] },
                    { name: "SQL", symbol: "Ql", level: 8, details: [] },
                    { name: "Java", symbol: "J", level: 7, details: [] },
                    { name: "Node.JS", symbol: "No", level: 8, details: [] },
                    { name: "Data Processing & Manipulation", symbol: "Dm", level: 8, details: [] }
                ]
            },
            professional: [
                { name: "Teamwork", symbol: "Tw", level: 9, details: [] },
                { name: "Git", symbol: "G", level: 8, details: [] },
                { name: "Communication", symbol: "Co", level: 9, details: [] },
                { name: "Problem Solving", symbol: "Ps", level: 8, details: [] },
                { name: "Initiative", symbol: "In", level: 8, details: [] },
                { name: "Project Management", symbol: "Pm", level: 7, details: [] }
            ],
            show: "front",
            selectedSkill: { name: "", symbol: "", level: 0, details: [] }
        }
    }

    handleClick = (show: string) => {
        this.setState({ show: show });
    }

    handleSkillSelect = (selected: any) => {
        console.log(selected);
        this.setState({ selectedSkill: selected })
    }

    renderSkills = () => {
        if (this.props.showTechnicial) {
            return (
                <div className="part technical">
                    <div className="skill-title-block">
                        <h3 className={this.state.show === "front" ? "skill-title accent-down" : "skill-title"}>
                            <a onClick={() => this.handleClick("front")}>Front-end</a>
                        </h3>
                        <h3 className="skill-title divider">|</h3>
                        <h3 className={this.state.show === "back" ? "skill-title accent-down" : "skill-title"}>
                            <a onClick={() => this.handleClick("back")}>Back-end</a>
                        </h3>
                    </div>
                    {this.state.show === "front" ? this.state.technical.front.map((el, i) => <SkillItem name={el.name} level={el.level} symbol={el.symbol} details={el.details} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)} />) : this.state.technical.back.map((el, i) => <SkillItem name={el.name} level={el.level} symbol={el.symbol} details={el.details} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)} />)}
                </div>
            )


        } else {
            return (
                <div className="part professional">
                    <div className="skill-title-block">
                        <h3 className="skill-title">Professional</h3>
                    </div>
                    {this.state.professional.map((el, i) => {
                        return <SkillItem name={el.name} level={el.level} symbol={el.symbol} index={i} details={el.details} handleSkillSelect={this.handleSkillSelect.bind(this)}/>
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="skills-body">
                <div className="half-page left">
                    {this.renderSkills()}
                </div>
                <div className="half-page right">
                    <SkillsDetail selected={this.state.selectedSkill}/>
                </div>
            </div>
        )
    }
}
