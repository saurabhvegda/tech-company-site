import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:slug" element={<PortfolioProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
