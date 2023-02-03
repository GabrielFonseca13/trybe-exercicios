import React from "react";

class Name extends React.Component{
  render() {
    const { nome, handleChange } = this.props;
    return(
      <div>
            <label htmlFor="nome">
              Nome:
              <input
                id="nome"
                name="nome"
                value={nome}
                onChange={handleChange}
                type="text"
              />
            </label>
          </div>

    );
  }
}

export default Name;