import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false });

      if (!error && data) setProjects(data);
      setLoading(false);
    }
    fetchAllProjects();
  }, []);

  const categories = ['All', ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '52px 24px 96px' }}>
      <div style={{ marginBottom: '36px' }}>
        <div className="uk-mono" style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px' }}>
          ● COMPLETE DEPLOYMENT ARCHIVE
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '900', letterSpacing: '-0.03em', marginBottom: '12px' }}>
          Live Projects &amp; Ecosystem Tools
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.02rem', maxWidth: '640px' }}>
          Explore every client web portal, community platform, and utility application built and maintained under UK WEBS.
        </p>
      </div>

      {/* INTERACTIVE CATEGORY TABS */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '9px 18px',
                borderRadius: '999px',
                fontSize: '0.86rem',
                fontWeight: '700',
                cursor: 'pointer',
                border: active ? '1px solid #38bdf8' : '1px solid rgba(148, 163, 184, 0.18)',
                backgroundColor: active ? 'rgba(56, 189, 248, 0.16)' : 'rgba(15, 23, 42, 0.75)',
                color: active ? '#38bdf8' : '#cbd5e1',
                transition: 'all 0.18s ease',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="uk-glass-card" style={{ padding: '48px', textAlign: 'center', color: '#94a3b8' }}>
          Loading projects...
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px',
          }}
        >
          {filteredProjects.map((project) => (
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
                  Launch Live Site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}