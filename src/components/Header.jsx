import React, { Component } from 'react'
import shuffle from 'shuffle-array';
import $ from "jquery";
import Pics from './Pics';

let pics = ["https://www.smashbros.com/wiiu-3ds/images/character/link/main.png",
    "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_luigi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
    "https://fireemblem.gamepress.gg/sites/fireemblem/files/2017-08/Full_Attack_Roy.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Kirby.png/500px-Kirby.png",
    "https://vignette.wikia.nocookie.net/ssb/images/d/d8/3DF3F79C-466B-4DC1-A3A7-B46E00BA97F6.png/revision/latest?cb=20180912182812",
    "https://mario.nintendo.com/assets/img/home/intro/mario-pose2.png"];

let chosen = [];

function test1() {
    shuffle(pics);
    console.log(pics)
}



export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            val: ''
        }
    }

    onClick = () => {
        if (this.state.score > 4) {
            alert("you win");
            this.setState({score: this.state.score - 5 })
        } else {
            this.setState({ score: this.state.score + 1 });
            console.log(chosen);
            test1();
        }
    }
    render() {
        return (
            <div>
                <h1 className="navbar">
                    <div>Clicky Game</div>
                    <div className="text-center" id="clickGame" onClick={this.onClick}>Click an Image Begin</div>
                    <div>Score:{this.state.score}/6</div>
                </h1>
                <div className="bg-dark">
                    <div onClick={this.onClick} className="bg-danger container border border-dark" id="gamearea">
                        <img className="w-25 h-25" onClick={this.onClick} src={pics[0]}></img>
                        <img className="w-25 h-25" onClick={this.onClick} src={pics[1]} val={pics[1]}></img>
                        <img className="w-25 h-25" onClick={this.onClick} src={pics[2]} val={pics[2]}></img>
                        <img className="w-25 h-25" onClick={this.onClick} src={pics[3]} val={pics[3]}></img>
                        <img className="w-25 h-25" onClick={this.onClick} src={pics[4]} val={pics[4]}></img>
                        <img className="w-25 h-25" onClick={this.onClick} src={pics[5]} val={pics[5]}></img>
                    </div>
                </div>
            </div>
        )
    }
}
