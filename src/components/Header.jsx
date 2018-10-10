import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      body: ''
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({score: this.state.score+1});
  }
  render() {
    return (
      <div>
        <h1 className="navbar">
          <div>Clicky Game</div>
          <div className="text-center"id="clickGame" onClick={this.onClick}>Click an Image Begin</div>
          <div>Score:{this.state.score}/12</div>
        </h1>
        <div className="container border border-dark" id="gamearea">
            me here
        </div>      
      </div>
    )
  }
}
