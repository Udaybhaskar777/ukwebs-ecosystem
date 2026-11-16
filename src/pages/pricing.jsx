import { Link } from 'react-router-dom';

export default function Pricing() {
  const packages = [
    {
      name: 'Starter Landing Page',
      price: '₹2,999',
      tag: 'Best for Shops & Creators',
      features: ['1-Page High-Speed Responsive Design', 'Direct Email Inquiry Form', 'Mobile-First UI + Google Maps Embed', 'Free Cloud Hosting Setup', 'Delivered in 48 Hours'],
      highlight: false
    },
    {
      name: 'Business Pro',
      price: '₹6,999',
      tag: 'Most Popular',
      features: ['Up to 5 Custom Pages', 'Live Cloud Database Integration', 'SEO Optimization + Fast Loading', 'Custom Domain Connection Support', '1 Month Free Priority Support'],
      highlight: true
    },
    {
      name: 'Custom Web App',
      price: '₹14,999+',
      tag: 'Full-Stack Ecosystem',
      features: ['React.js Frontend + Cloud Database', 'Custom Admin Dashboard', 'User Authentication & Role Access', 'API Integrations (Email, Payments, Maps)', 'Scalable Architecture for Viral Traffic'],
      highlight: false
    }
  ];

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '70px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px' }}>
        <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '0.85rem' }}>CLEAR & HONEST PRICING</span>
        <h1 style={{ fontSize: '2.6rem', fontWeight: '800', marginTop: '6px' }}>Packages Built for Growth</h1>
        <p style={{ color: '#64748b', marginTop: '10px' }}>Pay once, own your digital asset forever. Zero hidden charges.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="hover-card"
            style={{
              backgroundColor: pkg.highlight ? '#0f172a' : '#ffffff',
              color: pkg.highlight ? '#ffffff' : '#0f172a',
              border: pkg.highlight ? '2px solid #2563eb' : '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span style={{ display: 'inline-block', backgroundColor: pkg.highlight ? '#2563eb' : '#e2e8f0', color: pkg.highlight ? '#fff' : '#334155', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '700', marginBottom: '16px' }}>
                {pkg.tag}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{pkg.name}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '12px 0 20px' }}>{pkg.price}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {pkg.features.map((feat, i) => (
                  <li key={i} style={{ fontSize: '0.92rem', color: pkg.highlight ? '#cbd5e1' : '#475569' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/contact?plan=${encodeURIComponent(`${pkg.name} (${pkg.price})`)}`}
              style={{ display: 'block', textAlign: 'center', padding: '12px', borderRadius: '10px', backgroundColor: pkg.highlight ? '#2563eb' : '#0f172a', color: '#ffffff', textDecoration: 'none', fontWeight: '700' }}
            >
              Select {pkg.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}