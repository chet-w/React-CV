import React, { Component } from 'react';
import SkillItem from './SkillItem';

export default class SkillsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            technical: {
                front: [
                    { name: "JavaScript", level: 9 },
                    { name: "TypeScript", level: 9 },
                    { name: "React", level: 8 },
                    { name: "Angular", level: 8 },
                    { name: "R Shiny", level: 8 },
                    { name: "HTML/CSS", level: 10 },
                    { name: "npm", level: 8 }
                ],
                back: [
                    { name: "R", level: 8 },
                    { name: "SQL", level: 8 },
                    { name: "Java", level: 7 },
                    { name: "Node.JS", level: 8},
                    { name: "Data Processing & Manipulation", level: 8}
                ]
            },
            professional: [
                { name: "Teamwork", level: 9 },
                { name: "Git", level: 8 },
                { name: "Communication", level: 9 },
                { name: "Problem Solving", level: 8 },
                { name: "Initiative", level: 8 },
                { name: "Project Management", level: 7 }
            ]
        }
    }

    renderSkills = () => {
        if(this.props.showTechnicial) {
            return (
                <div className="part technical">
                    <div className="front">
                        {this.state.technical.front.map((el) => {
                            return <SkillItem name={el.name} level={el.level} />
                        })}
                    </div>
                    <div className="back">
                        {this.state.technical.back.map((el) => {
                            return <SkillItem name={el.name} level={el.level} />
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="part professional">
                    {this.state.professional.map((el) => {
                        return <SkillItem name={el.name} level={el.level} />
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderSkills()}
            </React.Fragment>
        )
    }
}
