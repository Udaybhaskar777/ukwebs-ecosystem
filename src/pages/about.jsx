import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '70px 24px' }}>
      <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>OUR STORY & MISSION</span>
      <h1 style={{ fontSize: '2.6rem', fontWeight: '800', margin: '10px 0 20px', letterSpacing: '-1px' }}>
        Engineering Digital Growth for Local Businesses & Startups
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', marginBottom: '36px' }}>
        Founded by <strong>Nidigattu Uday Bhaskar</strong> in Vizianagaram, Andhra Pradesh, <strong>UK WEBS</strong> was created with one clear goal: replacing slow, outdated template websites with fast, modern, custom-engineered web applications that businesses actually own.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '10px' }}>⚡ Modern Tech Stack</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
            We build with React.js, Tailwind CSS, Supabase Cloud Databases, and Vercel Global Edge hosting—the exact stack used by high-growth tech companies.
          </p>
        </div>
        <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '10px' }}>🤝 Transparent Ownership</h3>
          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>
            No lock-in contracts or surprise monthly maintenance traps. Once your project is delivered, you hold 100% ownership of your code and domain.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px' }}>Ready to take your business online?</h2>
        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Let’s discuss your idea and launch within days.</p>
        <Link to="/contact" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
          Start a Conversation →
        </Link>
      </div>
    </div>
  );
}