import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      padding: '3rem 0 2rem',
      textAlign: 'center',
      background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(108,99,255,0.12) 0%, transparent 70%)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      marginBottom: '0',
    }}>
      <div className="container">
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'1rem' }}>
          <span style={{
            display:'flex', alignItems:'center', gap:'0.4rem',
            padding:'0.3rem 0.9rem',
            border:'1px solid rgba(108,99,255,0.4)',
            borderRadius:'999px',
            fontSize:'0.72rem', fontWeight:'600', letterSpacing:'0.08em',
            color:'#a89cff', textTransform:'uppercase',
          }}>
            <Brain size={12}/> Infografía Interactiva · APA 7ª ed.
          </span>
        </div>
        <h1 style={{
          fontFamily:'Outfit, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #fff 30%, #a89cff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.75rem',
        }}>
          Historia de la Inteligencia Artificial
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          Seis perspectivas globales y regionales · 1950 – 2026
        </p>
      </div>
    </header>
  );
}
