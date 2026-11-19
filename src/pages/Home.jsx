import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [totalCount, setTotalCount] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      const { data, count, error } = await supabase
        .from('projects')
        .select('*', { count: 'exact' })
        .order('id', { ascending: false });

      if (!error && data) {
        setTotalCount(count || data.length);
        setFeaturedProjects(data.slice(0, 3)); // Always 1 balanced 3-card row
      }
      setLoading(false);
    }
    loadProjects();
  }, []);

  const coreCapabilities = [
    {
      tag: '01 / WEB APPS',
      title: 'Full-Stack React & PHP Platforms',
      desc: 'Fast, database-backed web applications with Supabase, authentication, and live admin dashboards.',
    },
    {
      tag: '02 / LOCAL BUSINESS',
      title: 'WhatsApp Ordering & Menu Portals',
      desc: 'Zero-commission digital storefronts for cafés, clinics, and local brands with instant WhatsApp checkout.',
    },
    {
      tag: '03 / BROWSER TOOLS',
      title: 'High-Speed Utility & PWA Tools',
      desc: 'Installable Progressive Web Apps, media downloaders, and document formatters engineered for mobile speed.',
    },
  ];

  return (
    <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '44px 24px 96px' }}>
      {/* BENTO HERO SECTION */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '22px',
          alignItems: 'stretch',
          marginBottom: '72px',
        }}
      >
        {/* LEFT MAIN HERO CARD */}
        <div
          className="uk-glass-card"
          style={{
            gridColumn: 'span 2',
            padding: '44px 38px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background:
              'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(12, 25, 48, 0.85) 100%)',
          }}
        >
          <div>
            <div
              className="uk-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.76rem',
                fontWeight: '700',
                marginBottom: '22px',
              }}
            >
              ● AVAILABLE FOR FREELANCE &amp; CUSTOM BUILDS
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.4vw, 3.35rem)',
                fontWeight: '900',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '18px',
                color: '#f8fafc',
              }}
            >
              Engineering Fast Web Apps,{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Client Portals &amp; Smart Utilities.
              </span>
            </h1>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '1.05rem',
                maxWidth: '640px',
                marginBottom: '30px',
                lineHeight: 1.65,
              }}
            >
              UK WEBS builds production-ready websites, WhatsApp commerce portals, and installable web utilities designed for speed, clean UX, and real business conversions.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/projects" className="uk-btn-primary">
              Explore All {totalCount}+ Live Projects →
            </Link>
            <Link to="/pricing" className="uk-btn-ghost">
              View Packages &amp; Pricing
            </Link>
          </div>
        </div>

        {/* RIGHT BENTO METRICS STACK */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div
            className="uk-glass-card"
            style={{
              padding: '28px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className="uk-mono" style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: '700' }}>
              LIVE ECOSYSTEM
            </div>
            <div style={{ fontSize: '2.7rem', fontWeight: '900', color: '#f8fafc', lineHeight: 1.15, margin: '6px 0' }}>
              {totalCount}+ Apps
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Deployed across Vercel, Cloudflare Workers &amp; Supabase with active daily users.
            </p>
          </div>

          <div
            className="uk-glass-card"
            style={{
              padding: '28px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className="uk-mono" style={{ color: '#34d399', fontSize: '0.78rem', fontWeight: '700' }}>
              CORE STACK
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#f8fafc', margin: '8px 0 6px' }}>
              React • PHP • MySQL • Supabase
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              Modern frontend speed paired with rock-solid backend databases and PWA support.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED LIVE DEPLOYMENTS (BALANCED 3-CARD GRID) */}
      <section style={{ marginBottom: '76px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '28px',
          }}
        >
          <div>
            <div
              className="uk-mono"
              style={{ color: '#34d399', fontSize: '0.78rem', fontWeight: '700', marginBottom: '6px' }}
            >
              ● LIVE PRODUCTION FEED
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
              Featured Live Deployments
            </h2>
          </div>

          <Link to="/projects" className="uk-btn-ghost" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
            View All {totalCount}+ Projects →
          </Link>
        </div>

        {loading ? (
          <div className="uk-glass-card" style={{ padding: '48px', textAlign: 'center', color: '#94a3b8' }}>
            Loading live deployments...
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '22px',
            }}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="uk-glass-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'rgba(56, 189, 248, 0.12)',
                        color: '#38bdf8',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '8px',
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="uk-mono" style={{ color: '#34d399', fontSize: '0.76rem', fontWeight: '700' }}>
                      ● LIVE
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#f8fafc', marginBottom: '10px' }}>
                    {project.title}
                  </h3>

                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <div
                    className="uk-mono"
                    style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      marginBottom: '14px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(148, 163, 184, 0.12)',
                    }}
                  >
                    STACK: <span style={{ color: '#cbd5e1' }}>{project.tech_stack}</span>
                  </div>

                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#38bdf8',
                      fontWeight: '700',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    Launch Live App ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FULL-WIDTH ECOSYSTEM EXPLORE BANNER */}
        <div
          className="uk-glass-card"
          style={{
            marginTop: '24px',
            padding: '26px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            background: 'linear-gradient(90deg, rgba(14, 165, 233, 0.12) 0%, rgba(37, 99, 235, 0.08) 100%)',
            borderColor: 'rgba(56, 189, 248, 0.28)',
          }}
        >
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.12rem', color: '#f8fafc', marginBottom: '4px' }}>
              Explore Complete Ecosystem &amp; Client Portals ({totalCount}+ Live Builds)
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
              Includes <strong style={{ color: '#e2e8f0' }}>Matladukundham</strong>,{' '}
              <strong style={{ color: '#e2e8f0' }}>Uncle Aunty Tea Time</strong>, custom WhatsApp stores, and utility tools.
            </div>
          </div>

          <Link to="/projects" className="uk-btn-primary">
            Open Full Portfolio →
          </Link>
        </div>
      </section>

      {/* WHAT WE BUILD (3-COLUMN BENTO CAPABILITIES) */}
      <section>
        <div style={{ marginBottom: '28px' }}>
          <div className="uk-mono" style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: '700', marginBottom: '6px' }}>
            CAPABILITIES
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
            Built for Speed &amp; Real Users
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '22px',
          }}
        >
          {coreCapabilities.map((item) => (
            <div key={item.tag} className="uk-glass-card" style={{ padding: '28px' }}>
              <div className="uk-mono" style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: '700', marginBottom: '10px' }}>
                {item.tag}
              </div>
              <h3 style={{ fontSize: '1.22rem', fontWeight: '800', color: '#f8fafc', marginBottom: '10px' }}>
                {item.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}