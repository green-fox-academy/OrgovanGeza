import React, { Component } from "react";

import Button from "./components/Button";
import Display from "./components/Display";

class SimpleGoldenAcornApp extends Component {
  constructor() {
    super();
    this.state = {
      currAmount: 0,
    };
  }

  render() {
    const keyPressHandler = (e) => {
      if (e.which === 38) acornNumberModifier(+1);
      if (e.which === 40) acornNumberModifier(-1);
    };

    const acornNumberModifier = (amountToBeModifiedBy) => {
      console.log("I have been avoked");
      if (this.state.currAmount !== 0 && amountToBeModifiedBy === -1) {
        this.setState({
          currAmount: this.state.currAmount + amountToBeModifiedBy,
        });
      } else if (amountToBeModifiedBy === +1) {
        this.setState({
          currAmount: this.state.currAmount + amountToBeModifiedBy,
        });
      }
    };

    return (
      <div onKeyDown={keyPressHandler}>
        <Button name="Buy one" buttonFunction={acornNumberModifier} />
        <Display currAmount={this.state.currAmount} />
        <Button name="Eat one" buttonFunction={acornNumberModifier} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
