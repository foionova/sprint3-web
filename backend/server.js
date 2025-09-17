import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// --- CONFIGURAÇÃO DO SWAGGER ---
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Projeto Passa a Bola',
      version: '1.0.0',
      description: 'Documentação da API de teste para o frontend',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./server.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
// --- FIM DA CONFIGURAÇÃO ---

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// --- ROTAS DA API ---

// Rota da documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /
 * get:
 * summary: Rota de teste para verificar se a API está no ar
 */
app.get('/', (req, res) => {
  res.send('Servidor backend rodando 🚀');
});

/**
 * @swagger
 * /cadastro:
 * post:
 * summary: Rota de cadastro (simulada)
 */
app.post('/cadastro', (req, res) => {
  const dados = req.body;
  console.log('Dados recebidos no cadastro:', dados);
  res.json({
    sucesso: true,
    mensagem: 'Cadastro realizado com sucesso!',
    dados
  });
});

/**
 * @swagger
 * /login:
 * post:
 * summary: Rota de login (simulada)
 */
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === "teste@teste.com" && senha === "1234") {
    res.status(200).json({
      message: "Login bem-sucedido!",
      token: "fake-jwt-token-123"
    });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

/**
 * @swagger
 * /times:
 * get:
 * summary: Retorna uma lista de times de teste
 */
app.get('/times', (req, res) => {
  const timesDeTeste = [
    { id: '1', nome: 'Corinthians', logoUrl: 'url_logo_corinthians' },
    { id: '2', nome: 'Palmeiras', logoUrl: 'url_logo_palmeiras' },
    { id: '3', nome: 'São Paulo', logoUrl: 'url_logo_sao_paulo' },
  ];
  res.json(timesDeTeste);
});

// --- ROTA PARTIDAS ---
app.get('/partidas', (req, res) => {
  const partidas = [
    { id: '1', data: '2025-09-20', local: 'Arena Corinthians', timeCasa: 'Corinthians', golsCasa: 2, timeFora: 'Palmeiras', golsFora: 1 },
    { id: '2', data: '2025-09-22', local: 'Allianz Parque', timeCasa: 'Palmeiras', golsCasa: 3, timeFora: 'São Paulo', golsFora: 2 }
  ];
  res.json(partidas);
});

// --- ROTA CLASSIFICAÇÃO ---
app.get('/classificacao', (req, res) => {
  const tabela = [
    { posicao: 1, time: 'Palmeiras', pontos: 45, jogos: 20, vitorias: 14 },
    { posicao: 2, time: 'Corinthians', pontos: 42, jogos: 20, vitorias: 13 },
    { posicao: 3, time: 'São Paulo', pontos: 38, jogos: 20, vitorias: 12 }
  ];
  res.json(tabela);
});

// Iniciar servidor
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`📘 Documentação da API disponível em http://localhost:${PORT}/api-docs`);
  });
}

export default app;
