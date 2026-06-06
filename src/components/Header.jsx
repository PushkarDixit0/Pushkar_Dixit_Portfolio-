import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];

export default function Header({ navItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const location = useLocation();
  const activeId = useScrollSpy(sectionIds, location.pathname === '/', `${location.pathname}${location.hash}`);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
    if (location.hash) {
      const id = location.hash.slice(1);
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [location]);

  return (
    <header className="site-header">
      <Link className="brand" to="/#home" aria-label="Pushkar Dixit home">
        <span className="brand-mark">PD</span>
        <span>Pushkar Dixit</span>
      </Link>

      <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => {
          const section = item.href.split('#')[1];
          const active = location.pathname === '/' && section === activeId;
          return (
            <Link className={active ? 'active' : ''} key={item.href} to={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
