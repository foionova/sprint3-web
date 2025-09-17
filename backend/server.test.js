import { describe, it, expect } from 'vitest';
import supertest from 'supertest';
import app from './server.js';

const request = supertest(app);

describe('Endpoints de Autenticação', () => {
  it('POST /login deve retornar 200 com credenciais válidas', async () => {
    const response = await request.post('/login').send({
      email: 'teste@teste.com',
      senha: '1234'
    });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login bem-sucedido!');
  });

  it('POST /login deve retornar 401 com senha inválida', async () => {
    const response = await request.post('/login').send({
      email: 'teste@teste.com',
      senha: 'senha_errada'
    });
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Credenciais inválidas');
  });
});