import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import ComparativeView from './components/ComparativeView';
import References from './components/References';
import Footer from './components/Footer';

import { timelineData, CATEGORIES } from './data/timelineData';
import './styles/global.css';

function App() {
  const [activeTab, setActiveTab] = useState('general');

  const activeCategory = CATEGORIES.find(c => c.id === activeTab);

  return (
    <>
      <Header />
      <Navigation active={activeTab} onSelect={setActiveTab} />
      
      <main className="container" style={{ minHeight: '60vh' }}>
        {activeTab === 'compare' ? (
          <ComparativeView />
        ) : (
          <Timeline 
            events={timelineData[activeTab] || []} 
            color={activeCategory?.color || '#6C63FF'} 
            label={activeCategory?.label || 'Visión General'}
          />
        )}
      </main>

      <div className="container">
        <References />
      </div>

      <Footer />
    </>
  );
}

export default App;
