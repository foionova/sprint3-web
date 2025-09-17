# Projeto Web - Passa Bola (Sprint 3)

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como parte da disciplina de **Desenvolvimento Web**.  
O objetivo foi criar uma aplicação **fullstack** com autenticação de usuários, listagem de times, partidas e tabela de classificação.

A aplicação é composta por:
- **Frontend**: React + Vite + TailwindCSS (interface moderna e responsiva)  
- **Backend**: Node.js + Express (API REST simulada)  
- **Integração**: Axios para consumo da API  
- **Documentação**: Swagger para visualização dos endpoints  

---

## 🚀 Funcionalidades
- Cadastro de usuário (simulado)  
- Login com token salvo no `localStorage`  
- Rotas protegidas (acesso apenas autenticado)  
- Logout funcional  
- Listagem de Times (dados mockados)  
- Partidas (com datas, locais e placares)  
- Tabela de Classificação (mockada)  
- Documentação de API via Swagger  
- Testes básicos no backend (Vitest + Supertest)  

---

## 🖼️ Demonstração

### Tela de Login
<img width="1871" height="963" alt="Screenshot 2025-09-16 231532" src="https://github.com/user-attachments/assets/a49abe2c-5f6f-42d0-b461-3a7cd3bde0dc" />

### Tela Inicial
<img width="1863" height="949" alt="Screenshot 2025-09-16 231541" src="https://github.com/user-attachments/assets/95f2ebb7-45c9-4c81-90d7-153299addce7" />

### Times
<img width="1870" height="956" alt="Screenshot 2025-09-16 231548" src="https://github.com/user-attachments/assets/0acb2d37-2caf-4b70-92d0-98f1b01cffbc" />

### Partidas
<img width="1865" height="954" alt="Screenshot 2025-09-16 231556" src="https://github.com/user-attachments/assets/b5876237-e2f5-4a71-9ae1-169c02f97678" />

### Classificação
<img width="1856" height="950" alt="Screenshot 2025-09-16 231601" src="https://github.com/user-attachments/assets/2a970455-6a71-486a-999d-432b6ae5eeb7" />

---

## 🛠️ Tecnologias Utilizadas
**Frontend**  
- React  
- Vite  
- TailwindCSS  

**Backend**  
- Node.js  
- Express  

**Outros**  
- Axios  
- Swagger  
- Nodemon  
- Vitest + Supertest  

---

## 📂 Estrutura do Projeto
```bash
sprint3-web/
├── backend/              # Servidor Node.js (Express + Swagger)
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend-novo/        # Aplicação React (Vite + Tailwind)
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md

```
---

## ⚡ Como Rodar o Projeto

### Backend
bash
cd backend
npm install
npm run dev
 http://localhost:3000

### Frontend
cd frontend-novo
npm install
npm run dev
Servidor: http://localhost:5173


## 🔑 Credenciais de Teste
Email: teste@teste.com
Senha: 1234


## 📘 Documentação da API

Com o backend rodando, acesse:
http://localhost:3000/api-docs

## 👨‍💻 Grupo Cristian Belasco Arancibia – RM: 565710

João Lucas Ferreira dos Santos – RM: 562608

Felipe Yamaguchi Mesquita – RM: 556170

Samuel de Oliveira da Silva – RM: 566244

Rafael Félix – RM: 565855
