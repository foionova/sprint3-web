import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove o token
    window.location.href = '/login'; // Redireciona para o login
  };

  return (
    <div>
      <h1>Página Inicial (Protegida)</h1>
      <nav>
        <ul>
          <li><Link to="/times">Ver Times</Link></li>
          <li><Link to="/partidas">Ver Partidas</Link></li>
          <li><Link to="/classificacao">Ver Classificação</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Sair (Logout)
      </button>
    </div>
  );
}

export default Home;