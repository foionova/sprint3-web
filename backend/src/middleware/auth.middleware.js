// src/middleware/auth.middleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // 1. Pega o token do cabeçalho 'Authorization'
  const authHeader = req.headers.authorization;

  // 2. Verifica se o token existe
  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  // O formato do token é "Bearer TOKEN_LONGO". Precisamos separar as duas partes.
  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Erro no formato do token.' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Token mal formatado.' });
  }

  // 3. Valida o token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido ou expirado.' });
    }

    // 4. Se tudo deu certo, anexa o ID do usuário na requisição
    req.userId = decoded.id;
    return next(); // Libera para a próxima etapa (o controller)
  });
};