import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Entrar() {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      const { token, message } = response.data;

      console.log(message);
      localStorage.setItem('authToken', token);
      window.location.href = '/';
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erro no login. Tente novamente.';
      setError(errorMessage);
      console.error('Erro no login:', errorMessage);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-dark-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1-2 hidden md:block">
          {/* Aqui poderia ter uma imagem ilustrativa */}
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-2xl font-bold mb-6">Entrar</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full p-3 border rounded-lg bg-dark-700 text-white"
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="block w-full p-3 border rounded-lg bg-dark-700 text-white"
            />

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <button
              type="submit"
              className="block w-full text-center px-5 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-purple-hover transition-colors">
              Entrar
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4 text-center">
            Não tem conta? <Link to="/cadastro" className="text-brand-purple hover:text-brand-purple-hover">Cadastrar</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Entrar;
