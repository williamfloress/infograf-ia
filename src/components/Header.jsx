import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      padding: '2.5rem 0 3.5rem',
      textAlign: 'center',
      background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, var(--bg) 100%)',
      borderBottom: '2px dashed rgba(255, 255, 255, 0.1)',
      marginBottom: '0',
    }}>
      <div className="container">
        <h1 style={{
          fontFamily:'Outfit, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900,
          color: '#F8FAFC',
          lineHeight: '1.1',
          marginBottom: '0.75rem',
          textTransform: 'uppercase',
          textShadow: '2px 2px 0 #0A0614, 4px 4px 0 rgba(0,0,0,0.5)'
        }}>
          Historia de la <span style={{ color: 'var(--c-general)' }}>Inteligencia Artificial</span>
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          fontWeight: '500',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Análisis de seis perspectivas globales y regionales desde 1950 hasta 2026
        </p>
      </div>
    </header>
  );
}
