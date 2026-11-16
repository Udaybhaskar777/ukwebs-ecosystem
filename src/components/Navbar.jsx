import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Process', path: '/process' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '14px 24px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
          <span style={{ backgroundColor: '#2563eb', color: '#fff', padding: '2px 8px', borderRadius: '6px' }}>UK</span>
          <span style={{ color: '#0f172a' }}>WEBS</span>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '20px', alignItems: 'center', fontWeight: '600', fontSize: '0.92rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: isActive(link.path) ? '#2563eb' : '#475569',
                fontWeight: isActive(link.path) ? '800' : '600',
                padding: '6px 4px',
                borderBottom: isActive(link.path) ? '2px solid #2563eb' : '2px solid transparent'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" style={{
            textDecoration: 'none',
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: '10px 18px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '700'
          }}>
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          paddingTop: '16px',
          borderTop: '1px solid #e2e8f0',
          marginTop: '14px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isActive(link.path) ? '#2563eb' : '#0f172a',
                fontWeight: '700',
                padding: '6px 0'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: 'none',
              backgroundColor: '#2563eb',
              color: '#fff',
              padding: '10px',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: '700'
            }}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}