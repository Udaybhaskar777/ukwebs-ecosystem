import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Admin() {
  const [passcode, setPasscode] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Client Web App');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [liveUrl, setLiveUrl] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'ukwebs2026') {
      setAuthorized(true);
      loadProjects();
    } else {
      alert('Incorrect Admin Passcode');
    }
  };

  async function loadProjects() {
    const { data } = await supabase.from('projects').select('*').order('id', { ascending: false });
    if (data) setProjects(data);
  }

  async function handleAddProject(e) {
    e.preventDefault();
    const { error } = await supabase.from('projects').insert([
      { title, category, description, tech_stack: techStack, live_url: liveUrl }
    ]);
    if (error) {
      alert('Error adding project (Check Supabase INSERT RLS policy): ' + error.message);
    } else {
      setTitle(''); setDescription(''); setTechStack(''); setLiveUrl('');
      loadProjects();
    }
  }

  if (!authorized) {
    return (
      <div style={{ maxWidth: '420px', margin: '80px auto', padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
        <h2 style={{ fontWeight: '800', marginBottom: '16px' }}>🔒 UK WEBS Admin Access</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input type="password" placeholder="Enter Admin Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
          <button type="submit" style={{ backgroundColor: '#0f172a', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>Unlock Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '24px' }}>UK WEBS Project Manager</h1>

      <form onSubmit={handleAddProject} style={{ backgroundColor: '#fff', padding: '28px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
        <h3 style={{ fontWeight: '800' }}>+ Publish New Live Project</h3>
        <input required placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input required placeholder="Category (e.g., Client Web App, Utility Tool)" value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <textarea required placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input required placeholder="Tech Stack (e.g., React, Supabase, Tailwind)" value={techStack} onChange={(e) => setTechStack(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input required placeholder="Live URL (https://...)" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>Publish to Live Site</button>
      </form>

      <h3 style={{ fontWeight: '800', marginBottom: '16px' }}>Currently Live Projects ({projects.length})</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {projects.map((p) => (
          <div key={p.id} style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
            <div><strong>{p.title}</strong> — <span style={{ color: '#64748b' }}>{p.category}</span></div>
            <a href={p.live_url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: '700' }}>Visit ↗</a>
          </div>
        ))}
      </div>
    </div>
  );
}