import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function loadFeatured() {
      const { data } = await supabase.from('projects').select('*').order('id', { ascending: false }).limit(3);
      if (data) setFeatured(data);
    }
    loadFeatured();
  }, []);

  return (
    <div>
      {/* Hero */}
      <header style={{ background: 'radial-gradient(circle at top right, #dbeafe 0%, #f8fafc 45%, #fef2f2 100%)', padding: '85px 24px 75px', textAlign: 'center' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', padding: '6px 14px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '20px' }}>
            ⚡ MODERN WEB ENGINEERING • VIZIANAGARAM & BEYOND
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: '800', lineHeight: '1.12', letterSpacing: '-1.5px', color: '#0f172a', marginBottom: '20px' }}>
            We Build Websites That Turn <span style={{ color: '#2563eb' }}>Visitors</span> Into Paying <span style={{ color: '#ef4444' }}>Customers.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto 36px' }}>
            High-converting local business portals, digital menus, and full-stack React & Cloud web applications engineered for speed and viral traffic.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
              Get Your Website Quote →
            </Link>
            <Link to="/projects" style={{ backgroundColor: '#fff', color: '#0f172a', border: '1px solid #cbd5e1', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontWeight: '700' }}>
              Explore All Projects
            </Link>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span>🚀 48-HOUR FAST DELIVERY &nbsp;&nbsp;•&nbsp;&nbsp; 📱 100% MOBILE RESPONSIVE &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ REACT + SUPABASE CLOUD &nbsp;&nbsp;•&nbsp;&nbsp; 🔒 ZERO DOWNTIME HOSTING &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 CUSTOM ADMIN DASHBOARDS &nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <span>🚀 48-HOUR FAST DELIVERY &nbsp;&nbsp;•&nbsp;&nbsp; 📱 100% MOBILE RESPONSIVE &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ REACT + SUPABASE CLOUD &nbsp;&nbsp;•&nbsp;&nbsp; 🔒 ZERO DOWNTIME HOSTING &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 CUSTOM ADMIN DASHBOARDS &nbsp;&nbsp;•&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* Stats Strip */}
      <section style={{ maxWidth: '1150px', margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <div><h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#2563eb' }}>48 Hrs</h3><p style={{ color: '#64748b', fontWeight: '600' }}>Landing Page Delivery</p></div>
          <div><h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a' }}>99.9%</h3><p style={{ color: '#64748b', fontWeight: '600' }}>Cloud Uptime Guarantee</p></div>
          <div><h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#ef4444' }}>100%</h3><p style={{ color: '#64748b', fontWeight: '600' }}>Mobile-First Architecture</p></div>
          <div><h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#10b981' }}>₹2,999</h3><p style={{ color: '#64748b', fontWeight: '600' }}>Starting Package</p></div>
        </div>
      </section>

      {/* Featured Builds */}
      <section style={{ maxWidth: '1150px', margin: '0 auto', padding: '70px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>Recent Live Deployments</h2>
          <Link to="/projects" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>View Full Portfolio →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {featured.map((p) => (
            <div key={p.id} className="hover-card" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '26px' }}>
              <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>{p.category}</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '12px 0 8px' }}>{p.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>{p.description}</p>
              <a href={p.live_url} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem' }}>Launch Live Site ↗</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}