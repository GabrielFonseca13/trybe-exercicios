import React from 'react';
import './App.css';

const text1 = () => {
  console.log('Texto1');
};

const text2 = () => {
  console.log('Texto2');
};

const text3 = () => {
  console.log('Texto3');
};

function App() {
  return (
    <div>
      <button onClick={text1}>BOTÃO 1</button>
      <button onClick={text2}>BOTÃO 2</button>
      <button onClick={text3}>BOTÃO 3</button>
    </div>
  );
}

export default App;
