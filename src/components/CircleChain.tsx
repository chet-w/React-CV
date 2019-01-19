import React, { Component } from 'react';
import DetailedCircle from "./DetailedCircle";
import { expItem } from "./ExperienceBody";

export interface PropTypes { 
  length: number;
  type: string;
  data: expItem[];
}

export default class CircleChain extends Component<PropTypes> {
  constructor(props: PropTypes){
    super(props);
  }

  generateChain = () => {
      let chain = [];
      for(let i = 0; i < this.props.length; i++){
        chain.push(
            <DetailedCircle key={i} image={this.props.type} data={this.props.data[i]}/>
        );
      }
      return chain;
  }  

  render() {
    return (
      <div className="circle-chain">
        {this.generateChain()}
      </div>
    )
  }
}
