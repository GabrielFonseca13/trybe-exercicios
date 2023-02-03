import React from 'react';
import Camisa from './components/Camisa';
import Concorda from './components/Concorda';
import Description from './components/Description';
import Email from './components/Email';
import Name from './components/Name';

class App extends React.Component {
  state = {
    nome: '',
    email: '',
    description: '',
    concorda: false,
    camisa: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { nome, email, description, concorda, camisa } = this.state;

    return (
      <div>
        <h1>EXERCICIO 1 FORMULÁRIO</h1>
        <form>
          <div>
            <Name handleChange={this.handleChange} name={nome} />
          </div>
          <div>
            <Email handleChange={this.handleChange} name={email} />
          </div>
          <div>
            <Description handleChange={this.handleChange} name={description} />
          </div>
          <div>
            <Camisa handleChange={this.handleChange} name={camisa} />
          </div>
          <div>
            <Concorda handleChange={this.handleChange} name={concorda} />
          </div>
          <div>
          <input type="file" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
