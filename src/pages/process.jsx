import { Link } from 'react-router-dom';

export default function Process() {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'You share your business goals, target customers, and reference ideas via our inquiry form.' },
    { num: '02', title: 'UI/UX & Brand Wireframe', desc: 'We craft a mobile-first, high-energy visual layout tailored to your brand colors and audience.' },
    { num: '03', title: 'Full-Stack Engineering', desc: 'We build your frontend in React/HTML5 and connect live cloud databases, forms, or APIs.' },
    { num: '04', title: 'Testing & 24/7 Cloud Launch', desc: 'After speed optimization and mobile testing, we deploy live with SSL security and zero downtime.' }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '70px 24px' }}>
      <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem' }}>HOW WE WORK</span>
      <h1 style={{ fontSize: '2.6rem', fontWeight: '800', margin: '8px 0 40px' }}>From Idea to Live Website in 4 Steps</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {steps.map((s) => (
          <div key={s.num} className="hover-card" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px' }}>
            <span style={{ fontSize: '2rem', fontWeight: '800', color: '#2563eb' }}>{s.num}</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '12px 0 8px' }}>{s.title}</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <Link to="/contact" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
        Start Step 01 Now →
      </Link>
    </div>
  );
}