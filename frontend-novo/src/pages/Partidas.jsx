import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Partidas() {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/partidas')
      .then(res => setPartidas(res.data))
      .catch(() => setError('Erro ao buscar partidas'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl bg-dark-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Próximas Partidas</h1>
        {loading && <p className="text-center">Carregando...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <ul className="space-y-4">
          {partidas.map(p => (
            <li key={p.id} className="p-4 bg-dark-700 rounded-lg text-white">
              <strong>{p.timeCasa} {p.golsCasa}</strong> vs <strong>{p.golsFora} {p.timeFora}</strong>
              <br />
              <span className="text-gray-400">{new Date(p.data).toLocaleDateString('pt-BR')} - {p.local}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Partidas;
