import React from 'react';
import Header from './components/Header';
import './App.css';
import GameInfo from './components/GameInfo';
import games from './data'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header titulo='Lista de games mais vendidos' icone='🎮' />
        <section className='listagem-de-games'>
          {
            games.map((game)=><GameInfo key={game.id} gameInfo={game} />)
          }
        </section>
      </div>
    );
  }
}

export default App;
