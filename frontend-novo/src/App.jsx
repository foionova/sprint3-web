import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute'; // 1. Importa o protetor

// Páginas
import Home from './pages/Home';
import Entrar from './pages/entrar';
import Cadastrar from './pages/Cadastrar';
import Times from './pages/Times';
import Partidas from './pages/Partidas';
import Classificacao from './pages/Classificacao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastrar />} />

        {/* Rotas Protegidas */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/times" element={<ProtectedRoute><Times /></ProtectedRoute>} />
        <Route path="/partidas" element={<ProtectedRoute><Partidas /></ProtectedRoute>} />
        <Route path="/classificacao" element={<ProtectedRoute><Classificacao /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;