import { 
  BookOpen, Monitor, Cpu, Globe, Cloud, Bot, CornerRightDown, CornerLeftDown, ChevronUp, ChevronDown, 
  BrainCircuit, Scale, Building2, Sparkles, Network, Code2, GraduationCap, 
  Microscope, LineChart, Landmark, ShieldCheck, Zap, Image as ImageIcon 
} from 'lucide-react';
import { useState } from 'react';
import '../styles/timeline.css';

const PALETTE = ['#A78BFA', '#60A5FA', '#34D399', '#FBBF24', '#F87171', '#F472B6'];

// Intelligent graphic mapper based on event tags
const getSmartIcon = (tags) => {
  if (!tags || tags.length === 0) return BrainCircuit;
  const t = tags.join(' ').toLowerCase();
  
  if (t.includes('regulación') || t.includes('ética') || t.includes('política') || t.includes('gobernanza')) return Scale;
  if (t.includes('deep learning') || t.includes('redes neuronales') || t.includes('machine learning')) return Network;
  if (t.includes('llm') || t.includes('nlp') || t.includes('transformers') || t.includes('chatbots')) return Bot;
  if (t.includes('generative ai') || t.includes('openai') || t.includes('multimodal')) return Sparkles;
  if (t.includes('academia') || t.includes('universidad') || t.includes('educación') || t.includes('stanford')) return GraduationCap;
  if (t.includes('gobierno') || t.includes('estado') || t.includes('darpa') || t.includes('cepal')) return Landmark;
  if (t.includes('empresa') || t.includes('ibm') || t.includes('startups') || t.includes('baidu')) return Building2;
  if (t.includes('hardware') || t.includes('chip') || t.includes('computadora')) return Cpu;
  if (t.includes('seguridad') || t.includes('privacidad')) return ShieldCheck;
  if (t.includes('hito') || t.includes('juegos') || t.includes('crisis')) return Zap;
  if (t.includes('fundamentos') || t.includes('teoría') || t.includes('investigación')) return Microscope;
  
  return BrainCircuit; // default fallback
};

const GraphicContent = ({ ev, nodeColor, IconComponent }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="zz-image" style={{ 
      borderColor: nodeColor,
      background: `${nodeColor}10`, // Light tint background that shows through transparent logos nicely
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {ev.image && !imgError ? (
        <img 
          src={ev.image} 
          alt={ev.title} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '240px', 
            width: 'auto',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            transition: 'transform 0.4s ease'
          }} 
          className="hover-zoom"
          onError={() => setImgError(true)}
        />
      ) : (
        <IconComponent size={72} color={nodeColor} strokeWidth={1.5} style={{ filter: `drop-shadow(0 4px 6px ${nodeColor}40)` }} />
      )}
    </div>
  );
};

export default function Timeline({ events, label, onReset, showReset }) {
  const [expandedIds, setExpandedIds] = useState([]); // All hidden by default

  const toggleExpand = (id) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (!events || events.length === 0) return null;

  return (
    <section className="timeline-container fade-up">
      <div className="timeline-header" style={{ marginBottom: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        {showReset && (
          <button 
            onClick={onReset}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-secondary)',
              padding: '0.6rem 1.5rem',
              borderRadius: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#F8FAFC'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <Globe size={18} /> Volver a Visión General
          </button>
        )}
        
        <div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F8FAFC', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            {label}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Explorando los hitos y desarrollos clave
          </p>
        </div>
      </div>

      <div className="vertical-zigzag-timeline">
        <div className="timeline-center-line"></div>
        
        {events.map((ev, index) => {
          const isEven = index % 2 === 0;
          const align = isEven ? 'left' : 'right';
          const IconComponent = getSmartIcon(ev.tags);
          const nodeColor = PALETTE[index % PALETTE.length];
          const isExpanded = expandedIds.includes(ev.id);
          
          return (
            <div key={ev.id} className={`zz-row zz-${align}`}>
              
              {/* Left Column */}
              <div className="zz-col zz-col-left">
                {isEven ? (
                  <div className="zz-text-block">
                    <div className="zz-pill" style={{ backgroundColor: nodeColor }}>{ev.title}</div>
                    <div className={`zz-accordion-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                      <div className="zz-desc-box" style={{ borderColor: nodeColor }}>
                        <p>{ev.description}</p>
                        {/* Optional tags pill */}
                        {ev.tags && (
                          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            {ev.tags.map(tag => (
                              <span key={tag} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: `${nodeColor}20`, color: nodeColor, borderRadius: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {/* APA Citation */}
                        {ev.source && ev.source.apa && (
                          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.4' }}>
                              <BookOpen size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                              {ev.source.apa}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`zz-accordion-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <div className="zz-visual-block">
                      <div className="zz-dashed-line line-left"></div>
                      <GraphicContent ev={ev} nodeColor={nodeColor} IconComponent={IconComponent} />
                      {index < events.length - 1 && (
                        <CornerRightDown className="zz-arrow zz-arrow-left" size={48} color="#64748B" strokeWidth={1.5} />
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Center Column (Node & Year) */}
              <div className="zz-center-col" onClick={() => toggleExpand(ev.id)}>
                <div 
                  className="zz-year-badge interactive-badge" 
                  style={{ 
                    backgroundColor: nodeColor,
                    boxShadow: `0 0 15px ${nodeColor}60`
                  }}
                  title="Haz clic para expandir/ocultar"
                >
                  {ev.year}
                  <span style={{ marginLeft: '8px', opacity: 0.7, display: 'inline-flex', alignItems: 'center' }}>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="zz-col zz-col-right">
                {isEven ? (
                  <div className={`zz-accordion-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <div className="zz-visual-block">
                      <div className="zz-dashed-line line-right"></div>
                      <GraphicContent ev={ev} nodeColor={nodeColor} IconComponent={IconComponent} />
                      {index < events.length - 1 && (
                        <CornerLeftDown className="zz-arrow zz-arrow-right" size={48} color="#64748B" strokeWidth={1.5} />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="zz-text-block">
                    <div className="zz-pill" style={{ backgroundColor: nodeColor }}>{ev.title}</div>
                    <div className={`zz-accordion-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                      <div className="zz-desc-box" style={{ borderColor: nodeColor }}>
                        <p>{ev.description}</p>
                        {/* Optional tags pill */}
                        {ev.tags && (
                          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            {ev.tags.map(tag => (
                              <span key={tag} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: `${nodeColor}20`, color: nodeColor, borderRadius: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {/* APA Citation */}
                        {ev.source && ev.source.apa && (
                          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.4' }}>
                              <BookOpen size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                              {ev.source.apa}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
