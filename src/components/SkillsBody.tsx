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
                        `I use TypeScript almosy much as JavaScript recently.`,
                        `Coming from three years of using Java in uni, TypeScript seemed like a logical and familiar step in web development. 
                        I've used TypeScript increasingly in my projects whether it be in React (like this app), Angular, or the Ionic framework.`,
                        `I try to use TypeScript in most of my projects to guarentee type-safety rather than JavaScript.`
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
                    { name: "HTML/CSS", symbol: "Ht", level: 10, details: [`
                    I've used HTML and CSS for over seven years, and though I use traditional markup less today due to JSX and Shiny tags I still
                    have a very solid grasp on HTML structure.`, `
                    My use with CSS has increased over the years, and I'd say about 90% of styling in my project is done myself rather than through a framework or library.
                     Whether it be in embedded styles in React, CSS-in-JS styled components, or 
                    SASS/SCSS, I have a lot of skill with CSS for styling and animating web applications on a variety of platforms.`] },
                    { name: "npm", symbol: "Np", level: 8, details: [`
                    With the majority of my project using Node.js, use npm primarily for getting my projects set up and adding resources.`,`
                    I prefer to write my own styles and components, but sometimes I will use npm to install external libraries like ant.d to help with
                    visuals, or dependencies like nodemon and to help with developement.`, `
                    I'm very comfortable using npm to assist in projects by using external libraries.`] }
                ],
                back: [
                    { name: "R", symbol: "R", level: 8, details: [`
                    I use R heavily as it is the foundation for all my work in Shiny.`,`
                    My normal uses with R comes down to importing data from .csv and .xlsx 
                    files, manipulating it into organised data structures, and preparing it to be
                    used in charts and tables through Shiny.`] },
                    { name: "SQL", symbol: "Ql", level: 8, details: [`
                    I'm skilled in using SQL for CRUD commands in SQLite, MySQL, and PostgreSQL for 
                    use in back-end data management.`,`
                    Additionally, I have a great understanding of database management and database 
                    architecture through courses at university.`] },
                    { name: "Java", symbol: "J", level: 7, details: [`
                    I've used Java throughout my time at uni to gain a deep understanding in Object Oriented Programming, 
                    algorithms and data structures, and graphical user interfaces outsite the scope of web development`] },
                    { name: "Node.js", symbol: "No", level: 8, details: [`
                    Node.js is the backbone for the applications I build with JavaScript.`, `
                    I have a good understanding of the environment and it's capabilities and one 
                    of my areas of interest is around using Node for electron desktop applications.`] },
                    { name: "Data Processing & Manipulation", symbol: "Dm", level: 7, details: [`
                    Through using R and SQL I've gained a great knowledge on processing raw data to be used in applicaitons.`, `
                    With R and Shiny I can manipulate raw text data from .csv and .xlsx files into groups, 
                    datatables, and dataframes.`, `
                    With data often not in the format I'd want it in, I can use R to transform data into required formats, 
                    use R and SQL to merge and reduce data to eliminate redundant data and streamline my back-end.`] }
                ]
            },
            professional: [
                { name: "Teamwork", symbol: "Tw", level: 9, details: [`
                I'm a great team player with my work. Professionally I work in a small team of developers, designers, and project managers from many 
                different companies to create a range of different software outcomes.`, `
                While at university working in teams was very common, and whether it was in simple pairs 
                or a large group I was able to work excellently in a team by listening and hearing everyone out 
                when opinions would differ to ensure a smooth project.`,
                `Through my time at Noel Leeming, I worked with a diverse and ever-changing 
                team to find the right solution for our customers`] },
                { name: "Git", symbol: "G", level: 8, details: [`
                I use Git constantly whether I'm working on professional or personal projects.`, `
                I'm experienced in using branches, merges, and issues to structure a project and I'm 
                always looking for a better way to handle my branching and versioning to keep a smooth development 
                cycle.`] },
                { name: "Communication", symbol: "Co", level: 9, details: [`
                Communication is skill that I am very strong in.`, `
                Through working in small and large teams I've developed great communication skills which help me with presentations, 
                get my ideas across, and in turn hear other opinions as well.`, `
                Five years of work at Noel Leeming help me develop my skills for listening to requirements, articulating technical terms 
                to create understanding, and dealing with conflicting opinions.`] },
                { name: "Problem Solving", symbol: "Ps", level: 8, details: [`
                I've always been very intersted in solving problems. Whether it was at Noel Leeming trying to find the right product for someone 
                who doesn't know what they're looking for, or creating software to overcome challenges, problem solving is one of my favourite things 
                about web development.`, `
                Web development gives me a way to create things and make visions a reality to make users' lives easier. 
                `] },
                { name: "Initiative", symbol: "In", level: 8, details: [`
                When I reach a problem or a bug, I try to figure it myself using all the understanding I have of the situation.`, `
                In all roles where I have been in, I take the lead in oppertunities where I am best able to to ensure that the task at hand can be completed efficiently.`] },
                { name: "Project Management", symbol: "Pm", level: 7, details: [`
                Project management is a key part of development and so I make sure I stay on top of a project and manage my time and resources as best I can.`, `
                While in team projects at university, I would often create charts and graphics to provide an overview of the project to create a smoother development process, 
                as well as taking on leadership roles when required to help out team members.` ] }
            ],
            show: "front",
            selectedSkill: { name: "", symbol: "", level: 0, details: [] }
        }
    }

    handleClick = (show: string) => {
        this.setState({ show: show });
    }

    handleSkillSelect = (selected: any) => {
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
                    {this.state.show === "front" ? (
                        this.state.technical.front.map((el, i) => <SkillItem key={i} name={el.name} level={el.level} symbol={el.symbol} details={el.details} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)} />) )
                        : this.state.technical.back.map((el, i) => <SkillItem key={i} name={el.name} level={el.level} symbol={el.symbol} details={el.details} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)} />)
                        }
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
