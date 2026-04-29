import { CATEGORIES } from '../data/timelineData';
import { BarChart2 } from 'lucide-react';

const COMPARE_TAB = { id: 'compare', label: 'Resumen Comparativo', color: '#8B5CF6', emoji: '📊' };
const ALL_TABS = [...CATEGORIES, COMPARE_TAB];

export default function Navigation({ active, onSelect }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,18,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '0.75rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', gap: '0.4rem',
          overflowX: 'auto', paddingBottom: '2px',
        }}>
          {ALL_TABS.map(tab => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelect(tab.id)}
                aria-label={`Ver línea de tiempo: ${tab.label}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '8px',
                  border: `1px solid ${isActive ? tab.color : 'rgba(255,255,255,0.08)'}`,
                  background: isActive ? `${tab.color}22` : 'transparent',
                  color: isActive ? tab.color : 'var(--text-secondary)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <span>{tab.emoji || <BarChart2 size={12}/>}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
