import React, { Component } from 'react';
import DetailedCircle from './DetailedCircle';

export default class CircleChain extends Component {

  generateChain = () => {
      let chain = [];
      for(let i = 0; i < this.props.length; i++){
        chain.push(
            <DetailedCircle image={this.props.type} direction={this.props.direction}/>
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
