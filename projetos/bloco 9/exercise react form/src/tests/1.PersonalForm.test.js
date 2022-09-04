import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

import {
  name,
  expectedEmail as emailValue,
  expectedCpf as cpfValue,
  longText,
  longEmail,
} from './helpers';

describe('1 - Crie um `<fieldset>` para os dados pessoais', () => {
  beforeEach(() => {
    render(<App />);
  });

  /* NOME */
  it('Será verificado se exsite um campo do tipo `text` envolto por uma `label` com o texto `Nome`', () => {
    const nameInput = screen.getByLabelText('Nome');

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toBeInTheDocument();
  });

  it('Será verificado se o campo `Nome` tem o tamanho máximo de 40 caracteres', () => {
    const nameInput = screen.getByLabelText('Nome');

    const expectedText = longText.slice(0, 40).toUpperCase();
    userEvent.type(nameInput, longText);
    expect(nameInput).toHaveValue(expectedText);
  });

  it('Será verificado se, ao digitar no campo `Nome` todas as letras ficam em caixa alta', () => {
    const nameInput = screen.getByLabelText('Nome');

    userEvent.type(nameInput, name);
    expect(nameInput).toHaveValue(name.toUpperCase());
  });

  /* EMAIL */
  it('Será verificado se existe um campo de texto envolto por uma `label` com o texto `Email`', () => {
    const emailInput = screen.getByLabelText('Email');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toBeInTheDocument();
  });

  it('Será verificado se o campo `Email` tem o tamanho máximo de 50 caracteres', () => {
    const emailInput = screen.getByLabelText('Email');

    const expectedEmail = longEmail.slice(0, 50);
    userEvent.type(emailInput, longEmail);
    expect(emailInput).toHaveValue(expectedEmail);
  });

  it('Será verificado se, ao digitar no campo `Email`, o campo recebe o valor corretamente', () => {
    const emailInput = screen.getByLabelText('Email');

    userEvent.type(emailInput, emailValue);
    expect(emailInput).toHaveValue(emailValue);
  });

  /* CPF */
  it('Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `CPF`', () => {
    const cpfInput = screen.getByLabelText('CPF');

    expect(cpfInput).toHaveAttribute('type', 'text');
    expect(cpfInput).toBeInTheDocument();
  });

  it('Será verificado se o campo `CPF` tem o tamanho máximo de 11 caracteres', () => {
    const cpfInput = screen.getByLabelText('CPF');

    const expectedCPF = longText.slice(0, 11);
    userEvent.type(cpfInput, longText);
    expect(cpfInput).toHaveValue(expectedCPF);
  });

  it(' Será verificado se, ao digitar no campo `CPF`, o campo recebe o valor corretamente', () => {
    const cpfInput = screen.getByLabelText('CPF');

    userEvent.type(cpfInput, cpfValue);
    expect(cpfInput).toHaveValue(cpfValue);
  });
});
