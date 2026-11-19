import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(7, 11, 20, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '1220px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* BRAND LOGO */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '0.95rem',
              color: '#fff',
              letterSpacing: '-0.04em',
            }}
          >
            UK
          </span>
          <span style={{ fontWeight: '900', fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#f8fafc' }}>
            UK <span style={{ color: '#38bdf8' }}>WEBS</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: active ? '700' : '500',
                  color: active ? '#38bdf8' : '#cbd5e1',
                  backgroundColor: active ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  transition: 'all 0.18s ease',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            to="/contact"
            className="uk-btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '10px' }}
          >
            Launch Project ↗
          </Link>
        </div>
      </div>
    </header>
  );
}