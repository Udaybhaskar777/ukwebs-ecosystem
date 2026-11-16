import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false });
      if (data) setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto', padding: '70px 24px' }}>
      <span style={{ color: '#2563eb', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>
        PORTFOLIO • LIVE CLOUD FEED
      </span>
      <h1 style={{ fontSize: '2.6rem', fontWeight: '800', margin: '8px 0 24px' }}>
        Shipped & Live Projects
      </h1>

      {/* Category Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              border: '1px solid #cbd5e1',
              backgroundColor: filter === cat ? '#0f172a' : '#ffffff',
              color: filter === cat ? '#ffffff' : '#334155',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: '#64748b', fontWeight: '600' }}>Loading live projects from Supabase...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {filteredProjects.map((project) => (
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700' }}>● Live</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.description}</p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '12px', fontWeight: '600' }}>
                  TECH: <span style={{ color: '#334155' }}>{project.tech_stack}</span>
                </p>
                <a href={project.live_url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>
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