import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <form>
      <fieldset>
        <legend>Dados Pessoais</legend> 
        <label htmlFor="name">
          Nome Completo:
          <input 
            type="text" 
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <br />
        <label htmlFor="age">
          Idade
          <input 
            type="number" 
            id="age"
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <br />
        <label htmlFor="city">
          Cidade
          <input 
            type="text" 
            id="city"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </label>
        <br />
      <fieldset>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          <input 
            type="radio"
            id="fundamentals"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({target}) => setModule(target.value)}
          />
          Fundamentos
        </label>
        <label htmlFor="front-end">
          <input 
            type="radio"
            id="front-end"
            value="Front-End"
            checked={module === 'Front-End'}
            onChange={({target}) => setModule(target.value)}
          />
          Front-End
        </label>
        <label htmlFor="back-end">
          <input 
            type="radio"
            id="back-end"
            value="Back-End"
            checked={module === 'Back-End'}
            onChange={({target}) => setModule(target.value)}
          />
          Back-End
        </label>
        <label htmlFor="computer-science">
          <input 
            type="radio"
            id="computer-science"
            value="Ciência da Computação"
            checked={module === 'Ciência da Computação'}
            onChange={({target}) => setModule(target.value)}
          />
          Ciência da Computação
        </label>
      </fieldset>
      </fieldset>
      <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          console.log('Click')}
        } 
      >
        Enviar
      </button>
    </form>
  )
}

export default Form;