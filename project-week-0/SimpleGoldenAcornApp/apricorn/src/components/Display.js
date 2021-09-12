import React from "react";
import PropTypes from "prop-types";

function Display({ currAmount }) {
  return <div>{currAmount}</div>;
}

Display.propTypes = {
  currAmount: PropTypes.number.isRequired,
};

export default Display;
