const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization || authorization.length !== 16){
    return res.status(401).json({ "message": "Token inválido!" });
  }

  next();
};

module.exports = auth;