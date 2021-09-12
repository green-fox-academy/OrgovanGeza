import PropTypes from 'prop-types';

function Component(props) {
    return `In 5 years ${props.name} will be ${props.age + 5} years old.`
}

Component.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired

}

export default Component;