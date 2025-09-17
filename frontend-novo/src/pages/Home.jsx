import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl bg-dark-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Página Inicial</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/times" className="block px-5 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-purple-hover transition-colors text-center">
            Ver Times
          </Link>
          <Link to="/partidas" className="block px-5 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-purple-hover transition-colors text-center">
            Ver Partidas
          </Link>
          <Link to="/classificacao" className="block px-5 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-purple-hover transition-colors text-center">
            Ver Classificação
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-6 block w-full text-center px-5 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Sair (Logout)
        </button>
      </div>
    </main>
  );
}

export default Home;
