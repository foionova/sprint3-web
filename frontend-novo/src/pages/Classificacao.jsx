import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Classificacao() {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/classificacao')
      .then(res => setTabela(res.data))
      .catch(() => setError('Erro ao buscar classificação'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl bg-dark-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Tabela de Classificação</h1>
        {loading && <p className="text-center">Carregando...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="bg-dark-700">
              <th className="p-3 border border-dark-600">Pos</th>
              <th className="p-3 border border-dark-600">Time</th>
              <th className="p-3 border border-dark-600">P</th>
              <th className="p-3 border border-dark-600">J</th>
              <th className="p-3 border border-dark-600">V</th>
            </tr>
          </thead>
          <tbody>
            {tabela.map(item => (
              <tr key={item.posicao} className="text-center">
                <td className="p-3 border border-dark-600">{item.posicao}</td>
                <td className="p-3 border border-dark-600">{item.time}</td>
                <td className="p-3 border border-dark-600">{item.pontos}</td>
                <td className="p-3 border border-dark-600">{item.jogos}</td>
                <td className="p-3 border border-dark-600">{item.vitorias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Classificacao;
