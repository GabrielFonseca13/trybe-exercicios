import React from 'react';

class Description extends React.Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="description">
          Descrição:
          <div>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              cols="30"
              rows="10"
            />
          </div>
        </label>
      </div>
    );
  }
}

export default Description;
