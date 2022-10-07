import React from 'react';
import Email from './component/Email';
import Name from './component/Name';

class App extends React.Component {
 
  state = {
    nome: '',
    email: '',
    agreeTerms: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render () {
    const { nome, email, agreeTerms } = this.state;
    return (
      <form>
        <h1>Exercício 1 - dia 3.2</h1>
        <div>
          <label>Pagamento</label>
          <select name="sel1" id="sel'"> 
            <option value="pix">PIX</option>
            <option value="cartao">Cartão</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
        <Name name={ nome } handleChange={ this.handleChange } />
        <Email email={ email } handleChange={ this.handleChange } />
        <div>
          <label htmlFor="">Concordo com os termos</label>
          <input 
          type="checkbox" 
          name="agreeTerms" 
          value={ agreeTerms } 
          onChange={ this.handleChange } 
          />
        </div>
        <input type="file" />
      </form>
    );
  }
}

export default App;
