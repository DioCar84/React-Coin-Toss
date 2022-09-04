import React, { Component } from "react";
import Coin from "./Coin.component";

class CoinFlip extends Component {
  static defaultProps = {
    heads:
      "https://www.royalmint.com/globalassets/the-royal-mint/images/pages/new-pound-coin/large_new_pound.png",
    tails:
      "https://media.wired.co.uk/photos/606da41a5113453af57347d2/master/w_1600%2Cc_limit/pound-coin.png",
  };
  constructor(props) {
    super(props);
    this.state = {
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
      face: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const rand = Math.floor(Math.random() * 2);
    const face = rand === 0 ? this.props.heads : this.props.tails;
    this.setState((st) => {
      return {
        nFlips: st.nFlips + 1,
        face: face,
        nHeads: st.nHeads + (rand === 0 ? 1 : 0),
        nTails: st.nTails + (rand === 1 ? 1 : 0),
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <h1>Coin Flip Game!</h1>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>{`You have flipped ${this.state.nFlips} times, ${this.state.nHeads} were heads and ${this.state.nTails} were tails!`}</p>
        {this.state.nFlips > 0 && <Coin imgSrc={this.state.face} />}
      </div>
    );
  }
}

export default CoinFlip;
