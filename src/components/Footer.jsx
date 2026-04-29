export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 0',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '0.5rem'
        }}>
          Desarrollado para propósitos académicos e informativos.
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.2)'
        }}>
          &copy; {new Date().getFullYear()} — Historia de la Inteligencia Artificial.
        </p>
      </div>
    </footer>
  );
}
