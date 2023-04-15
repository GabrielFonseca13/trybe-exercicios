const service = require('../services/User');
const { validateCredentials } = require('./utils/validateCredentials');

module.exports = async (req, res, next) => {
  const { error } = validateCredentials(req.body);

  /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  if (error) return next(error);

  const { username, password } = req.body;

  /* Pedimos para o service gerar o token */
  const { error: serviceError, token } = await service.login(username, password);

  /* Caso ocorra um erro do tipo `invalidCredentials`,
     retornamos um novo erro com status `401 unauthorized` */
  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  /* Caso haja qualquer outro erro, acionamos o middleware de erro para obter uma mensagem genérica */
  if (serviceError) {
    return next(serviceError);
  }

  /* Por fim, caso nenhum erro tenha ocorrido, retornamos o token */
  res.status(200).json({ token });
};