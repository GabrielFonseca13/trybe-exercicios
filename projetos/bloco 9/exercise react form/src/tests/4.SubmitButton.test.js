import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

import {
  fillOutForm,
  mockAlert,
  testDataIsNotShowing,
  testDataIsShowing,
} from './helpers';

describe('4 - Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário', () => {
  it('Será verificado se existe um botão com o texto `Enviar`', () => {
    render(<App />);

    const buttonSumit = screen.getByRole('button', { name: 'Enviar' });
    expect(buttonSumit).toBeInTheDocument();
  });

  it('Será verificado se os dados consolidados não aparecem na tela antes de o formulário ser enviado', () => {
    mockAlert();
    render(<App />);

    fillOutForm();
    testDataIsNotShowing();
  });

  it('Será verificado que, ao clicar no botão `Enviar`, os dados consolidados aparecem na tela', () => {
    mockAlert();
    render(<App />);

    fillOutForm();
    testDataIsNotShowing();

    const buttonSumit = screen.getByRole('button', { name: 'Enviar' });
    userEvent.click(buttonSumit);

    testDataIsShowing();
  });
});
