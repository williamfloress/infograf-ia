import { Globe } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import ComparativeView from './components/ComparativeView';
import References from './components/References';
import Footer from './components/Footer';

import { useState } from 'react';
import { timelineData, CATEGORIES } from './data/timelineData';
import './styles/global.css';

function App() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeCategory = CATEGORIES.find(c => c.id === activeTab);

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
            }} 
          />
        </aside>
        
        <main className="layout-content">
          <Timeline 
            events={timelineData[activeTab] || []} 
            color={activeCategory?.color || '#6C63FF'} 
            label={activeCategory?.label || 'Visión General'}
            onReset={() => setActiveTab('general')}
            showReset={activeTab !== 'general'}
          />
        </main>
      </div>

      <div className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <ComparativeView />
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <References />
      </div>

      <button className={`mobile-map-fab ${isSidebarOpen ? 'hidden' : ''}`} onClick={() => setIsSidebarOpen(true)}>
        <Globe size={18} /> Explorar Mapa
      </button>

      <Footer />
    </>
  );
}

export default App;
