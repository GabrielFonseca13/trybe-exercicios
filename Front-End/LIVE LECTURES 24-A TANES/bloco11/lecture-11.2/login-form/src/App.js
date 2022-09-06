import React from 'react';
import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';

class App extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="App">
        <section>
          <form>
            <h1>Login</h1>
            <TextField
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
            <TextField
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
            />
            <Button
              type="button"
              title="LOGIN"
              onClick={ () => console.log('Ola') }
            />
          </form>
        </section>
      </div>
    );
  }
}

export default App;
