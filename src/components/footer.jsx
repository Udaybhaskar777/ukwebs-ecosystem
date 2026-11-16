import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '50px 24px 30px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', paddingBottom: '36px', borderBottom: '1px solid #1e293b' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#2563eb', padding: '2px 8px', borderRadius: '6px' }}>UK</span>
            <span>WEBS</span>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Modern Web Engineering Studio based in Vizianagaram, Andhra Pradesh. Building high-converting websites and scalable cloud applications.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '12px' }}>Agency</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
            <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link>
            <Link to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</Link>
            <Link to="/process" style={{ color: '#94a3b8', textDecoration: 'none' }}>How We Work</Link>
            <Link to="/projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Live Portfolio</Link>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '12px' }}>Client Support</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
            <Link to="/pricing" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pricing Packages</Link>
            <Link to="/faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>FAQs</Link>
            <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Request Proposal</Link>
            <Link to="/admin" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.8rem' }}>Team Portal</Link>
          </div>
        </div>

        <div>
          <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '12px' }}>Direct Contact</h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Email: udaybhaskarnidigattu@gmail.com</p>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Business phone shared upon project confirmation.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '24px', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} UK WEBS Digital Studio. Built with React, Supabase & Vercel.
      </div>
    </footer>
  );
}