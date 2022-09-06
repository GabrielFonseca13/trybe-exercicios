import React from 'react';
import PropTypes from 'prop-types'
class TextField extends React.Component {
  render() {
    const { type, name, value, onChange } = this.props;
    return (
      <input
        name={ name }
        type={ type }
        value={ value }
        onChange={ onChange }
      />
    );
  }
}
TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default TextField;
