import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0', color: '#646cff' }}>UK WEBS</h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa' }}>
          Custom Responsive Websites, Web Applications & Digital Solutions
        </p>
      </header>

      <section>
        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '25px' }}>
          Featured Builds
        </h2>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#888' }}>Loading live projects from cloud...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                style={{ 
                  border: '1px solid #333', 
                  borderRadius: '12px', 
                  padding: '20px', 
                  backgroundColor: '#1a1a1a',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#646cff', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    {project.category}
                  </span>
                  <h3 style={{ margin: '8px 0', fontSize: '1.4rem' }}>{project.title}</h3>
                  <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {project.description}
                  </p>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #2a2a2a' }}>
                  <p style={{ fontSize: '0.85rem', color: '#888', margin: '0 0 12px 0' }}>
                    <strong>Stack:</strong> {project.tech_stack}
                  </p>
                  <a 
                    href={project.live_url} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      display: 'inline-block', 
                      padding: '8px 16px', 
                      backgroundColor: '#646cff', 
                      color: '#fff', 
                      textDecoration: 'none', 
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;