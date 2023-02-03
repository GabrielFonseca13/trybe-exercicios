import React from "react";

class Camisa extends React.Component{
  render() {
    const { camisa, handleChange } = this.props;
    return(
      <div>
        <label htmlFor="camisa">
          Tamanho de Camisas:
          <select
            name="camisa"
            value={camisa}
            onChange={handleChange}
            id="camisa"
          >
            <option />
            <option>P</option>
            <option>M</option>
            <option>G</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Camisa;