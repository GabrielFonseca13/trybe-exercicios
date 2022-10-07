import React from 'react';
import Joke from './Joke';

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
        { loading: true },
        async () => {    
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: true,
          jokeObj: requestObject,
        });
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    // Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));
    this.fetchJoke();
  }

  render() {
    const { storedJokes , loading, jokeObj } = this.state;
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