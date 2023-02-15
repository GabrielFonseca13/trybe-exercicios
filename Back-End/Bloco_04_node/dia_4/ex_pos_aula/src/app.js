const express = require('express');
const auth = require('./middlewares/auth');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');
const generateToken = require('./utils/tokenGenerator');


const app = express();

app.use(express.json());


app.post('/signup', (req, res) => {
  const { email, password, firstname, phone } = req.body;
  const token = generateToken();

  if([email, password, firstname,phone].includes(undefined)){
    return res.status(401).json({ "message": "Campos ausentes!" })
  };

  return res.status(200).json({ token })
});


app.post('/ativities',
  auth,
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName, 
  (_req, res) => {
  return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;



