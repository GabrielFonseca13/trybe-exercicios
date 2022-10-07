import React from "react";
import propTypes from 'prop-types';

class Email extends React.Component{
    render(){
    const { email, handleChange } = this.props;
        return (
            <div>
                <label htmlFor="">E-mail</label>
                <input 
                type="email" 
                name="email" 
                value={ email } 
                onChange={ handleChange } 
                placeholder='E-mail' />
            </div>
        )
    }
}

Email.propTypes = {
    email: propTypes.string.isRequired ,
    handleChange: propTypes.func.isRequired ,
};

export default Email;