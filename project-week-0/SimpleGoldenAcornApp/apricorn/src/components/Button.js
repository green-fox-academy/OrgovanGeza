import React from "react";
import PropTypes from "prop-types";

function Button({ name, buttonFunction }) {
  function clickHandler() {
    if (name === "Eat one") buttonFunction(-1);
    if (name === "Buy one") buttonFunction(+1);
  }

  return <button onClick={clickHandler}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default Button;