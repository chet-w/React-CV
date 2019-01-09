import React, { Component } from 'react';

import CircleChain from "./CircleChain";

export interface expItem {
  title: string;
  timeframe: string;
  position?: string;
  details: string[];
  skills?: string[];
};

export interface stateTypes {
  jobs: expItem[];
  schools: expItem[];  
};

export class ExperienceBody extends Component<{}, stateTypes> {
  constructor(props: {}){
    super(props);
    this.state = {
      jobs: [{
        title: "Epi-Interactive",
        position: "Junior Developer",
        timeframe: "July 2018 - present",
        details: [`At Epi-Interactive I worked in a small team of experienced developers to create data-rich web apps
                  primarily using R and the Shiny framework, while also incorperating core web fundamentals in JavaScript and CSS.`,
                  `I worked both individually and in a team to create applications for companies like the Ministry of Health and 
                  Health Promotion Agency to visualise vast amounts of data through engaging dashboards.`
                ],
        skills: [
          "R", "Shiny", "Data Manipulation", "JavaScript", "HTML/CSS", "Git", "SQL", "Teamwork"
        ]
      },
      {
        title: "Noel Leeming: Featherston Street",
        position: "Sales Consultant",
        timeframe: "January 2015 - July 2018",
        details: [`Now working at my third Noel Leeming store I was more experienced with handling the 
                  demands of the role, and was able to step up into more roles. I picked up skills in cash handling,
                  stock management, health and safety protocols, and financial responsibilities with credit and lending as a Sales Consultant.`,
                  `I was among the most experienced in my role so I would often be asked to teach new staff how things are done, as well as handling 
                  the team in the absence of a manager.
                  `
                ],
        skills: ["Leadership", "Teamwork", "Communication", "Problem Solving"]
      },
      {
        title: "Noel Leeming: Tory Street",
        position: "Sales Consultant",
        timeframe: "June 2013 - December 2014",
        details: [`I've always been interested in technology, so I felt at home working with computers, tablets, and phones.`,
          `As a sales consultant I would provide customers with advice to find a technology solution to fit they're needs.`,
        `I worked in a diverse team where I became proficient in communicating and customers, problem solving to sell the right product,
         and teamwork to be able to help the team reach targets and goals.`,
        ],
        skills: ["Teamwork", "Communication", "Problem Solving"]
      }
    ],
      schools: [{
        title: "Victoria University of Wellington",
        position: "Bachelor of Science, Major in Computer Science, Minor in Information Systems",
        timeframe: "March 2015 - November 2018",
        details: [`Studying at Victoria gave me the main skills I carry with me for software.`,
        `Here I took courses to grow a deep understanding of many aspects of development such as 
        OOP, algorithms and data structures, database architecture, networking, Git, client-server applications,
        mobile development, and user interface and user experience design.`
        ],
        skills: ["JavaScript", "TypeScript", "Java", "SQL", "Git", "Teamwork", "Communication", "Angular" ]
      },
      {
        title: "Upper Hutt College",
        position: "NCEA Levels 1-3",
        timeframe: "February 2011 - November 2014",
        details: [`At high school I got my first hands on experience with programming.`,
        `I took courses in digital technlogies and computing to gain some fundamental knowledge on 
        HTML/CSS, databases, Python, and information systems.`
      ]
      }
    ]
    }
  }


  render() {

    return (
      <React.Fragment>
        <CircleChain type="job" length={3} data={this.state.jobs}/>
        <CircleChain type="school" length={2} data={this.state.schools}/>
      </React.Fragment>
    )
  }
}
