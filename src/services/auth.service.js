// src/services/auth.service.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- SIMULAÇÃO DE BANCO DE DADOS ---
const users = [];
// ------------------------------------

// Função para registrar um novo usuário
exports.registerUser = async (email, password) => {
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    const error = new Error('Este email já está em uso.');
    error.status = 409;
    throw error;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);
  console.log('Usuários no "banco":', users);

  return { id: newUser.id, email: newUser.email };
};

// Função para logar um usuário
exports.loginUser = async (email, password) => {
  const user = users.find(user => user.email === email);
  if (!user) {
    const error = new Error('Credenciais inválidas.');
    error.status = 401;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error('Credenciais inválidas.');
    error.status = 401;
    throw error;
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
};