const express = require('express');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');


const app = express();

app.use(express.json());

// app.get('req,res)
app.post('/ativities',
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



