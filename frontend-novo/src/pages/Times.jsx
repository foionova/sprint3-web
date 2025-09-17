import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Times() {
  const [times, setTimes] = useState([]); // Estado para guardar a lista de times
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchTimes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/times');
        setTimes(response.data); // Salva os dados no estado
      } catch (err) {
        setError('Erro ao buscar dados dos times.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTimes(); // Executa a busca ao carregar a página
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  if (loading) return <p>Carregando times...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Times</h1>
      <ul>
        {times.map(time => (
          <li key={time.id}>{time.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Times;