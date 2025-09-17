📘 Projeto Web - Sistema Esportivo (Sprint 3)
📌 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web.
O objetivo foi criar uma aplicação fullstack com autenticação de usuários, listagem de times, partidas e tabela de classificação.

A aplicação é composta por:

Frontend: React + Vite + TailwindCSS (interface moderna e responsiva).

Backend: Node.js + Express (API REST simulada).

Integração: Axios para consumo da API.

Documentação: Swagger para visualização dos endpoints.

🚀 Funcionalidades

✅ Cadastro de usuário (simulado)
✅ Login com token salvo no localStorage
✅ Rotas protegidas (acesso apenas autenticado)
✅ Logout funcional
✅ Listagem de Times (dados mockados)
✅ Partidas (com datas, locais e placares)
✅ Tabela de Classificação (mockada)
✅ Documentação de API via Swagger
✅ Testes básicos no backend (Vitest + Supertest)

🖼️ Demonstração
🔑 Login

🏠 Home

⚽ Times

📅 Partidas

🏆 Classificação

🛠️ Tecnologias Utilizadas

Frontend: React, Vite, TailwindCSS

Backend: Node.js, Express

Outros: Axios, Swagger, Nodemon, Vitest, Supertest

📂 Estrutura do Projeto
sprint3-web/
 ├── backend/          # Servidor Node.js (Express + Swagger)
 │    ├── server.js
 │    ├── package.json
 │    └── ...
 ├── frontend-novo/    # Aplicação React (Vite + Tailwind)
 │    ├── src/
 │    ├── package.json
 │    └── ...
 └── README.md

⚡ Como Rodar o Projeto
🔧 Backend
cd backend
npm install
npm run dev


Servidor roda em http://localhost:3000

🎨 Frontend
cd frontend-novo
npm install
npm run dev


Frontend roda em http://localhost:5173

🔑 Credenciais de Teste
Email: teste@teste.com
Senha: 1234

📘 Documentação da API

Com o backend rodando, acesse:
👉 http://localhost:3000/api-docs

👨‍🏫 Autores

Seu Nome Aqui
