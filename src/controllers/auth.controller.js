// src/controllers/auth.controller.js
const authService = require('../services/auth.service');

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const newUser = await authService.registerUser(email, password);
    res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const result = await authService.loginUser(email, password);
    res.status(200).json({ message: 'Login bem-sucedido!', token: result.token });
  } catch (error) {
    next(error);
  }
};