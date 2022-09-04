import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { title, type, onClick } = this.props;

    return (
      <button
        type={ type }
        onClick={ onClick }
      >
        {title}

      </button>
    );
  }
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
