import React from 'react';
import './App.css';
import Image from './components/Image';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Image 
          source={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'} 
          alt={'Cute cat staring'} 
        />
      </div>
    );
  }
}

export default App;
