// src/app.js
const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));