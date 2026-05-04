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
          Universidad de Oriente, Nucleo Nueva Esparta,  2026
        </p>
        <p style={{
          fontSize: '0.95rem',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          margin: 0
        }}>
          Introducción a la IA - Profesor Samuel Rojas
        </p>
        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Proyecto de Investigación Realizado por:</p>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            fontWeight: 500
          }}>
            <li>Amijoalian Roa</li>
            <li>Aaron Ortiz</li>
            <li>Josué Cabeza</li>
            <li>Roberth Alvarez</li>
            <li>William Flores</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
