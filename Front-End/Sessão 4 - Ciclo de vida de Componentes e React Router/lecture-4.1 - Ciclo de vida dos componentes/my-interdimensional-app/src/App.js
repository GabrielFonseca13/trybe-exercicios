// // EX Course 1 ##############
// import React from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     };
//     console.log("construtor");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   // shouldComponentUpdate Original
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log("shouldComponentUpdate");
//   //   return true;
//   // }

//   // shouldComponentUpdate atualizado para acessar o próximo state e a proxima prop
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate", this.state, nextState);
//     return true;
//   }

//   // componentDidUpdate original
//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log("componentDidUpdate");
//   // }

//   // componentDidUpdate atualizado para acessar o state anterior e a prop anterior
//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate", this.state, prevState);
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>Contador</p>
//         <button
//           onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
//         >
//           Soma
//         </button>
//         <p>{this.state.counter}</p>
//       </div>
//     );
//   }
// }

// export default Counter;

// App.js EX 2 ################
// App.js

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  componentDidMount(){
    this.fetchCharacters();
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

// Exercicio Dad Joke ###############

// import React from 'react';
// import DadJoke from './components/DadJoke';

// class App extends React.Component {
//   render() {
//     return <div>
//       <h1>PIADAS</h1>
//       <DadJoke />
//     </div>;
//   }
// }

// export default App;