import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { portfolio } from './data/portfolio.js';

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Portfolio | Pushkar Dixit',
      '/projects': 'Projects | Pushkar Dixit',
      '/experience': 'Experience | Pushkar Dixit',
    };
    document.title = titles[location.pathname] || 'Portfolio | Pushkar Dixit';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Header navItems={portfolio.navItems} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
