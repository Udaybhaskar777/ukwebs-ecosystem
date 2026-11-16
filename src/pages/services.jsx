import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Custom Business Websites',
      desc: 'Fast, responsive multi-page websites tailored for clinics, gyms, coaching centers, real estate, and local brands.',
      tags: ['Mobile-First', 'SEO Ready', 'Custom Branding']
    },
    {
      title: 'Digital Food Menus & Ordering Portals',
      desc: 'Interactive QR-ready restaurant and cafe menus (like Uncle Aunty Tea Time) designed for instant mobile browsing and ordering.',
      tags: ['QR Menu', 'Zero Commission', 'Instant Updates']
    },
    {
      title: 'Full-Stack React & Cloud Web Apps',
      desc: 'Dynamic applications with user authentication, live PostgreSQL databases, and real-time dashboards.',
      tags: ['React.js', 'Supabase', 'Scalable']
    },
    {
      title: 'Custom Admin Dashboards',
      desc: 'Manage your products, portfolio items, prices, or announcements yourself without touching a single line of code.',
      tags: ['Role Access', 'Easy UI', 'Cloud Sync']
    },
    {
      title: 'Utility & Web Tools',
      desc: 'Specialized browser-based utilities (like GovJob Photo Formatter) built for high-speed client-side processing.',
      tags: ['HTML5 Canvas', 'Fast Execution', 'Zero Server Lag']
    },
    {
      title: 'Website Redesign & Speed Optimization',
      desc: 'Upgrade slow, broken legacy websites into modern, lightning-fast experiences hosted on global edge networks.',
      tags: ['Vercel CI/CD', 'Core Web Vitals', 'SSL Security']
    }
  ];

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '70px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px' }}>
        <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>WHAT WE BUILD</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '8px 0 14px' }}>End-to-End Web Solutions</h1>
        <p style={{ color: '#64748b' }}>Everything you need to launch, manage, and scale your digital presence.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {services.map((s, idx) => (
          <div key={idx} className="hover-card" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>{s.desc}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {s.tags.map((t, i) => (
                <span key={i} style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700' }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to="/pricing" style={{ backgroundColor: '#0f172a', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
          View Packages & Pricing →
        </Link>
      </div>
    </div>
  );
}