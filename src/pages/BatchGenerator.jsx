import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Download, Terminal, Globe, AppWindow, FileText, ArrowLeft, CheckCircle2, Briefcase, Power } from 'lucide-react';
import { supabase } from '../supabaseClient';

const JOB_SEEKER_BAT = `@echo off\r
title Job Aspirant Hub - All-in-One Workspace\r
echo Opening Study Materials, Job Portals, and Aptitude Platforms...\r
\r
:: 1. Open Offline Notes / Material / Resume Folder (Mee folder path tho replace cheyyandi)\r
start "" explorer "D:\\Competitive_Exams\\Study_PDFs"\r
start "" explorer "D:\\Jobs\\Resume_and_Docs"\r
\r
:: 2. Private Jobs & Hiring Platforms\r
start "" chrome "https://www.linkedin.com/jobs" "https://www.naukri.com" "https://www.indeed.com"\r
\r
:: 3. Government Job Notifications & Alerts\r
start "" chrome "https://www.freejobalert.com" "https://www.sarkariresult.com"\r
\r
:: 4. Aptitude & Reasoning Visual/Concept Learning Sites\r
start "" chrome "https://www.indiabix.com" "https://www.geeksforgeeks.org/aptitude-questions-and-answers/" "https://prepinsta.com/learn-aptitude/"\r
\r
:: 5. Mock Tests & Practice Portals\r
start "" chrome "https://testbook.com" "https://www.oliveboard.in"\r
\r
:: 6. AI for Instant Doubts & Reasoning Explanations (Standalone App)\r
start "" chrome --app="https://gemini.google.com"\r
\r
exit`;

const CLOSE_ALL_BAT = `@echo off\r
title Close All Workspace Apps - UK WEBS\r
echo Closing all open browsers, PDFs, and workspace apps...\r
\r
taskkill /F /IM chrome.exe /T >nul 2>&1\r
taskkill /F /IM msedge.exe /T >nul 2>&1\r
taskkill /F /IM AcroRd32.exe /T >nul 2>&1\r
taskkill /F /IM Acrobat.exe /T >nul 2>&1\r
taskkill /F /IM notepad.exe /T >nul 2>&1\r
\r
echo All workspace applications closed cleanly!\r
timeout /t 2 >nul\r
exit`;

export default function BatchGenerator() {
  const [fileName, setFileName] = useState('UKWEBS_Workspace');
  const [delay, setDelay] = useState(1);
  const [items, setItems] = useState([
    { id: 1, type: 'website', label: 'YouTube', value: 'https://www.youtube.com' },
    { id: 2, type: 'website', label: 'Gemini AI', value: 'https://gemini.google.com' }
  ]);
  const [totalCreated, setTotalCreated] = useState(100);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    const { data } = await supabase
      .from('tool_stats')
      .select('count')
      .eq('tool_name', 'batch_generator')
      .single();
    if (data) setTotalCreated(data.count);
  };

  const triggerBatDownload = async (scriptText, downloadName) => {
    const blob = new Blob([scriptText], { type: 'application/x-bat' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = downloadName.endsWith('.bat') ? downloadName : `${downloadName}.bat`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const { data } = await supabase.rpc('increment_batch_count');
    if (data) setTotalCreated(data);
  };

  const addItem = (type) => {
    setItems([...items, { id: Date.now(), type, label: '', value: '' }]);
  };

  const updateItem = (id, field, val) => {
    setItems(items.map(item => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const generateBatContent = () => {
    let script = `@echo off\r\n`;
    script += `title ${fileName} - Powered by UK WEBS\r\n`;
    script += `echo ==========================================\r\n`;
    script += `echo    Launching ${fileName} via UK WEBS\r\n`;
    script += `echo ==========================================\r\n\r\n`;

    items.forEach((item) => {
      if (!item.value.trim()) return;
      const cleanVal = item.value.trim().replace(/^"|"$/g, '');

      if (item.type === 'website') {
        const url = cleanVal.startsWith('http') ? cleanVal : `https://${cleanVal}`;
        script += `echo Opening Website: ${item.label || url}...\r\n`;
        script += `start "" "${url}"\r\n`;
      } else {
        script += `echo Launching: ${item.label || cleanVal}...\r\n`;
        script += `start "" "${cleanVal}"\r\n`;
      }

      if (delay > 0) {
        script += `timeout /t ${delay} /nobreak >nul\r\n\r\n`;
      }
    });

    script += `echo Done! Closing window...\r\n`;
    script += `timeout /t 2 >nul\r\n`;
    script += `exit\r\n`;
    return script;
  };

  const handleDownload = async () => {
    const validItems = items.filter(i => i.value.trim() !== '');
    if (validItems.length === 0) return alert('Kachitanga oka website, app, or file path add cheyi mawa!');

    setIsGenerating(true);
    const safeName = `${fileName.replace(/[^a-zA-Z0-9_-]/g, '_') || 'UKWEBS_Launcher'}.bat`;
    await triggerBatDownload(generateBatContent(), safeName);
    setIsGenerating(false);
  };

  return (
    <div style={styles.page}>
      <style>{`
        .bat-input:focus, .bat-select:focus {
          border-color: #2563eb !important;
          background-color: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .bat-add-btn:hover, .bat-ready-btn:hover {
          transform: translateY(-2px);
          filter: brightness(0.97);
        }
        .bat-download-btn:hover {
          background-color: #1d4ed8 !important;
          transform: translateY(-1px);
        }
        .bat-del-btn:hover {
          color: #ef4444 !important;
          background-color: #fef2f2 !important;
        }
        @media (max-width: 768px) {
          .bat-hero { flex-direction: column; align-items: flex-start !important; }
          .bat-grid-2 { grid-template-columns: 1fr !important; }
          .bat-bottom-grid { grid-template-columns: 1fr !important; }
          .bat-item-row { flex-direction: column; align-items: stretch !important; }
          .bat-item-name { width: 100% !important; }
        }
      `}</style>

      <div style={styles.container}>
        <Link to="/" style={styles.backLink}>
          <ArrowLeft size={16} /> Back to UK WEBS
        </Link>

        {/* Hero Header Card */}
        <div className="bat-hero" style={styles.heroCard}>
          <div>
            <div style={styles.badge}>
              <Terminal size={14} /> FREE AUTOMATION UTILITY
            </div>
            <h1 style={styles.title}>
              Instant <span style={{ color: '#2563eb' }}>.BAT</span> Launcher Maker
            </h1>
            <p style={styles.subtitle}>
              Zero coding tho mee daily websites, PC apps, and study PDFs anni okate double-click tho launch chese batch file create cheskondi—leda kindha ready-made packs direct download cheskondi.
            </p>
          </div>

          <div style={styles.counterBox}>
            <div style={styles.counterNumber}>{totalCreated.toLocaleString()}+</div>
            <div style={styles.counterLabel}>BATCH FILES CREATED</div>
          </div>
        </div>

        {/* Ready-Made Download Packs (Job Seekers & Close All) */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#64748b', letterSpacing: '0.6px', marginBottom: '12px' }}>
            READY-TO-USE DIRECT DOWNLOAD PACKS
          </div>
          <div className="bat-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            {/* Card 1: Job Seekers */}
            <div style={styles.readyCard}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '7px', borderRadius: '10px', display: 'flex' }}>
                    <Briefcase size={18} />
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#0f172a' }}>
                    Job Aspirant Hub (.BAT)
                  </h3>
                </div>
                <p style={{ margin: '0 0 16px 0', fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
                  LinkedIn, Naukri, Indeed, FreeJobAlert, SarkariResult, IndiaBIX, Testbook, Gemini & local study/resume folders anni okate click tho open avtai.
                </p>
              </div>
              <button
                type="button"
                className="bat-ready-btn"
                onClick={() => triggerBatDownload(JOB_SEEKER_BAT, 'Job_Aspirant_Hub.bat')}
                style={{ ...styles.readyBtn, backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
              >
                <Download size={16} /> Download Job_Aspirant_Hub.bat
              </button>
            </div>

            {/* Card 2: Close All Files */}
            <div style={styles.readyCard}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '7px', borderRadius: '10px', display: 'flex' }}>
                    <Power size={18} />
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: '#0f172a' }}>
                    Close All Workspace Apps (.BAT)
                  </h3>
                </div>
                <p style={{ margin: '0 0 16px 0', fontSize: '0.85rem', color: '#475569', lineHeight: '1.5' }}>
                  Study or work ayipoyaka open lo unna Chrome, Edge, PDF readers & Notepad windows anni okate double-click tho clean ga close chestundhi.
                </p>
              </div>
              <button
                type="button"
                className="bat-ready-btn"
                onClick={() => triggerBatDownload(CLOSE_ALL_BAT, 'Close_All_Apps.bat')}
                style={{ ...styles.readyBtn, backgroundColor: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}
              >
                <Download size={16} /> Download Close_All_Apps.bat
              </button>
            </div>
          </div>
        </div>

        {/* Custom Builder Card */}
        <div style={styles.card}>
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#0f172a', letterSpacing: '0.4px', marginBottom: '18px' }}>
            OR BUILD YOUR OWN CUSTOM .BAT FILE
          </div>

          <div className="bat-grid-2" style={styles.settingsGrid}>
            <div>
              <label style={styles.label}>FILE NAME</label>
              <input
                type="text"
                className="bat-input"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="e.g., Study_Setup or Work_Mode"
                style={styles.input}
              />
            </div>
            <div>
              <label style={styles.label}>LAUNCH DELAY</label>
              <select
                className="bat-select"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                style={styles.input}
              >
                <option value={0}>0 Seconds (All at once)</option>
                <option value={1}>1 Second gap (Recommended)</option>
                <option value={2}>2 Seconds gap (Smooth load)</option>
              </select>
            </div>
          </div>

          {/* Add Buttons */}
          <div style={styles.addBtnRow}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94a3b8', letterSpacing: '0.5px' }}>
              ADD ITEMS:
            </span>
            <button
              type="button"
              className="bat-add-btn"
              onClick={() => addItem('website')}
              style={{ ...styles.addBtn, backgroundColor: '#eff6ff', color: '#1d4ed8', borderColor: '#bfdbfe' }}
            >
              <Globe size={16} /> + Website URL
            </button>
            <button
              type="button"
              className="bat-add-btn"
              onClick={() => addItem('app')}
              style={{ ...styles.addBtn, backgroundColor: '#f1f5f9', color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <AppWindow size={16} /> + PC App (.exe)
            </button>
            <button
              type="button"
              className="bat-add-btn"
              onClick={() => addItem('file')}
              style={{ ...styles.addBtn, backgroundColor: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' }}
            >
              <FileText size={16} /> + PDF / Folder
            </button>
          </div>

          {/* Dynamic Items List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item, idx) => (
              <div key={item.id} className="bat-item-row" style={styles.itemRow}>
                <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#94a3b8', minWidth: '24px' }}>
                  0{idx + 1}
                </span>

                <span
                  style={{
                    ...styles.typeTag,
                    backgroundColor:
                      item.type === 'website' ? '#dbeafe' : item.type === 'app' ? '#e2e8f0' : '#fee2e2',
                    color:
                      item.type === 'website' ? '#1d4ed8' : item.type === 'app' ? '#1e293b' : '#b91c1c',
                  }}
                >
                  {item.type}
                </span>

                <input
                  type="text"
                  className="bat-input bat-item-name"
                  placeholder="Label (Optional)"
                  value={item.label}
                  onChange={(e) => updateItem(item.id, 'label', e.target.value)}
                  style={{ ...styles.input, width: '180px', backgroundColor: '#ffffff' }}
                />

                <input
                  type="text"
                  className="bat-input"
                  placeholder={
                    item.type === 'website'
                      ? 'https://github.com'
                      : item.type === 'app'
                      ? 'C:\\Program Files\\...\\app.exe'
                      : 'D:\\College\\Notes.pdf'
                  }
                  value={item.value}
                  onChange={(e) => updateItem(item.id, 'value', e.target.value)}
                  style={{
                    ...styles.input,
                    flex: 1,
                    backgroundColor: '#ffffff',
                    fontFamily: 'monospace',
                  }}
                />

                <button
                  type="button"
                  className="bat-del-btn"
                  onClick={() => removeItem(item.id)}
                  style={styles.delBtn}
                  title="Remove"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Script Preview + Download CTA */}
        <div className="bat-bottom-grid" style={styles.bottomGrid}>
          <div style={styles.previewCard}>
            <div style={styles.previewHeader}>
              <span>CUSTOM SCRIPT PREVIEW</span>
              <span>.BAT FORMAT</span>
            </div>
            <pre style={styles.preCode}>{generateBatContent()}</pre>
          </div>

          <div style={styles.actionCard}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 12px 0' }}>
                How to Run
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={styles.tipRow}>
                  <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    Download ayina <b>.bat</b> file ni Desktop meedha save cheyandi.
                  </span>
                </div>
                <div style={styles.tipRow}>
                  <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    Windows SmartScreen popup osthe <b>More info → Run anyway</b> click cheyandi.
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="bat-download-btn"
              onClick={handleDownload}
              disabled={isGenerating}
              style={styles.downloadBtn}
            >
              <Download size={19} />
              {isGenerating ? 'Generating...' : 'Create Custom Batch File (.BAT)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    padding: '36px 20px 64px',
  },
  container: {
    maxWidth: '1050px',
    margin: '0 auto',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#64748b',
    textDecoration: 'none',
    marginBottom: '20px',
  },
  heroCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    padding: '28px 32px',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '24px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '0.75rem',
    fontWeight: '800',
    padding: '5px 12px',
    borderRadius: '999px',
    letterSpacing: '0.5px',
    marginBottom: '12px',
  },
  title: {
    fontSize: '2.1rem',
    fontWeight: '900',
    color: '#0f172a',
    margin: '0 0 8px 0',
    letterSpacing: '-0.8px',
  },
  subtitle: {
    fontSize: '0.96rem',
    color: '#475569',
    margin: 0,
    maxWidth: '580px',
    lineHeight: '1.6',
  },
  counterBox: {
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: '16px',
    padding: '18px 28px',
    textAlign: 'center',
    minWidth: '180px',
  },
  counterNumber: {
    fontSize: '2rem',
    fontWeight: '900',
    color: '#2563eb',
    lineHeight: '1.1',
  },
  counterLabel: {
    fontSize: '0.72rem',
    fontWeight: '800',
    color: '#475569',
    letterSpacing: '0.6px',
    marginTop: '6px',
  },
  readyCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '22px',
    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  readyBtn: {
    width: '100%',
    borderRadius: '10px',
    padding: '11px 16px',
    fontSize: '0.88rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    padding: '28px',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
    marginBottom: '24px',
  },
  settingsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '18px',
    paddingBottom: '22px',
    marginBottom: '22px',
    borderBottom: '1px solid #f1f5f9',
  },
  label: {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: '800',
    color: '#64748b',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    padding: '10px 14px',
    fontSize: '0.92rem',
    fontWeight: '500',
    color: '#0f172a',
    outline: 'none',
    transition: 'all 0.15s ease',
  },
  addBtnRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  addBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    border: '1px solid',
    borderRadius: '10px',
    padding: '9px 15px',
    fontSize: '0.86rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  itemRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '12px',
  },
  typeTag: {
    fontSize: '0.72rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    padding: '5px 10px',
    borderRadius: '8px',
    minWidth: '78px',
    textAlign: 'center',
  },
  delBtn: {
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.15s ease',
  },
  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1.35fr 1fr',
    gap: '24px',
  },
  previewCard: {
    backgroundColor: '#0f172a',
    borderRadius: '18px',
    padding: '22px',
    color: '#f8fafc',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.08)',
  },
  previewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#94a3b8',
    fontFamily: 'monospace',
    marginBottom: '12px',
    letterSpacing: '0.5px',
  },
  preCode: {
    margin: 0,
    fontSize: '0.82rem',
    color: '#34d399',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    maxHeight: '190px',
    overflowY: 'auto',
    lineHeight: '1.6',
  },
  actionCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tipRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.84rem',
    color: '#475569',
    lineHeight: '1.5',
  },
  downloadBtn: {
    width: '100%',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 20px',
    fontSize: '0.96rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '0 6px 16px rgba(37, 99, 235, 0.25)',
    transition: 'all 0.15s ease',
  },
};