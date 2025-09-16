import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;
const JWT_SECRET = 'SEU_SEGREDO_JWT_AQUI'; // Troque por uma chave segura

app.use(express.json());

// --- Endpoints ---

// Endpoint de Cadastro (POST /cadastro)
app.post('/cadastro', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verifica se o usuário já existe
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Salva o usuário no banco de dados
    const newUser = await prisma.user.create({
      data: {
        email,
        senha: hashedPassword,
      },
    });

    res.status(201).json({ id: newUser.id, email: newUser.email });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});