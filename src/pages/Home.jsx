import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    async function loadFeatured() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false })
        .limit(4);
      if (data) setProjects(data);
    }
    loadFeatured();
  }, []);

  const capabilities = [
    {
      icon: '⚡',
      title: 'High-Converting Business Sites',
      desc: 'Fast-loading, mobile-first websites designed specifically to turn local Google & Instagram visitors into paying customers.'
    },
    {
      icon: '🍔',
      title: 'Digital Menus & Order Portals',
      desc: 'Custom QR-ready restaurant and cafe ordering interfaces with zero third-party commission cuts.'
    },
    {
      icon: '⚛️',
      title: 'Full-Stack React + Cloud Apps',
      desc: 'Scalable web applications powered by React.js, PostgreSQL cloud databases, and instant edge hosting.'
    },
    {
      icon: '🛠️',
      title: 'Custom Web Utility Tools',
      desc: 'Interactive browser tools, document formatters, and calculators built for high daily user traffic.'
    },
    {
      icon: '🔐',
      title: 'Admin Dashboards & CMS',
      desc: 'Manage your own projects, prices, and content from a private dashboard without touching a single line of code.'
    },
    {
      icon: '🚀',
      title: 'SEO & Speed Optimization',
      desc: 'Clean semantic architecture, social preview cards, and sub-second page loads so your brand ranks higher.'
    }
  ];

  const realityCards = [
    {
      tag: 'CLIENT REALITY #01',
      quote: '“We only have an Instagram page, why do we need a website?”',
      truth: 'Instagram hides your posts behind algorithms. A website is your 24/7 digital showroom on Google that you own 100%.'
    },
    {
      tag: 'CLIENT REALITY #02',
      quote: '“My cousin said he can build it for ₹500 using a broken template.”',
      truth: 'Slow, broken sites kill customer trust in 3 seconds. UK WEBS engineers clean, custom, production-grade code built to scale.'
    },
    {
      tag: 'CLIENT REALITY #03',
      quote: '“Will my site crash if one of my reels goes viral?”',
      truth: 'Never. We deploy on global edge networks (Vercel + Supabase) built to handle sudden traffic spikes with zero downtime.'
    }
  ];

  const homeFaqs = [
    {
      q: 'How fast can UK WEBS launch my website?',
      a: 'Starter Landing Pages go live within 48 hours. Multi-page Business Pro websites take 4–5 days, and custom React + Database web apps take 7–14 days.'
    },
    {
      q: 'Are there any hidden monthly server fees?',
      a: 'No. We deploy on modern cloud infrastructure with free SSL and zero monthly hosting fees for standard traffic. You only pay once for development.'
    },
    {
      q: 'Can I request changes after seeing the first draft?',
      a: 'Absolutely. Every build includes 2 dedicated revision rounds so every color, section, and button matches your exact vision.'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <header style={{
        background: 'radial-gradient(circle at top right, #dbeafe 0%, #f8fafc 45%, #fef2f2 100%)',
        padding: '90px 24px 80px',
        textAlign: 'center',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div className="float-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            color: '#0f172a',
            border: '1px solid #cbd5e1',
            padding: '7px 16px',
            borderRadius: '999px',
            fontSize: '0.84rem',
            fontWeight: '700',
            marginBottom: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
          }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
            ACCEPTING NEW CLIENT PROJECTS • VIZIANAGARAM & PAN-INDIA
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-1.8px',
            color: '#0f172a',
            marginBottom: '22px'
          }}>
            We Engineer Websites That Turn <span style={{ color: '#2563eb' }}>Visitors</span> Into Paying <span style={{ color: '#ef4444' }}>Customers.</span>
          </h1>

          <p style={{
            fontSize: '1.18rem',
            color: '#475569',
            lineHeight: '1.65',
            maxWidth: '680px',
            margin: '0 auto 38px'
          }}>
            UK WEBS is a modern web engineering studio building blazing-fast business websites, interactive digital menus, and full-stack cloud applications that elevate your brand credibility from day one.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link to="/contact" style={{
              backgroundColor: '#2563eb',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.02rem',
              boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.35)'
            }}>
              Get Your Project Quote →
            </Link>
            <Link to="/projects" style={{
              backgroundColor: '#fff',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              padding: '15px 30px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.02rem'
            }}>
              Explore Live Builds
            </Link>
          </div>

          {/* Tech Stack Strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap', color: '#64748b', fontSize: '0.85rem', fontWeight: '700' }}>
            <span>BUILT WITH MODERN TECH:</span>
            <span style={{ color: '#0f172a' }}>⚛️ React.js</span>
            <span style={{ color: '#0f172a' }}>⚡ Vite</span>
            <span style={{ color: '#0f172a' }}>🗄️ Supabase Cloud</span>
            <span style={{ color: '#0f172a' }}>▲ Vercel Edge</span>
            <span style={{ color: '#0f172a' }}>🎨 Custom UI/UX</span>
          </div>
        </div>
      </header>

      {/* 2. INFINITE SCROLLING MARQUEE */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span>
            🚀 48-HOUR FAST LAUNCH &nbsp;&nbsp;•&nbsp;&nbsp; 📱 100% MOBILE-FIRST DESIGN &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ REACT + SUPABASE CLOUD &nbsp;&nbsp;•&nbsp;&nbsp; 🔒 FREE SSL & ZERO DOWNTIME &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 CUSTOM ADMIN PANELS &nbsp;&nbsp;•&nbsp;&nbsp; 💼 TRANSPARENT ONE-TIME PRICING &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
          <span>
            🚀 48-HOUR FAST LAUNCH &nbsp;&nbsp;•&nbsp;&nbsp; 📱 100% MOBILE-FIRST DESIGN &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ REACT + SUPABASE CLOUD &nbsp;&nbsp;•&nbsp;&nbsp; 🔒 FREE SSL & ZERO DOWNTIME &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 CUSTOM ADMIN PANELS &nbsp;&nbsp;•&nbsp;&nbsp; 💼 TRANSPARENT ONE-TIME PRICING &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* 3. METRICS BAR */}
      <section style={{ maxWidth: '1150px', margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '18px',
          padding: '32px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#2563eb' }}>48 Hrs</div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Express Landing Page Delivery</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>99.9%</div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Global Edge Uptime Guarantee</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ef4444' }}>100%</div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Mobile & Tablet Responsive</div>
          </div>
          <div>
            <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#10b981' }}>₹2,999</div>
            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Transparent Starter Package</div>
          </div>
        </div>
      </section>

      {/* 4. WHY UK WEBS (PROBLEM VS SOLUTION) */}
      <section style={{ maxWidth: '1150px', margin: '0 auto', padding: '90px 24px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
          <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>THE DIGITAL ADVANTAGE</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', marginTop: '8px', letterSpacing: '-0.8px' }}>
            Why Growing Brands Upgrade to UK WEBS
          </h2>
          <p style={{ color: '#64748b', marginTop: '12px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Don’t let an outdated link or slow page cost you real customers. Here is how we transform your online presence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '18px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#be123c', marginBottom: '18px' }}>❌ Without a Pro Website</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#881337', fontSize: '0.96rem' }}>
              <li>• Customers search your brand on Google and find nothing.</li>
              <li>• Replying to the same price & service questions manually all day.</li>
              <li>• Cheap templates that look broken on mobile screens.</li>
              <li>• Zero ownership—dependent entirely on social media algorithms.</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '18px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1d4ed8', marginBottom: '18px' }}>✅ With UK WEBS Architecture</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#1e3a8a', fontSize: '0.96rem' }}>
              <li>• Instant authority with a custom, fast-loading brand hub.</li>
              <li>• Clear packages, live portfolio & automated inquiry routing.</li>
              <li>• Smooth animations & thumb-friendly mobile experience.</li>
              <li>• Cloud database backend you can update anytime.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CORE ENGINEERING CAPABILITIES (6 CARDS) */}
      <section style={{ maxWidth: '1150px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '40px', gap: '16px' }}>
          <div>
            <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>WHAT WE BUILD</span>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '800', marginTop: '6px', letterSpacing: '-0.6px' }}>
              Full-Stack Web Capabilities
            </h2>
          </div>
          <Link to="/services" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none', fontSize: '0.95rem' }}>
            Explore All Services →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px' }}>
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="hover-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '28px'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{cap.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '10px', color: '#0f172a' }}>{cap.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LIVE SUPABASE PORTFOLIO SHOWCASE */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '85px 24px' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '40px', gap: '16px' }}>
            <div>
              <span style={{ color: '#10b981', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>● LIVE PRODUCTION FEED</span>
              <h2 style={{ fontSize: '2.3rem', fontWeight: '800', marginTop: '6px', letterSpacing: '-0.6px' }}>
                Recent Live Deployments
              </h2>
            </div>
            <Link to="/projects" style={{
              backgroundColor: '#0f172a',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.9rem'
            }}>
              View Full Portfolio ({projects.length}+) →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {projects.map((p) => (
              <div
                key={p.id}
                className="hover-card"
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    marginBottom: '12px'
                  }}>
                    {p.category}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.6', marginBottom: '16px' }}>{p.description}</p>
                </div>

                <div style={{ paddingTop: '14px', borderTop: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', marginBottom: '10px' }}>
                    STACK: {p.tech_stack}
                  </div>
                  <a href={p.live_url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none', fontSize: '0.92rem' }}>
                    Launch Live Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATABLE CLIENT & DEV REALITY CARDS */}
      <section style={{ maxWidth: '1150px', margin: '0 auto', padding: '85px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>STRAIGHT TALK</span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', marginTop: '6px' }}>Myths vs. Modern Web Reality</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {realityCards.map((card, idx) => (
            <div key={idx} className="hover-card" style={{ backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '18px', padding: '30px' }}>
              <span style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px' }}>{card.tag}</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '14px 0', color: '#f8fafc', lineHeight: '1.4' }}>{card.quote}</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6' }}>{card.truth}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TRANSPARENT PRICING PREVIEW */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '85px 24px' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px' }}>SIMPLE INVESTMENT</span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', margin: '6px 0 14px' }}>Packages Tailored to Your Stage</h2>
          <p style={{ color: '#64748b', marginBottom: '44px' }}>Start small with a 48-hour landing page or launch a full-stack web ecosystem.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px', textAlign: 'left' }}>
            <div className="hover-card" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '30px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#475569' }}>STARTER LANDING PAGE</span>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '10px 0' }}>₹2,999</div>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '20px' }}>Ideal for local shops, creators & personal brands needing a fast online presence.</p>
              <Link to="/pricing" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>Compare Features →</Link>
            </div>

            <div className="hover-card" style={{ backgroundColor: '#0f172a', color: '#fff', border: '2px solid #2563eb', borderRadius: '18px', padding: '30px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#60a5fa' }}>MOST POPULAR • BUSINESS PRO</span>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '10px 0' }}>₹6,999</div>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '20px' }}>Multi-page website with live database integration, SEO setup & priority support.</p>
              <Link to="/pricing" style={{ color: '#60a5fa', fontWeight: '700', textDecoration: 'none' }}>Compare Features →</Link>
            </div>

            <div className="hover-card" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '30px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#475569' }}>CUSTOM WEB APP</span>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '10px 0' }}>₹14,999+</div>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '20px' }}>Full React.js + Cloud architecture with custom admin dashboard & APIs.</p>
              <Link to="/pricing" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>Compare Features →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE QUICK FAQ + FINAL CTA BANNER */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '85px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Common Questions Before Starting</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '64px' }}>
          {homeFaqs.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px 24px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '800', fontSize: '1.05rem' }}>
                <span>{item.q}</span>
                <span style={{ color: '#2563eb', fontSize: '1.4rem' }}>{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && (
                <p style={{ marginTop: '12px', color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Final High-Impact CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          color: '#ffffff',
          borderRadius: '22px',
          padding: '48px 32px',
          textAlign: 'center',
          boxShadow: '0 20px 30px -10px rgba(37, 99, 235, 0.4)'
        }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '12px' }}>Ready to Launch Your Website?</h2>
          <p style={{ color: '#dbeafe', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 28px', lineHeight: '1.6' }}>
            Tell us about your business idea and get a tailored project proposal sent directly from our engineering team.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#1e40af',
            padding: '15px 32px',
            borderRadius: '10px',
            fontWeight: '800',
            textDecoration: 'none',
            fontSize: '1rem'
          }}>
            Send Project Inquiry →
          </Link>
        </div>
      </section>
    </div>
  );
}