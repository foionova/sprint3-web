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

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

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

// Endpoint de Login (POST /login)
app.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});