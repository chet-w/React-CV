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
                    { name: "JavaScript", symbol: "Js", level: 9 },
                    { name: "TypeScript", symbol: "Ts", level: 9 },
                    { name: "React", symbol: "Re", level: 8 },
                    { name: "Angular", symbol: "Ng", level: 8 },
                    { name: "R Shiny", symbol: "Rs", level: 8 },
                    { name: "HTML/CSS", symbol: "Ht", level: 10 },
                    { name: "npm", symbol: "Np", level: 8 }
                ],
                back: [
                    { name: "R", symbol: "R", level: 8 },
                    { name: "SQL", symbol: "Ql", level: 8 },
                    { name: "Java", symbol: "J", level: 7 },
                    { name: "Node.JS", symbol: "No", level: 8 },
                    { name: "Data Processing & Manipulation", symbol: "Dm", level: 8 }
                ]
            },
            professional: [
                { name: "Teamwork", symbol: "Tw", level: 9 },
                { name: "Git", symbol: "G", level: 8 },
                { name: "Communication", symbol: "Co", level: 9 },
                { name: "Problem Solving", symbol: "Ps", level: 8 },
                { name: "Initiative", symbol: "In", level: 8 },
                { name: "Project Management", symbol: "Pm", level: 7 }
            ],
            show: "front",
            selectedSkill: { name: "", symbol: "", level: 0 }
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
                    {this.state.show === "front" ? this.state.technical.front.map((el, i) => <SkillItem name={el.name} level={el.level} symbol={el.symbol} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)} />) : this.state.technical.back.map((el, i) => <SkillItem name={el.name} level={el.level} symbol={el.symbol} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)} />)}
                </div>
            )


        } else {
            return (
                <div className="part professional">
                    <div className="skill-title-block">
                        <h3 className="skill-title">Professional</h3>
                    </div>
                    {this.state.professional.map((el, i) => {
                        return <SkillItem name={el.name} level={el.level} symbol={el.symbol} index={i} handleSkillSelect={this.handleSkillSelect.bind(this)}/>
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
