import PropTypes from "prop-types";

function RenderableComponent(props) {
  return `In 5 years Sally will be ${props.renderable} years old.`;
}

RenderableComponent.propTypes = {
  renderable: PropTypes.node,
};

export default RenderableComponent;
