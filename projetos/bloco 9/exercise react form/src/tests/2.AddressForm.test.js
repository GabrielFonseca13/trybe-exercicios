import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import countryStates from '../countryStates';
import App from '../App';

import { longText } from './helpers';

describe('2 - Crie outro `<fieldset>` para dados de endereço', () => {
  beforeEach(() => {
    render(<App />);
  });

  /* Endereço */
  it('Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Endereço`', () => {
    const addressInput = screen.getByLabelText('Endereço');

    expect(addressInput).toHaveAttribute('type', 'text');
    expect(addressInput).toBeInTheDocument();
  });

  it('Será verificado se o campo `Endereço` tem o tamanho máximo de 200 caracteres', () => {
    const addressInput = screen.getByLabelText('Endereço');

    const expectedEmail = longText.replaceAll(/[,|.]+/g, '').slice(0, 200);
    userEvent.type(addressInput, longText);
    expect(addressInput).toHaveValue(expectedEmail);
  });

  it('Será verificado se, ao digitar no campo `Endereço` os caracteres especiais são ignorados', () => {
    const addressInput = screen.getByLabelText('Endereço');

    userEvent.type(addressInput, '$#%^José $da@ Silva##');
    expect(addressInput).toHaveValue('Jos da Silva');
  });

  /* Cidade */
  it('Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Cidade`', async () => {
    const cityInput = screen.getByLabelText('Cidade');

    expect(cityInput).toHaveAttribute('type', 'text');
    expect(cityInput).toBeInTheDocument();
  });

  it('Será verificado se o campo `Cidade` tem o tamanho máximo de 28 caracteres', async () => {
    const cityInput = screen.getByLabelText('Cidade');

    const expectedCity = longText.slice(0, 28);
    userEvent.type(cityInput, longText);
    expect(cityInput).toHaveValue(expectedCity);
  });

  it('Será verificado que, ao digitar no campo `Cidade`, se nome da cidade começar por número, o campo é limpo após perder o foco', async () => {
    const cityInput = screen.getByLabelText('Cidade');

    userEvent.type(cityInput, '2Taciba');
    expect(cityInput).toHaveValue('2Taciba');
    userEvent.tab();
    expect(cityInput).toHaveValue('');
    userEvent.type(cityInput, 'Taciba');
    expect(cityInput).toHaveValue('Taciba');
  });

  /* Estado */
  it('Será verificado se existe um campo do tipo `select` envolto por uma `label` com o texto `Estado`', () => {
    const stateSelect = screen.getByLabelText('Estado');

    expect(stateSelect).toBeInTheDocument();
  });

  it('Será verificado se o estado inicial do campo `Estado` é o primeiro estado da lista de estados', () => {
    const stateSelect = screen.getByLabelText('Estado');

    expect(stateSelect).toHaveValue(countryStates[0]);
  });

  it('Será verificado que, ao clicar no campo `Estado`, é possivel selecionar um estado', () => {
    const stateSelect = screen.getByLabelText('Estado');

    expect(stateSelect).toHaveValue(countryStates[0]);

    const randomStateIndex = Math.trunc(countryStates.length * Math.random());
    userEvent.selectOptions(
      stateSelect,
      countryStates[randomStateIndex],
    );
    expect(stateSelect).toHaveValue(countryStates[randomStateIndex]);
  });

  /* TIPO */
  it('Será verificado se existe dois campos do tipo `Radio Button`. O primeiro deve estar envolto por uma `label` com o texto `Casa` e o segundo por uma label com o texto `Apartamento`', () => {
    const houseRadioButton = screen.getByLabelText('Casa');
    const apRadioButton = screen.getByLabelText('Apartamento');

    expect(apRadioButton).toBeInTheDocument();
    expect(houseRadioButton).toBeInTheDocument();
  });

  it('Será verificado se, ao carregar a página, o campo `Casa` está checado e o campo `Apartamento` não está checado', () => {
    const houseRadioButton = screen.getByLabelText('Casa');
    const apRadioButton = screen.getByLabelText('Apartamento');

    expect(houseRadioButton).toBeChecked();
    expect(apRadioButton).not.toBeChecked();
  });

  it('Será verificado se, ao clicar no campo `Apartamento`, este fica checado e o campo `Casa` não fica mais checado e vice-versa', () => {
    const houseRadioButton = screen.getByLabelText('Casa');
    const apRadioButton = screen.getByLabelText('Apartamento');

    expect(houseRadioButton).toBeChecked();
    expect(apRadioButton).not.toBeChecked();

    userEvent.click(apRadioButton);
    expect(houseRadioButton).not.toBeChecked();
    expect(apRadioButton).toBeChecked();

    userEvent.click(houseRadioButton);
    expect(houseRadioButton).toBeChecked();
    expect(apRadioButton).not.toBeChecked();
  });
});
