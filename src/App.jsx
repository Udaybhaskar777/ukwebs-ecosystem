import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('Business Pro (₹6,999)');
  const [clientName, setClientName] = useState('');
  const [businessType, setBusinessType] = useState('');

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const message = `Hi UK WEBS! I'm *${clientName || 'a prospective client'}*.\n\n*Business/Project:* ${businessType || 'Custom Website'}\n*Selected Package:* ${selectedPlan}\n\nLet's discuss building this!`;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/918688465492?text=${encodedMsg}`, '_blank');
  };

  const packages = [
    {
      name: 'Starter Landing Page',
      price: '₹2,999',
      tag: 'Best for Shops & Creators',
      features: [
        '1-Page High-Speed Responsive Design',
        'Direct WhatsApp Order / Inquiry Button',
        'Mobile-First UI + Google Maps Embed',
        'Free Cloud Hosting Setup (Vercel/Netlify)',
        'Delivered in 48 Hours'
      ],
      highlight: false
    },
    {
      name: 'Business Pro',
      price: '₹6,999',
      tag: 'Most Popular',
      features: [
        'Up to 5 Custom Pages (Home, Menu/Services, Gallery, Contact)',
        'Live Database Integration (Update content anytime)',
        'SEO Optimization + Fast Loading',
        'Custom Domain Connection Support',
        '1 Month Free Priority Support'
      ],
      highlight: true
    },
    {
      name: 'Custom Web App',
      price: '₹14,999+',
      tag: 'Full-Stack Ecosystem',
      features: [
        'React.js Frontend + Cloud Database',
        'Custom Admin Dashboard to Manage Data',
        'User Authentication & Role Access',
        'API Integrations (WhatsApp, Payments, Maps)',
        'Scalable Architecture for Viral Traffic'
      ],
      highlight: false
    }
  ];

  return (
    <div>
      {/* Top Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 24px'
      }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
            <span style={{ backgroundColor: '#2563eb', color: '#fff', padding: '2px 8px', borderRadius: '6px' }}>UK</span>
            <span style={{ color: '#0f172a' }}>WEBS</span>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', fontWeight: '600', fontSize: '0.95rem' }}>
            <a href="#projects" style={{ textDecoration: 'none', color: '#475569' }}>Live Work</a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#475569' }}>Pricing</a>
            <a href="#contact" style={{
              textDecoration: 'none',
              backgroundColor: '#0f172a',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '0.9rem'
            }}>
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        background: 'radial-gradient(circle at top right, #dbeafe 0%, #f8fafc 45%, #fef2f2 100%)',
        padding: '80px 24px 70px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#eff6ff',
            color: '#2563eb',
            border: '1px solid #bfdbfe',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            ⚡ MODERN WEB ENGINEERING • VIZIANAGARAM & BEYOND
          </span>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            lineHeight: '1.12',
            letterSpacing: '-1.5px',
            color: '#0f172a',
            marginBottom: '20px'
          }}>
            We Build Websites That Turn <span style={{ color: '#2563eb' }}>Visitors</span> Into Paying <span style={{ color: '#ef4444' }}>Customers.</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: '1.6',
            maxWidth: '640px',
            margin: '0 auto 36px'
          }}>
            From high-converting local business portals and WhatsApp ordering menus to full-stack React & Cloud web applications—engineered for speed, mobile users, and viral traffic.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              backgroundColor: '#2563eb',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
            }}>
              Get Your Website Quote →
            </a>
            <a href="#projects" style={{
              backgroundColor: '#fff',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem'
            }}>
              Explore Live Builds
            </a>
          </div>
        </div>
      </header>

      {/* Infinite Scrolling Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span>
            🚀 FAST 48-HOUR DELIVERY &nbsp;&nbsp;•&nbsp;&nbsp; 📱 100% MOBILE RESPONSIVE &nbsp;&nbsp;•&nbsp;&nbsp; 💬 DIRECT WHATSAPP ORDERING &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ REACT + CLOUD DATABASE &nbsp;&nbsp;•&nbsp;&nbsp; 🔒 ZERO DOWNTIME HOSTING &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 CUSTOM ADMIN DASHBOARDS &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
          <span>
            🚀 FAST 48-HOUR DELIVERY &nbsp;&nbsp;•&nbsp;&nbsp; 📱 100% MOBILE RESPONSIVE &nbsp;&nbsp;•&nbsp;&nbsp; 💬 DIRECT WHATSAPP ORDERING &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ REACT + CLOUD DATABASE &nbsp;&nbsp;•&nbsp;&nbsp; 🔒 ZERO DOWNTIME HOSTING &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 CUSTOM ADMIN DASHBOARDS &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Live Projects Section (Powered by Supabase) */}
      <section id="projects" style={{ maxWidth: '1150px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '40px', gap: '16px' }}>
          <div>
            <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              PORTFOLIO • LIVE CLOUD FEED
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '6px', letterSpacing: '-0.5px' }}>
              Shipped & Live Projects
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
            Real applications built and deployed for clients & communities.
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b', fontWeight: '600' }}>
            Fetching live builds from Supabase cloud...
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="hover-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase'
                    }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700' }}>● Live</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '14px', fontWeight: '600' }}>
                    TECH: <span style={{ color: '#334155' }}>{project.tech_stack}</span>
                  </p>
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#2563eb',
                      fontWeight: '700',
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}
                  >
                    Launch Live Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Transparent Pricing Section */}
      <section id="pricing" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px' }}>
            <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              CLEAR & HONEST PRICING
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '6px', letterSpacing: '-0.5px' }}>
              Packages Built for Growth
            </h2>
            <p style={{ color: '#64748b', marginTop: '10px' }}>
              No hidden agency fees. Pay once, own your digital asset forever.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="hover-card"
                style={{
                  backgroundColor: pkg.highlight ? '#0f172a' : '#f8fafc',
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
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: pkg.highlight ? '#2563eb' : '#e2e8f0',
                    color: pkg.highlight ? '#fff' : '#334155',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    marginBottom: '16px'
                  }}>
                    {pkg.tag}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{pkg.name}</h3>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', margin: '12px 0 20px', letterSpacing: '-1px' }}>
                    {pkg.price}
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {pkg.features.map((feat, i) => (
                      <li key={i} style={{ fontSize: '0.92rem', color: pkg.highlight ? '#cbd5e1' : '#475569', display: 'flex', gap: '8px' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedPlan(`${pkg.name} (${pkg.price})`)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: '10px',
                    backgroundColor: pkg.highlight ? '#2563eb' : '#0f172a',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '0.95rem'
                  }}
                >
                  Select {pkg.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant WhatsApp Lead Form */}
      <section id="contact" style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: '800', marginBottom: '8px', textAlign: 'center' }}>
            Let’s Build Your Website
          </h2>
          <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '28px', fontSize: '0.95rem' }}>
            Fill in quick details below to start an instant WhatsApp chat with our dev team.
          </p>

          <form onSubmit={handleWhatsAppRedirect} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g., Rahul Sharma"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Business / Website Idea</label>
              <input
                type="text"
                required
                placeholder="e.g., Restaurant Menu, Gym, Portfolio, E-Commerce"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Selected Package</label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', backgroundColor: '#fff' }}
              >
                <option value="Starter Landing Page (₹2,999)">Starter Landing Page (₹2,999)</option>
                <option value="Business Pro (₹6,999)">Business Pro (₹6,999)</option>
                <option value="Custom Web App (₹14,999+)">Custom Web App (₹14,999+)</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '8px',
                backgroundColor: '#16a34a',
                color: '#ffffff',
                border: 'none',
                padding: '14px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              💬 Send Inquiry via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '32px 24px', fontSize: '0.9rem' }}>
        <p style={{ color: '#ffffff', fontWeight: '700', marginBottom: '6px' }}>UK WEBS Digital Studio</p>
        <p>Built with React, Supabase & Vercel • Vizianagaram, Andhra Pradesh</p>
      </footer>
    </div>
  );
}

export default App;