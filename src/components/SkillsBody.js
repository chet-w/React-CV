import React, { Component } from 'react';
import SkillItem from './SkillItem';
import SkillsDetail from './SkillsDetail';

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
                    { name: "Node.JS", level: 8 },
                    { name: "Data Processing & Manipulation", level: 8 }
                ]
            },
            professional: [
                { name: "Teamwork", level: 9 },
                { name: "Git", level: 8 },
                { name: "Communication", level: 9 },
                { name: "Problem Solving", level: 8 },
                { name: "Initiative", level: 8 },
                { name: "Project Management", level: 7 }
            ],
            show: "front"
        }
    }

    handleClick = (show) => {
        this.setState({ show: show });
    }

    

    renderSkills = () => {
        if (this.props.showTechnicial) {
            return (
                <div className="part technical">
                    <div className="skill-title-block">
                        <h3 className={this.state.show === "front" ? "skill-title accent-down" : "skill-title"}>
                            <a onClick={() => this.handleClick("front")}>Front-end</a>
                        </h3>
                        <h3 class="skill-title divider">|</h3>
                        <h3 className={this.state.show === "back" ? "skill-title accent-down" : "skill-title"}>
                            <a onClick={() => this.handleClick("back")}>Back-end</a>
                        </h3>
                    </div>

                    {this.state.show === "front" ? this.state.technical.front.map((el, i) => <SkillItem name={el.name} level={el.level} index={i} />) : this.state.technical.back.map((el, i) => <SkillItem name={el.name} level={el.level} index={i} />)}
                </div>
            )


        } else {
            return (
                <div className="part professional">
                    <div className="skill-title-block">
                        <h3 className="skill-title">Professional</h3>
                    </div>
                    {this.state.professional.map((el, i) => {
                        return <SkillItem name={el.name} level={el.level} index={i} />
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
                    <SkillsDetail />
                </div>
            </div>
        )
    }
}
