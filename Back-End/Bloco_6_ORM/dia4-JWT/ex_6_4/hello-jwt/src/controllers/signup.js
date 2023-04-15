const { validateCredentials } = require('./utils/validateCredentials');

const service = require('../services/User');

module.exports = async (req, res, next) => {
  /* Começamos validando `username` e `password`  */
  const { error: validationError } = validateCredentials(req.body);

  /* Caso haja erro de validação */
  if (validationError) {
    /* Enviamos o erro para o middleware de erro */
    return next(validationError);
  }

  const { username, password } = req.body;

  /* Pedimos para o service armazenar os dados */
  /* Em troca, recebemos o resultado da ação */
  const result = await service.create(username, password);

  /* Validamos se o retorno tem algum erro */
  /* Se não tiver, retornamos o token */
  if (!result.error) {
    return res.status(201).json(result);
  }

  /* Se tiver algum erro, e o código for "usernameExists" */
  /* Retornamos um 409 Conflict com a mensagem do erro */
  if (result.error.code === 'usernameExists') {
    return res.status(409).json({ message: result.error.message });
  }
};