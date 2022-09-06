import React from 'react';
import './App.css';
import logo from './assets/trybemestar.png';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    showTimer: false,
  }

  toggleTimer = () => {
    const { showTimer } = this.state;
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
    console.log(showTimer);
  }

  // () => { // return }
  // () => ({ // retornar um objeto })

  render() {
    const { showTimer } = this.state;
    return (
      <div>
        <header>
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <div>
          {showTimer && <Timer />}
          <button type="button" onClick={ this.toggleTimer }>
            {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
