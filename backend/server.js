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
  apis: ['./server.js'], // Arquivos que contêm a documentação
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
 * /:
 * get:
 * summary: Rota de teste para verificar se a API está no ar
 * responses:
 * 200:
 * description: Servidor backend rodando
 */
app.get('/', (req, res) => {
  res.send('Servidor backend rodando 🚀');
});

/**
 * @swagger
 * /cadastro:
 * post:
 * summary: Rota de cadastro (simulada)
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * email:
 * type: string
 * senha:
 * type: string
 * responses:
 * 200:
 * description: Cadastro realizado com sucesso
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
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * email:
 * type: string
 * senha:
 * type: string
 * responses:
 * 200:
 * description: Login bem-sucedido
 * 401:
 * description: Credenciais inválidas
 */
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === "teste@teste.com" && senha === "1234") {
    res.status(200).json({ message: "Login bem-sucedido!" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

/**
 * @swagger
 * /times:
 * get:
 * summary: Retorna uma lista de times de teste
 * responses:
 * 200:
 * description: Uma lista de times
 */
app.get('/times', (req, res) => {
    const timesDeTeste = [
        { id: '1', nome: 'Corinthians', logoUrl: 'url_logo_corinthians' },
        { id: '2', nome: 'Palmeiras', logoUrl: 'url_logo_palmeiras' },
        { id: '3', nome: 'São Paulo', logoUrl: 'url_logo_sao_paulo' },
    ];
    res.json(timesDeTeste);
});

// ... (as outras rotas de Partidas e Classificação também poderiam ser documentadas aqui) ...

// Iniciar servidor
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`✅ Servidor rodando na porta ${PORT}`);
        console.log(`📘 Documentação da API disponível em http://localhost:${PORT}/api-docs`);
    });
}

export default app;