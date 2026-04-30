export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 0',
      textAlign: 'center',
      borderTop: '2px dashed var(--border)',
      marginTop: 'auto',
      backgroundColor: 'var(--bg-elevated)',
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
        <p style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          margin: 0,
          fontFamily: "'Outfit', sans-serif"
        }}>
          Universidad de Oriente, Guatamare 2026
        </p>
        <p style={{
          fontSize: '0.95rem',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          margin: 0
        }}>
          Introducción a la IA.
        </p>
        
      </div>
    </footer>
  );
}
