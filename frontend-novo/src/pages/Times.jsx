import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Times() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/times')
      .then(res => setTimes(res.data))
      .catch(() => setError('Erro ao buscar times'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl bg-dark-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Lista de Times</h1>
        {loading && <p className="text-center">Carregando...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <ul className="space-y-3">
          {times.map(time => (
            <li key={time.id} className="p-4 bg-dark-700 rounded-lg text-white">
              {time.nome}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Times;
