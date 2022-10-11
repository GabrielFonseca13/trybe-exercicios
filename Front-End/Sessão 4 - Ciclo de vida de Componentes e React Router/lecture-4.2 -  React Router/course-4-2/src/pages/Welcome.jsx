import React from 'react';

class Welcome extends React.Component {
  render() {
    const { history } = this.props;
    const { location } = history;
    return (
      <div>
        <h1>Boas Vindas</h1>
        <h2>
          {location.state ? location.state.userName : 'Pessoa Desconhecida'}
        </h2>
        <button
          type='button'
          onClick={ () => console.log(history) }
        >
          History
        </button>
      </div>
    );
  }
}

export default Welcome;
