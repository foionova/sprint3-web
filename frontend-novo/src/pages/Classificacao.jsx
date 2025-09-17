import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Classificacao() {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTabela = async () => {
      try {
        const response = await axios.get('http://localhost:3000/classificacao');
        setTabela(response.data);
      } catch (err) {
        setError('Erro ao buscar dados da classificação.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTabela();
  }, []);

  if (loading) return <p>Carregando tabela...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Tabela de Classificação</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#333' }}>
            <th style={{ padding: '8px', border: '1px solid #444' }}>Pos</th>
            <th style={{ padding: '8px', border: '1px solid #444' }}>Time</th>
            <th style={{ padding: '8px', border: '1px solid #444' }}>P</th>
            <th style={{ padding: '8px', border: '1px solid #444' }}>J</th>
            <th style={{ padding: '8px', border: '1px solid #444' }}>V</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map(item => (
            <tr key={item.posicao}>
              <td style={{ padding: '8px', border: '1px solid #444' }}>{item.posicao}</td>
              <td style={{ padding: '8px', border: '1px solid #444' }}>{item.time}</td>
              <td style={{ padding: '8px', border: '1px solid #444' }}>{item.pontos}</td>
              <td style={{ padding: '8px', border: '1px solid #444' }}>{item.jogos}</td>
              <td style={{ padding: '8px', border: '1px solid #444' }}>{item.vitorias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classificacao;