import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(148, 163, 184, 0.12)',
        backgroundColor: 'rgba(7, 11, 20, 0.9)',
        padding: '40px 24px',
        marginTop: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '1220px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ fontWeight: '900', fontSize: '1.1rem', color: '#f8fafc' }}>
            UK <span style={{ color: '#38bdf8' }}>WEBS</span>
          </div>
          <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '4px' }}>
            © {new Date().getFullYear()} UK WEBS Digital Ecosystem. Crafted by Uday Bhaskar.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.88rem', color: '#94a3b8' }}>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}