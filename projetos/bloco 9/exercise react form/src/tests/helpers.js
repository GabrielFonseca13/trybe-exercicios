import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const expectedRoleDescription = 'Centralizar divs e colorir botões 😅';
export const expectedRole = 'Frontend Developer';
export const expectedResume = 'Meu resumo de currículo';
export const expectedState = 'São Paulo';
export const expectedCity = 'Taciba';
export const expectedAddress = 'Justino M Souza';
export const expectedCpf = '33366644433';
export const expectedEmail = 'fernando@soares.souza';
export const name = 'Fernando Soares';
export const expectedName = name.toUpperCase();
export const expectedAddressType = 'Apartamento';

export const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec sagittis risus. Cras metus metus, feugiat pretium molestie et, porta vel eros. Aliquam id rhoncus quam. Vivamus accumsan magna eu est pretium scelerisque. Pellentesque porta, augue eu pharetra lobortis, augue metus convallis ligula.';
export const superLongText = `${longText} ${longText} ${longText} ${longText} ${longText}`;

export const longEmail = 'loremipsumdolorsitamet@consecteturadipiscingelit.aeneannecsagittis';

export const resumeTextAreaName = 'Resumo do currículo';
export const roleDescriptionTextAreaName = 'Descrição do cargo';

export const fillOutForm = () => {
  const nameInput = screen.getByLabelText('Nome');
  const emailInput = screen.getByLabelText('Email');
  const cpfInput = screen.getByLabelText('CPF');

  const addressInput = screen.getByLabelText('Endereço');
  const cityInput = screen.getByLabelText('Cidade');
  const stateSelect = screen.getByLabelText('Estado');
  const apRadioButton = screen.getByLabelText('Apartamento');

  const resumeTextArea = screen.getByRole('textbox', { name: resumeTextAreaName });
  const roleInput = screen.getByRole('textbox', { name: 'Cargo' });
  const roleDescriptionTextArea = screen.getByRole('textbox', { name: roleDescriptionTextAreaName });

  userEvent.type(nameInput, name);
  userEvent.type(emailInput, expectedEmail);
  userEvent.type(cpfInput, expectedCpf);
  userEvent.type(addressInput, expectedAddress);
  userEvent.type(cityInput, expectedCity);
  userEvent.selectOptions(stateSelect, expectedState);

  userEvent.click(apRadioButton);

  userEvent.type(resumeTextArea, expectedResume);
  userEvent.type(roleInput, expectedRole);
  userEvent.type(roleDescriptionTextArea, expectedRoleDescription);
};

export const testDataIsNotShowing = () => {
  const nameDisplayed = screen.queryByText(expectedName, { ignore: 'input' });
  expect(nameDisplayed).not.toBeInTheDocument();

  const emailDisplayed = screen.queryByText(expectedEmail, { ignore: 'input' });
  expect(emailDisplayed).not.toBeInTheDocument();

  const cpfDisplayed = screen.queryByText(expectedCpf, { ignore: 'input' });
  expect(cpfDisplayed).not.toBeInTheDocument();

  const addressDisplayed = screen.queryByText(expectedAddress, { ignore: 'input' });
  expect(addressDisplayed).not.toBeInTheDocument();

  const cityDisplayed = screen.queryByText(expectedCity, { ignore: 'input' });
  expect(cityDisplayed).not.toBeInTheDocument();

  const stateDisplayed = screen.queryByText(expectedState, { ignore: 'option' });
  expect(stateDisplayed).not.toBeInTheDocument();

  const addressTypeDisplayed = screen.queryByText(expectedAddressType, { ignore: 'label' });
  expect(addressTypeDisplayed).not.toBeInTheDocument();

  const resumeDisplayed = screen.queryByText(expectedResume, { ignore: 'textarea' });
  expect(resumeDisplayed).not.toBeInTheDocument();

  const roleDisplayed = screen.queryByText(expectedRole, { ignore: 'input' });
  expect(roleDisplayed).not.toBeInTheDocument();

  const roleDescriptionDisplayed = screen.queryByText(expectedRoleDescription, { ignore: 'textarea' });
  expect(roleDescriptionDisplayed).not.toBeInTheDocument();
};

export const testDataIsShowing = () => {
  const nameDisplayed = screen.queryByText(expectedName, { ignore: 'input' });
  expect(nameDisplayed).toBeInTheDocument();
  expect(nameDisplayed).toHaveTextContent(expectedName);

  const emailDisplayed = screen.queryByText(expectedEmail, { ignore: 'input' });
  expect(emailDisplayed).toBeInTheDocument();
  expect(emailDisplayed).toHaveTextContent(expectedEmail);

  const cpfDisplayed = screen.queryByText(expectedCpf, { ignore: 'input' });
  expect(cpfDisplayed).toBeInTheDocument();
  expect(cpfDisplayed).toHaveTextContent(expectedCpf);

  const addressDisplayed = screen.queryByText(expectedAddress, { ignore: 'input' });
  expect(addressDisplayed).toBeInTheDocument();
  expect(addressDisplayed).toHaveTextContent(expectedAddress);

  const cityDisplayed = screen.queryByText(expectedCity, { ignore: 'input' });
  expect(cityDisplayed).toBeInTheDocument();
  expect(cityDisplayed).toHaveTextContent(expectedCity);

  const stateDisplayed = screen.queryByText(expectedState, { ignore: 'option' });
  expect(stateDisplayed).toBeInTheDocument();
  expect(stateDisplayed).toHaveTextContent(expectedState);

  const addressTypeDisplayed = screen.queryByText(expectedAddressType, { ignore: 'label' });
  expect(addressTypeDisplayed).toBeInTheDocument();
  expect(addressTypeDisplayed).toHaveTextContent(expectedAddressType);

  const resumeDisplayed = screen.queryByText(expectedResume, { ignore: 'textarea' });
  expect(resumeDisplayed).toBeInTheDocument();
  expect(resumeDisplayed).toHaveTextContent(expectedResume);

  const roleDisplayed = screen.queryByText(expectedRole, { ignore: 'input' });
  expect(roleDisplayed).toBeInTheDocument();
  expect(roleDisplayed).toHaveTextContent(expectedRole);

  const roleDescriptionDisplayed = screen.queryByText(expectedRoleDescription, { ignore: 'textarea' });
  expect(roleDescriptionDisplayed).toBeInTheDocument();
  expect(roleDescriptionDisplayed).toHaveTextContent(expectedRoleDescription);
};

export const mockAlert = () => jest.spyOn(global, 'alert')
  .mockImplementation(() => { });
