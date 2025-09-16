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

// --- Endpoints para Times ---

// Criar um novo time (Create)
app.post('/times', async (req, res) => {
  try {
    const { nome, logoUrl } = req.body;
    const novoTime = await prisma.time.create({
      data: { nome, logoUrl },
    });
    res.status(201).json(novoTime);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar time.' });
  }
});

// Listar todos os times (Read)
app.get('/times', async (req, res) => {
  try {
    const times = await prisma.time.findMany();
    res.json(times);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar times.' });
  }
});

// Obter um time específico pelo ID (Read)
app.get('/times/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const time = await prisma.time.findUnique({ where: { id } });
    if (!time) return res.status(404).json({ error: 'Time não encontrado.' });
    res.json(time);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter time.' });
  }
});

// Atualizar um time (Update)
app.put('/times/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, logoUrl } = req.body;
    const timeAtualizado = await prisma.time.update({
      where: { id },
      data: { nome, logoUrl },
    });
    res.json(timeAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar time.' });
  }
});

// Deletar um time (Delete)
app.delete('/times/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.time.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar time.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});