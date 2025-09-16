// src/routes/profile.routes.js
const express = require('express');
const router = express.Router();

// Importa o nosso middleware de segurança
const authMiddleware = require('../middleware/auth.middleware');

// Aplica o middleware a esta rota.
// Qualquer requisição para GET /profile passará PRIMEIRO pelo authMiddleware.
router.get('/', authMiddleware, (req, res) => {
  // Se chegou até aqui, o token é válido.
  // O ID do usuário foi anexado em `req.userId` pelo middleware.
  res.status(200).json({
    message: 'Você está acessando uma rota protegida!',
    userId: req.userId,
  });
});

module.exports = router;