import React from "react";

class Email extends React.Component{
  render() {
    const { email, handleChange } = this.props;
    return(
      <div>
        <label htmlFor="email">
          Email:
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
            />
         </label>
      </div>
    );
  }
}

export default Email;