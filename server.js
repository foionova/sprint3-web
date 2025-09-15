// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.routes');
const profileRoutes = require('./src/routes/profile.routes'); // <-- ADICIONADA
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares essenciais
app.use(express.json()); // Permite que o express entenda requisições com corpo em JSON

const origin = process.env.FRONTEND_URL || '*';
app.use(cors({ origin, credentials: true })); // Configura o CORS

// Rotas da aplicação
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'API rodando' });
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes); // <-- ADICIONADA

// Middleware para rotas não encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: true, message: 'Endpoint não encontrado' });
});

// Middleware centralizado para tratamento de erros
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});