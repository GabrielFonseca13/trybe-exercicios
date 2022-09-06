/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
import React from 'react';
import data from './data';
import './App.css';

// CRIAR UM ESTADO => state = {}
// DECLARO FUNC COM ARROW () => {}
class App extends React.Component {
  // O ESTADO É SEMPRE UM OBJETO
  state = {
    inputValue: '',
    turma: 24,
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleChangeTurma = (event) => {
    this.setState(({ turma: Number(event.target.value) }));
  };

  render() {
    console.log('Renderizou');
    return (
      <div>
        {/* Como fazer o evento de alterar o input */}
        <input type="text" onChange={ this.handleChange } />
        <input type="number" onChange={ this.handleChangeTurma } />

        <ul>
          {
            data
              .filter((color) => color.name.includes(this.state.inputValue))
              .map((color) => <li key={ color.name }>{color.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
