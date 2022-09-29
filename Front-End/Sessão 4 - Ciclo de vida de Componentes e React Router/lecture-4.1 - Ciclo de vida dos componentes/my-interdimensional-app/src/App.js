// App.js EX 1 ################
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

// EX 2 ##########################################

import React from 'react';
import Joke from './components/Joke';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject
      });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <p>
        {
          loading 
            ? loadingElement
            : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
        }
      </p>

      </div>
    );
  }
}

export default DadJoke;