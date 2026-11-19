import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Admin() {
  const [passcode, setPasscode] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Client Web App');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [saving, setSaving] = useState(false);

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
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });
    if (error) alert('Error loading projects: ' + error.message);
    if (data) setProjects(data);
  }

  function resetForm() {
    setEditingId(null);
    setTitle('');
    setCategory('Client Web App');
    setDescription('');
    setTechStack('');
    setLiveUrl('');
  }

  function startEdit(project) {
    setEditingId(project.id);
    setTitle(project.title || '');
    setCategory(project.category || 'Client Web App');
    setDescription(project.description || '');
    setTechStack(project.tech_stack || '');
    setLiveUrl(project.live_url || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSaveProject(e) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      tech_stack: techStack.trim(),
      live_url: liveUrl.trim(),
    };

    if (editingId) {
      const { error } = await supabase
        .from('projects')
        .update(payload)
        .eq('id', editingId);

      if (error) {
        alert('Error updating project (Check Supabase UPDATE RLS policy): ' + error.message);
      } else {
        resetForm();
        loadProjects();
      }
    } else {
      const { error } = await supabase.from('projects').insert([payload]);
      if (error) {
        alert('Error adding project (Check Supabase INSERT RLS policy): ' + error.message);
      } else {
        resetForm();
        loadProjects();
      }
    }

    setSaving(false);
  }

  async function handleDeleteProject(id, projectTitle) {
    if (!window.confirm(`Delete "${projectTitle}" permanently?`)) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) {
      alert('Error deleting project (Check Supabase DELETE RLS policy): ' + error.message);
    } else {
      if (editingId === id) resetForm();
      loadProjects();
    }
  }

  if (!authorized) {
    return (
      <div style={{ maxWidth: '420px', margin: '80px auto', padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
        <h2 style={{ fontWeight: '800', marginBottom: '16px' }}>🔒 UK WEBS Admin Access</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            type="password"
            placeholder="Enter Admin Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
          />
          <button
            type="submit"
            style={{ backgroundColor: '#0f172a', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: '700', border: 'none', cursor: 'pointer' }}
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '920px', margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>UK WEBS Project Manager</h1>
        <button
          type="button"
          onClick={() => setAuthorized(false)}
          style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: '#fff', cursor: 'pointer', fontWeight: '600' }}
        >
          Lock 🔒
        </button>
      </div>

      <form
        onSubmit={handleSaveProject}
        style={{
          backgroundColor: '#fff',
          padding: '28px',
          borderRadius: '16px',
          border: editingId ? '2px solid #2563eb' : '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: '40px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontWeight: '800', color: editingId ? '#2563eb' : '#0f172a' }}>
            {editingId ? `✏️ Editing Project #${editingId}` : '+ Publish New Live Project'}
          </h3>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '600' }}
            >
              Cancel Edit
            </button>
          )}
        </div>

        <input required placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input required placeholder="Category (e.g., Client Web App, Utility Tool)" value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <textarea required rows={3} placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input required placeholder="Tech Stack (e.g., React, Vercel, Tailwind)" value={techStack} onChange={(e) => setTechStack(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input required placeholder="Live URL (https://...)" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />

        <button
          type="submit"
          disabled={saving}
          style={{ backgroundColor: editingId ? '#16a34a' : '#2563eb', color: '#fff', padding: '12px', borderRadius: '8px', fontWeight: '700', border: 'none', cursor: 'pointer' }}
        >
          {saving ? 'Saving...' : editingId ? 'Save Changes to Live Site' : 'Publish to Live Site'}
        </button>
      </form>

      <h3 style={{ fontWeight: '800', marginBottom: '16px' }}>Currently Live Projects ({projects.length})</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              backgroundColor: '#fff',
              padding: '18px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ fontWeight: '800', fontSize: '1.05rem' }}>
                {p.title} <span style={{ color: '#64748b', fontWeight: '500', fontSize: '0.88rem' }}>• {p.category}</span>
              </div>
              <p style={{ color: '#475569', fontSize: '0.88rem', margin: '4px 0' }}>{p.description}</p>
              <div style={{ fontSize: '0.8rem', color: '#2563eb' }}>{p.live_url}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href={p.live_url}
                target="_blank"
                rel="noreferrer"
                style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: '700', textDecoration: 'none', fontSize: '0.85rem' }}
              >
                Visit ↗
              </a>
              <button
                type="button"
                onClick={() => startEdit(p)}
                style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: '#fef3c7', color: '#b45309', fontWeight: '700', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteProject(p.id, p.title)}
                style={{ padding: '8px 12px', borderRadius: '8px', backgroundColor: '#fee2e2', color: '#b91c1c', fontWeight: '700', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}