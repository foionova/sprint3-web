import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Partidas() {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartidas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/partidas');
        setPartidas(response.data);
      } catch (err) {
        setError('Erro ao buscar dados das partidas.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartidas();
  }, []);

  if (loading) return <p>Carregando partidas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Próximas Partidas</h1>
      <ul>
        {partidas.map(partida => (
          <li key={partida.id}>
            {new Date(partida.data).toLocaleDateString('pt-BR')} - {partida.local}: <br/>
            <strong>{partida.timeCasa} {partida.golsCasa}</strong> vs <strong>{partida.golsFora} {partida.timeFora}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partidas;