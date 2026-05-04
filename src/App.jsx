import { Globe, ArrowLeft } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import ComparativeView from './components/ComparativeView';
import References from './components/References';
import Footer from './components/Footer';

import { useState, useEffect, useRef } from 'react';
import { timelineData, CATEGORIES } from './data/timelineData';
import './styles/global.css';

function App() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);
  const hideTimer = useRef(null);

  const activeCategory = CATEGORIES.find(c => c.id === activeTab);
  const showReset = activeTab !== 'general';

  // Show FAB on scroll, auto-hide after 4s
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setFabVisible(true);
        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setFabVisible(false), 4000);
      } else {
        setFabVisible(false);
        clearTimeout(hideTimer.current);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(hideTimer.current);
    };
  }, []);

  const fabClass = [
    'mobile-map-fab',
    fabVisible && !isSidebarOpen ? 'fab-visible' : '',
    isSidebarOpen ? 'hidden' : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <Header />
      
      <div className="layout-split">
        <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
        
        <aside className={`layout-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button className="mobile-close-btn" onClick={() => setIsSidebarOpen(false)}>✕</button>
          <Navigation 
            active={activeTab} 
            onSelect={(id) => {
              setActiveTab(id);
              setIsSidebarOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        </aside>
        
        <main className="layout-content">
          <Timeline 
            events={timelineData[activeTab] || []} 
            color={activeCategory?.color || '#6C63FF'} 
            label={activeCategory?.label || 'Visión General'}
          />
        </main>
      </div>

      <div className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <ComparativeView />
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <References />
      </div>

      <button className={fabClass} onClick={() => setIsSidebarOpen(true)}>
        <Globe size={18} /> Explorar Mapa
      </button>

      {/* Fixed "Volver a Visión General" badge */}
      {showReset && (
        <button
          onClick={() => { setActiveTab('general'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 950,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.2rem',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(17, 19, 24, 0.85)',
            backdropFilter: 'blur(12px)',
            color: '#E5E7EB',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            animation: 'fadeUp 0.4s ease both',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(148, 163, 184, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(17, 19, 24, 0.85)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          }}
        >
          <ArrowLeft size={16} /> Visión General
        </button>
      )}

      <Footer />
    </>
  );
}

export default App;
