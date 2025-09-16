// 1. Importa o framework Express
const express = require('express');

// 2. Inicializa a aplicação Express
const app = express();

// 3. Define a porta em que o servidor vai rodar
const PORT = 3000;

// =================== LINHA NOVA ===================
// 4. Prepara o servidor para entender JSON no corpo das requisições
app.use(express.json());
// ==================================================

// --- Nossos Endpoints ---

// Endpoint raiz (GET /) - para testar se a API está no ar
app.get('/', (req, res) => {
  res.json({ message: 'API no ar!' });
});

// =================== ENDPOINT NOVO ===================
// Endpoint para cadastrar um novo usuário (POST /cadastro)
app.post('/cadastro', (req, res) => {
  // 1. Pega os dados (email e senha) que o frontend enviou no corpo da requisição
  const { email, senha } = req.body;

  // 2. Por enquanto, vamos apenas mostrar no terminal para ver se recebemos
  console.log('Dados recebidos para cadastro:', { email, senha });

  // AQUI ENTRARÁ A SUA LÓGICA DE VERDADE:
  // - Validar os dados
  // - Salvar o usuário no banco de dados, etc.

  // 3. Enviamos uma resposta de sucesso de volta para o frontend
  res.status(201).json({ message: `Usuário com email ${email} cadastrado com sucesso!` });
});
// =====================================================


// Inicia o servidor e o faz "escutar" na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});