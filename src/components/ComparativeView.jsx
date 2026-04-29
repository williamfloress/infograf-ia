import { comparativeData } from '../data/comparativeData';
import '../styles/comparative.css';

export default function ComparativeView() {
  const { decades, categories, labels, colors, activity, conclusions } = comparativeData;

  return (
    <section className="comparative fade-up">
      <h2 className="comparative__title">Resumen Comparativo</h2>
      <p className="comparative__subtitle">Evolución de la actividad en Inteligencia Artificial por décadas y regiones</p>

      {/* Leyenda */}
      <div className="legend">
        {categories.map(cat => (
          <div key={cat} className="legend__item">
            <span className="legend__dot" style={{ background: colors[cat] }}></span>
            {labels[cat]}
          </div>
        ))}
      </div>

      {/* Heat Matrix */}
      <div className="matrix-wrapper">
        <table className="matrix">
          <thead>
            <tr>
              <th>Región / Década</th>
              {decades.map(d => <th key={d}>{d}</th>)}
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <tr key={cat}>
                <td>{labels[cat]}</td>
                {decades.map((d, index) => {
                  const val = activity[cat][index];
                  // Intensity mapping
                  const intensityMap = {
                    0: { bg: 'transparent', char: '·' },
                    1: { bg: `${colors[cat]}33`, char: '●' }, // Low
                    2: { bg: `${colors[cat]}88`, char: '●' }, // Medium
                    3: { bg: colors[cat], char: '●' }         // High
                  };
                  return (
                    <td key={`${cat}-${d}`}>
                      <div className={`cell cell--${val}`} style={{ color: val > 0 ? colors[cat] : '' }}>
                        {intensityMap[val].char}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conclusiones */}
      <div className="conclusions">
        <h3 className="conclusions__heading">
          <span style={{ color: 'var(--c-compare)' }}>■</span> Conclusiones Principales
        </h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {conclusions.map((c, i) => (
            <article key={i} className="conclusion-card">
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
