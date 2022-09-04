import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

// instalou o react-router-dom@v5
// Importou o BrowserRouter
// Criamos as rotas <Switch> e o <Route>
// Vamos criar os Links <Link>
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
