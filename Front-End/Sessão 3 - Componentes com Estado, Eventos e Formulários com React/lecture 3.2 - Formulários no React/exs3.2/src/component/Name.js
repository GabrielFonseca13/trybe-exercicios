import React from "react";
import PropTypes from 'prop-types';

class Name extends React.Component {
    render () {
        const { nome, handleChange } = this.props;
        return (
            <div>
                <label htmlFor="nome">Nome</label>
                <input 
                type="text" 
                name="nome" 
                value={ nome }
                onChange={ handleChange } 
                placeholder='Nome'/>
            </div>
        )
    }
}

Name.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

export default Name;