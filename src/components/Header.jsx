import React, { Component } from 'react'
import shuffle from 'shuffle-array';
import $ from "jquery";
import Pics from './Pics';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            body: ''
        }
    }

    onClick = () => {
        this.setState({ score: this.state.score + 1 });
        shuffle(Pics);
    }
    render() {
        return (
            <div>
                <h1 className="navbar">
                    <div>Clicky Game</div>
                    <div className="text-center" id="clickGame" onClick={this.onClick}>Click an Image Begin</div>
                    <div>Score:{this.state.score}/12</div>
                </h1>
                <div className="bg-dark">
                    <div onClick={this.onClick} className="bg-danger container border border-dark" id="gamearea"><Pics /></div>
                </div>
            </div>
        )
    }
}
