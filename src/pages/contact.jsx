import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState('Business Pro (₹6,999)');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [businessType, setBusinessType] = useState('');

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam) setSelectedPlan(planParam);
  }, [searchParams]);

  const handleEmailRedirect = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New UK WEBS Inquiry: ${clientName} - ${selectedPlan}`);
    const body = encodeURIComponent(
      `Hi UK WEBS,\n\nClient Name: ${clientName}\nClient Contact: ${clientContact}\nBusiness / Idea: ${businessType}\nSelected Package: ${selectedPlan}\n\nLet's connect!`
    );
    window.location.href = `mailto:udaybhaskarnidigattu@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '70px 24px' }}>
      <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px', textAlign: 'center' }}>Request a Project Quote</h1>
        <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '28px' }}>
          Fill in your project requirements below to email our engineering team directly.
        </p>

        <form onSubmit={handleEmailRedirect} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Your Name</label>
            <input type="text" required placeholder="e.g., Rahul Sharma" value={clientName} onChange={(e) => setClientName(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Your Email or Contact Info</label>
            <input type="text" required placeholder="So we can reply back to you" value={clientContact} onChange={(e) => setClientContact(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Business / Website Idea</label>
            <input type="text" required placeholder="e.g., Restaurant Menu, Gym, Portfolio" value={businessType} onChange={(e) => setBusinessType(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', marginBottom: '6px' }}>Selected Package</label>
            <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', backgroundColor: '#fff' }}>
              <option value="Starter Landing Page (₹2,999)">Starter Landing Page (₹2,999)</option>
              <option value="Business Pro (₹6,999)">Business Pro (₹6,999)</option>
              <option value="Custom Web App (₹14,999+)">Custom Web App (₹14,999+)</option>
            </select>
          </div>

          <button type="submit" style={{ marginTop: '8px', backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}>
            ✉️ Send Inquiry via Email →
          </button>
        </form>
      </div>
    </div>
  );
}