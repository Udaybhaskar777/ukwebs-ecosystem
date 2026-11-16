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

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          maxWidth: '1150px',
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: '800',
            fontSize: '1.4rem',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          <span style={{ backgroundColor: '#2563eb', color: '#fff', padding: '2px 8px', borderRadius: '6px' }}>
            UK
          </span>
          <span style={{ color: '#0f172a' }}>WEBS</span>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '22px', alignItems: 'center', fontWeight: '600', fontSize: '0.93rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? '#2563eb' : '#475569',
                fontWeight: location.pathname === link.path ? '700' : '600',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              textDecoration: 'none',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: '700',
            }}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '1.2rem',
            fontWeight: '800',
            color: '#0f172a',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {menuOpen && (
        <div
          className="mobile-dropdown"
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: location.pathname === link.path ? '#2563eb' : '#0f172a',
                fontWeight: '700',
                fontSize: '1.05rem',
                padding: '6px 0',
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
              color: '#ffffff',
              textAlign: 'center',
              padding: '12px',
              borderRadius: '10px',
              fontWeight: '700',
              marginTop: '6px',
            }}
          >
            Get Your Project Quote →
          </Link>
        </div>
      )}
    </nav>
  );
}