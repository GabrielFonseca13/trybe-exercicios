import { requirements } from '../../.trybe/requirements.json';

const returnBody = {
  message: 'https://images.dog.ceo/breeds/bulldog-english/murphy.jpg',
  status: 'success',
};

const secondReturnBody = {
  message: 'https://images.dog.ceo/breeds/shiba/shiba-18.jpg',
  status: 'success',
};

const terrierReturnBody = {
  message: 'https://images.dog.ceo/breeds/terrier-irish/n02093991_3968.jpg',
  status: 'success',
};

const expectedUrl = 'https://dog.ceo/api/breeds/image/random';

const getRequirementDescription = (itemNumber = 1) => {
  const [requirement] = requirements.filter(
    (el) => el.description.startsWith(`${itemNumber} -`),
  );
  return requirement.description;
};

const setupTest = () => {
  global.alert = jest.fn();
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(returnBody),
  });

  localStorage.clear();
};

export {
  returnBody,
  secondReturnBody,
  terrierReturnBody,
  expectedUrl,
  getRequirementDescription,
  setupTest,
};
