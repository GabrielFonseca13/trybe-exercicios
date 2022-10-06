// EX Course 1 ##############
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // shouldComponentUpdate Original
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // shouldComponentUpdate atualizado para acessar o próximo state e a proxima prop
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return true;
  }

  // componentDidUpdate original 
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate");
  // }

  // componentDidUpdate atualizado para acessar o state anterior e a prop anterior
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;


// App.js EX 2 ################
// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         characters: [],
//     };
//   }

//   componentDidMount() {
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({characters: data.results})
//     })
//   }

//   render() {
//     const { characters } = this.state;
//     return (
//       <div className="App">
//         <h1>
//           Ricky and Morty Characters:
//         </h1>
//         <div className="body">
//           {characters.map(({ name, image }) => {
//             return (
//               <div className="container" key={name}>
//                 <h3>{name}</h3>
//                 <img src={image} alt={name}/>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// EX 3 ##########################################

// import React from 'react';
// import Joke from './components/Jokeg';

// class DadJoke extends React.Component {
//   constructor() {
//     super();

//     this.saveJoke = this.saveJoke.bind(this);

//     this.state = {
//       jokeObj: undefined,
//       loading: true,
//       storedJokes: [],
//     }
//   }

//   async fetchJoke() {
//     this.setState(
//       { loading: true }, // Primeiro parâmetro da setState()!
//       async () => {
//       const requestHeaders = { headers: { Accept: 'application/json' } }
//       const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
//       const requestObject = await requestReturn.json();
//       this.setState({
//         loading: false,
//         jokeObj: requestObject
//       });
//     });
//   }

//   componentDidMount() {
//     this.fetchJoke();
//   }

//   saveJoke() {
//     this.setState(({ storedJokes, jokeObj }) => ({
//       storedJokes: [...storedJokes, jokeObj]
//     }));

//     this.fetchJoke();
//   }

//   render() {
//     const { storedJokes, loading, jokeObj } = this.state;
//     const loadingElement = <span>Loading...</span>;

//     return (
//       <div>
//         <span>
//           {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
//         </span>

//       <p>
//         {
//           loading 
//             ? loadingElement
//             : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
//         }
//       </p>

//       </div>
//     );
//   }
// }

// export default DadJoke;