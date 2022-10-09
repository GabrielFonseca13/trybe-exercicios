import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    Btn1: 0,
    Btn2: 0,
    Btn3: 0,
  };

  getButtonCollor = (num) => {
    return num%2 === 0 ? 'green' : 'red';
  }

  handleClickBtn1 = () => {
    this.setState((prevState)=> ({
      Btn1: prevState.Btn1 + 1,
    }))
  };

  handleClickBtn2 = () => {
    this.setState((prevState)=> ({
      Btn2: prevState.Btn2 + 1,
    }))
  };

  handleClickBtn3 = () => {
    this.setState((prevState)=> ({
      Btn3: prevState.Btn3 + 1,
    }))
  };

  render() {
    return (
      <div>
        <div>
          <button style={ {backgroundColor: this.getButtonCollor(this.state.Btn1)} } type="button" onClick={this.handleClickBtn1}>
          Cliques Botão 1: {this.state.Btn1}
          </button>
        </div>
        <div>
          <button style={ {backgroundColor: this.getButtonCollor(this.state.Btn2)} } type="button" onClick={this.handleClickBtn2}>
          Cliques Botão 2: {this.state.Btn2}
          </button>
        </div>
        <div>
          <button style={ {backgroundColor: this.getButtonCollor(this.state.Btn3)} }type="button" onClick={this.handleClickBtn3}>
          Cliques Botão 3: {this.state.Btn3}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
