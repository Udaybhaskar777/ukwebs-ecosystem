import { useState } from 'react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: 'How fast will my website be delivered?', a: 'Starter Landing Pages are delivered within 48 hours. Multi-page Business Pro sites take 4–5 days, and custom full-stack web apps take 7–14 days.' },
    { q: 'Is domain registration included in the package?', a: 'We set up free cloud hosting (.vercel.app / .netlify.app) at zero monthly cost. If you want a custom .com or .in domain, we help you connect it at the exact registrar price (~₹500–₹900/year).' },
    { q: 'Can I update my website content later?', a: 'Yes! For Business Pro and Custom Web App packages, we integrate a live cloud database so you can update projects, menus, or prices anytime without touching code.' },
    { q: 'How do payments and revisions work?', a: 'We start with a 50% advance after approving the initial design concept, and the remaining 50% upon final live launch. Every package includes 2 rounds of free revisions.' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '70px 24px' }}>
      <span style={{ color: '#ef4444', fontWeight: '700', fontSize: '0.85rem' }}>GOT QUESTIONS?</span>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '8px 0 36px' }}>Frequently Asked Questions</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '22px', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '800', fontSize: '1.1rem' }}>
              <span>{item.q}</span>
              <span style={{ color: '#2563eb', fontSize: '1.4rem' }}>{openIdx === idx ? '−' : '+'}</span>
            </div>
            {openIdx === idx && (
              <p style={{ marginTop: '14px', color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}