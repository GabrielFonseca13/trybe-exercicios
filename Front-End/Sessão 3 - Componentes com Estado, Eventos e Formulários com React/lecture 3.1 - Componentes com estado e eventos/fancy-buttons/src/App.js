import React from 'react';

class App extends React.Component {
  text1 = () => {
    console.log('Texto1');
  };
  
  text2 = () => {
    console.log('Texto2');
  };
  
  text3 = () => {
    console.log('Texto3');
  };
  render () {
    return (
      <div>
        <button onClick={this.text1}>BOTÃO 1</button>
        <button onClick={this.text2}>BOTÃO 2</button>
        <button onClick={this.text3}>BOTÃO 3</button>
      </div>
    );
  }
    
}

export default App;
