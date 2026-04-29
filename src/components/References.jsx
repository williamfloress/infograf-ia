import { references } from '../data/references';

export default function References() {
  return (
    <section className="fade-up" style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
      <h2 style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: '1.4rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        marginBottom: '2rem',
      }}>
        Referencias Bibliográficas (APA 7ª ed.)
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {references.map(group => (
          <div key={group.category}>
            <h3 style={{
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingBottom: '0.5rem',
            }}>
              {group.label}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {group.items.map((refStr, idx) => {
                // Parse URLs dynamically to make them clickable
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const parts = refStr.split(urlRegex);

                return (
                  <li key={idx} style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    paddingLeft: '1.5rem',
                    textIndent: '-1.5rem' // APA hanging indent
                  }}>
                    {parts.map((part, i) =>
                      urlRegex.test(part) ? (
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-general)', textDecoration: 'none' }}>
                          {part}
                        </a>
                      ) : (
                        // Markdown simple parsing for italic: *text*
                        <span key={i} dangerouslySetInnerHTML={{ __html: part.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                      )
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
