import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Entrar() {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });
  // 1. Novo estado para a mensagem de erro
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpa erros anteriores
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      const { token } = response.data;
      
      localStorage.setItem('authToken', token);
      window.location.href = '/';
    } catch (err) {
      // 2. Salva a mensagem de erro no estado
      const errorMessage = err.response?.data?.message || 'Erro no login. Tente novamente.';
      setError(errorMessage);
      console.error('Erro no login:', errorMessage);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-dark-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1-2 hidden md:block">
          {/* ... (código da imagem continua igual) ... */}
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          {/* ... (código do cabeçalho e links continua igual) ... */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* ... (código dos inputs continua igual) ... */}
            
            {/* 3. Exibe a mensagem de erro, se ela existir */}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            
            <button 
              type="submit"
              className="block w-full text-center px-5 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-purple-hover transition-colors">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Entrar;