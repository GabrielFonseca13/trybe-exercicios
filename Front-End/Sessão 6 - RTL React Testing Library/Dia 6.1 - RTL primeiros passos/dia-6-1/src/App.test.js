import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Verificar se existe um campo de email', () => {
  // Acessar os elementos;
  render (<App />);
  const inputEmail = screen.getByLabelText('Email');
  // Interagir com os elementos (se necessário);

  // Testar os elementos;
   expect(inputEmail).toBeInTheDocument();
   expect(inputEmail).toHaveProperty('type', 'email');
});

test('verificar se existem 2 botões', () => {
// Acessar os elementos;
  render(<App />);
  const buttons = screen.getAllByRole('button');
// Interagir com os elementos (se necessário);

// Testar os elementos;
expect(buttons).toHaveLength(2);
});

test('Verficar se existe um botão "Enviar"', () => {
// Acessar os elementos;
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
// Interagir com os elementos (se necessário);

// Testar os elementos;
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  // Acessar os elementos;
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');

  // Testar os elementos;
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  // Acessar os elementos;
  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  // Interagir com os elementos (se necessário);
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  // Testar os elementos;
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
// Acessar os elementos;

// Interagir com os elementos (se necessário);

// Testar os elementos;