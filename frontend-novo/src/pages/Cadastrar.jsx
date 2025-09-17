import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cadastrar() {
  // Cria "estados" para armazenar o que o usuário digita
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  // Função que atualiza o estado a cada letra digitada
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função executada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne que a página recarregue
    try {
      // Envia os dados do estado para o endpoint do backend
      const response = await axios.post('http://localhost:3000/cadastro', formData);
      
      console.log('Usuário cadastrado:', response.data);
      alert('Cadastro realizado com sucesso!');
      // Aqui você poderia redirecionar o usuário para a página de login
      // window.location.href = '/login';
    } catch (error) {
      console.error('Erro no cadastro:', error.response.data);
      alert('Erro no cadastro: ' + (error.response.data.error || 'Tente novamente.'));
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-dark-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Criar Conta</h2>
        <div className="flex justify-center mb-6 space-x-4">
          <Link to="/login" className="px-5 py-2 text-gray-400 hover:text-white transition-colors">Entrar</Link>
          <Link to="/cadastro" className="px-5 py-2 bg-brand-purple text-white rounded-lg">Cadastrar</Link>
        </div>
        
        {/* O formulário agora chama a função handleSubmit ao ser enviado */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome" className="text-sm font-medium text-gray-300">Nome</label>
            {/* Os inputs agora são controlados pelo estado do React (value e onChange) */}
            <input id="nome" name="nome" type="text" required value={formData.nome} onChange={handleChange} className="mt-1 w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-1 w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>
          <div>
            <label htmlFor="senha" className="text-sm font-medium text-gray-300">Senha</label>
            <input id="senha" name="senha" type="password" required value={formData.senha} onChange={handleChange} className="mt-1 w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>
          <button type="submit" className="w-full px-5 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-purple-hover transition-colors">
            Criar Conta
          </button>
        </form>
      </div>
    </main>
  );
}

export default Cadastrar;