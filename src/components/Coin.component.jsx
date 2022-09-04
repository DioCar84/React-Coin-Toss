import React, { Component } from "react";
import "./Coin.styles.css";

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img
          className="Coin-img"
          src={this.props.imgSrc}
          alt="pound coin front"
        />
      </div>
    );
  }
}

export default Coin;
