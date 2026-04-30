import { comparativeData } from '../data/comparativeData';
import '../styles/comparative.css';
import { useState } from 'react';

export default function ComparativeView() {
  const { decades, categories, labels, colors, activity, conclusions } = comparativeData;
  const [activeDecadeIndex, setActiveDecadeIndex] = useState(decades.length - 1); // Default to 2020s

  return (
    <section className="comparative fade-up">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="comparative__title">Panel de Datos Interactivo</h2>
        <p className="comparative__subtitle">Analiza el nivel de actividad e inversión en IA seleccionando una década</p>
      </div>

      {/* Interactive Decade Selector */}
      <div className="decade-selector">
        {decades.map((d, index) => (
          <button 
            key={d} 
            className={`decade-btn ${index === activeDecadeIndex ? 'active' : ''}`}
            onClick={() => setActiveDecadeIndex(index)}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Bar Charts for the selected decade */}
      <div className="chart-container">
        <h3 className="chart-title">Desarrollo Regional en la década de {decades[activeDecadeIndex]}</h3>
        <div className="bars-wrapper">
          {categories.map(cat => {
            const val = activity[cat][activeDecadeIndex];
            // Map 0,1,2,3 to percentages
            const percentage = val === 0 ? 8 : val === 1 ? 35 : val === 2 ? 70 : 100;
            return (
              <div key={cat} className="bar-row">
                <div className="bar-label">{labels[cat]}</div>
                <div className="bar-track">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: colors[cat],
                      opacity: val === 0 ? 0.3 : 1
                    }}
                  >
                    <span className="bar-value">
                      {val === 0 ? 'Nulo' : val === 1 ? 'Bajo' : val === 2 ? 'Medio' : 'Alto'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conclusions styled as interactive cards */}
      <div className="conclusions">
        <h3 className="conclusions__heading">
          <span style={{ color: '#8134C4' }}>■</span> Conclusiones Clave
        </h3>
        <div className="conclusions-grid">
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
