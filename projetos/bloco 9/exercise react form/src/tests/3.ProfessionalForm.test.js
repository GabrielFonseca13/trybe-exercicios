import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import {
  longText,
  superLongText,
  mockAlert,
  resumeTextAreaName,
  roleDescriptionTextAreaName,
} from './helpers';

describe('3 - Crie um terceiro `<fieldset>` para dados do último emprego', () => {
  beforeEach(() => {
    render(<App />);
  });

  /* Resumo do currículo */
  it('Será verificado se existe uma caixa de texto envolta por uma `label` com o texto `Resumo do currículo`', () => {
    const resumeTextArea = screen.getByRole('textbox', { name: resumeTextAreaName });

    expect(resumeTextArea).toBeInTheDocument();
  });

  it('Será verificado se o campo `Resumo do currículo` tem o tamanho máximo de 1000 caracteres.', () => {
    const resumeTextArea = screen.getByRole('textbox', { name: resumeTextAreaName });

    userEvent.type(resumeTextArea, superLongText);
    expect(resumeTextArea).toHaveValue(superLongText.slice(0, 1000));
  });

  it('Será verificado se, ao digitar no campo `Resumo do currículo`, o campo recebe o valor corretamente', () => {
    const resumeTextArea = screen.getByRole('textbox', { name: resumeTextAreaName });

    userEvent.type(resumeTextArea, longText);
    expect(resumeTextArea).toHaveValue(longText);
  });

  /* Cargo */
  it('Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Cargo`', () => {
    const roleInput = screen.getByRole('textbox', { name: 'Cargo' });

    expect(roleInput).toHaveAttribute('type', 'text');
    expect(roleInput).toBeInTheDocument();
  });

  it('Será verificado se o campo `Cargo` tem o tamanho máximo de 40 caracteres.', () => {
    mockAlert();
    const roleInput = screen.getByRole('textbox', { name: 'Cargo' });

    userEvent.type(roleInput, longText);
    expect(roleInput).toHaveValue(longText.slice(0, 40));
  });

  it('Será verificado que, na primeira vez (e apenas na primeira vez) em que o mouse é passado por cima desse campo, um `alert` é exibido', () => {
    mockAlert();
    const roleInput = screen.getByRole('textbox', { name: 'Cargo' });

    expect(global.alert).not.toHaveBeenCalled();
    userEvent.hover(roleInput);
    expect(global.alert).toHaveBeenCalledWith('Preencha com cuidado esta informação.');
    expect(global.alert).toHaveBeenCalledTimes(1);

    userEvent.type(roleInput, 'Frontend Dev');
    expect(roleInput).toHaveValue('Frontend Dev');
    expect(global.alert).toHaveBeenCalledTimes(1);

    userEvent.clear(roleInput);
    expect(roleInput).toHaveValue('');
    expect(global.alert).toHaveBeenCalledTimes(1);

    userEvent.type(roleInput, 'Frontend Developer');
    expect(roleInput).toHaveValue('Frontend Developer');
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  /* Descrição do cargo */
  it('Será verificado se existe uma caixa de texto envolta por uma `label` com o texto `Descrição do cargo`', () => {
    const roleDescriptionTextArea = screen.getByRole('textbox', { name: roleDescriptionTextAreaName });

    expect(roleDescriptionTextArea).toBeInTheDocument();
  });

  it('Será verificado se o campo `Descrição do cargo` tem o tamanho máximo de 500 caracteres', () => {
    const roleDescriptionTextArea = screen.getByRole('textbox', { name: roleDescriptionTextAreaName });

    userEvent.type(roleDescriptionTextArea, superLongText);
    expect(roleDescriptionTextArea).toHaveValue(superLongText.slice(0, 500));
  });

  it('Será verificado se, ao digitar no campo `Descrição do cargo`, o campo recebe o valor corretamente', () => {
    const roleDescriptionTextArea = screen.getByRole('textbox', { name: roleDescriptionTextAreaName });

    userEvent.type(roleDescriptionTextArea, longText);
    expect(roleDescriptionTextArea).toHaveValue(longText);
  });
});
