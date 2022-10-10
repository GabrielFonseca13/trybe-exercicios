import React from "react";

class Concorda extends React.Component{
  render() {
    const { concorda, handleChange } = this.props;
    return(
      <div>
            <label htmlFor="concorda">
              Concorda com os termos?
              <input
                type="checkbox"
                name="concorda"
                id="concorda"
                value={concorda}
                onChange={handleChange}
              />
            </label>
      </div>
    );
  }
}

export default Concorda;