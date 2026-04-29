import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/timeline.css';

const IMPORTANCE_LABEL = { high: 'Alta', medium: 'Media', low: 'Baja' };

function TimelineEvent({ event, color }) {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`event${expanded ? ' expanded' : ''}${isVisible ? ' visible' : ''}`}
      style={{ '--node-color': color }}
      onClick={() => setExpanded(v => !v)}
    >
      <div className="event__year">{event.year}</div>
      <h3 className="event__title">{event.title}</h3>

      <div className="event__meta">
        <span className={`badge badge--${event.importance}`}>
          {IMPORTANCE_LABEL[event.importance] || event.importance}
        </span>
        {event.tags?.map(t => (
          <span key={t} style={{
            fontSize:'0.7rem', color:'var(--text-muted)',
            background:'rgba(255,255,255,0.05)',
            padding:'1px 8px', borderRadius:'999px',
          }}>{t}</span>
        ))}
      </div>

      <p className="event__desc">{event.description}</p>

      {event.source?.apa && (
        <div className="event__source">
          <strong>Fuente (APA):</strong> {event.source.apa}
        </div>
      )}

      <span className="event__toggle"><ChevronDown size={14}/></span>
    </article>
  );
}

export default function Timeline({ events, color, label }) {
  const [filter, setFilter] = useState('all');
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'high', label: 'Importancia Alta' },
    { id: 'medium', label: 'Importancia Media' },
    { id: 'low', label: 'Importancia Baja' },
  ];

  const filtered = filter === 'all' ? events : events.filter(e => e.importance === filter);

  return (
    <section style={{ padding: '2rem 0 3rem' }}>
      <div style={{ marginBottom:'1.5rem' }}>
        <h2 style={{
          fontFamily:'Outfit,sans-serif', fontSize:'1.4rem',
          fontWeight:800, color:'var(--text-primary)', marginBottom:'0.25rem',
        }}>
          <span style={{ color }}>■</span> {label}
        </h2>
        <p style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>
          {events.length} hitos · Haz clic en cada evento para expandirlo
        </p>
      </div>

      <div className="filter-bar">
        {filters.map(f => (
          <button
            key={f.id}
            className={`filter-btn${filter===f.id?' active':''}`}
            style={{ '--node-color': color }}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="timeline-wrapper" style={{ '--axis-color': color }}>
        {filtered.map(ev => (
          <TimelineEvent key={ev.id} event={ev} color={color}/>
        ))}
      </div>
    </section>
  );
}
