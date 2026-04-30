import { useState, useCallback } from "react";
import { ComposableMap, Geographies, Geography, Marker, Sphere, Graticule } from "react-simple-maps";
import { CATEGORIES } from '../data/timelineData';
import { BarChart2, Globe2, MousePointerClick } from 'lucide-react';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric codes for the target regions
const TARGET_ISOS = {
  usa: ["840"],
  china: ["156"],
  venezuela: ["862"],
  latam: ["858"], // Uruguay
  ue: [
    "250", "276", "724", "380", "616", "528", "752", "208", "246", "300", 
    "372", "620", "040", "056", "203", "348", "642", "100", "191", "233", "428"
  ]
};

const getCountryId = (iso) => {
  for (const [id, isos] of Object.entries(TARGET_ISOS)) {
    if (isos.includes(iso)) return id;
  }
  return null;
};

const markers = [
  { markerOffset: -35, name: "Estados Unidos", coordinates: [-98, 39], id: "usa" },
  { markerOffset: -35, name: "Unión Europea", coordinates: [15, 51], id: "ue" },
  { markerOffset: -35, name: "China", coordinates: [104, 35], id: "china" },
  { markerOffset: 15, name: "Venezuela", coordinates: [-66, 8], id: "venezuela" },
  { markerOffset: 15, name: "Uruguay / LatAm", coordinates: [-56, -32], id: "latam" }
];

export default function Navigation({ active, onSelect }) {
  const getCategoryColor = (id) => CATEGORIES.find(c => c.id === id)?.color || '#333';

  const [rotation, setRotation] = useState([-10, -20, 0]); // Center on Atlantic
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setHasDragged(false);
    // Support both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX, y: clientY });
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    // Optimizacion: Evitar actualizaciones excesivas reduciendo la frecuencia
    // Este requestAnimationFrame previene parte del lag en SVG
    requestAnimationFrame(() => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - dragStart.x;
      const dy = clientY - dragStart.y;
      
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        setHasDragged(true);
      }
      
      setRotation((r) => [r[0] + dx * 0.4, Math.max(-60, Math.min(60, r[1] - dy * 0.4)), r[2]]);
      setDragStart({ x: clientX, y: clientY });
    });
  }, [isDragging, dragStart]);

  const handleMouseUp = () => setIsDragging(false);

  const isVisible = (coordinates) => {
    let centerLon = -rotation[0] % 360;
    if (centerLon > 180) centerLon -= 360;
    if (centerLon < -180) centerLon += 360;
    
    let lonDiff = Math.abs(coordinates[0] - centerLon);
    if (lonDiff > 180) lonDiff = 360 - lonDiff;
    
    return lonDiff < 85; 
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '1rem' 
    }}>

        {/* Mapa Interactivo (Globo 3D Responsivo y Optimizado) */}
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            aspectRatio: '1 / 1',
            margin: '0 auto',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            cursor: isDragging ? 'grabbing' : 'grab',
            touchAction: 'none',
            // Añadir hardware acceleration para mejorar performance
            transform: 'translateZ(0)'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <ComposableMap 
            projection="geoOrthographic" 
            projectionConfig={{ scale: 240, rotate: rotation }} 
            style={{ width: "100%", height: "100%", pointerEvents: 'none' }} 
          >
            {/* Esfera con el fondo del océano con efecto holográfico brillante */}
            <Sphere stroke="rgba(255,255,255,0.3)" strokeWidth={2} fill="rgba(255,255,255,0.05)" />
            <Graticule stroke="rgba(255,255,255,0.15)" strokeWidth={0.5} />

            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryId = getCountryId(geo.id);
                  const isStudied = !!countryId;
                  const isActive = countryId && active === countryId;
                  const color = countryId ? getCategoryColor(countryId) : 'rgba(255,255,255,0.1)';

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isActive ? color : isStudied ? `${color}40` : 'rgba(255,255,255,0.08)'}
                      stroke={isStudied ? color : 'rgba(255,255,255,0.3)'}
                      strokeWidth={isStudied ? 1.5 : 0.5}
                      onClick={() => !hasDragged && isStudied && onSelect(countryId)}
                      onTouchEnd={(e) => {
                        if (!hasDragged && isStudied) {
                          e.preventDefault(); // Evita doble click fantasma
                          onSelect(countryId);
                        }
                      }}
                      style={{
                        default: { outline: "none", cursor: isStudied ? 'pointer' : 'default', pointerEvents: 'auto', transition: 'all 0.3s' },
                        hover: { 
                          fill: isStudied ? color : 'rgba(255,255,255,0.2)', 
                          outline: "none", 
                          cursor: isStudied ? 'pointer' : 'default',
                          opacity: isStudied ? 0.9 : 1,
                          pointerEvents: 'auto',
                          transition: 'all 0.3s'
                        },
                        pressed: { outline: "none" }
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {markers.map(({ name, coordinates, markerOffset, id }) => {
              if (!isVisible(coordinates)) return null;

              const color = getCategoryColor(id);
              const isActive = active === id;
              return (
                <Marker 
                  key={name} 
                  coordinates={coordinates} 
                  onClick={() => !hasDragged && onSelect(id)} 
                  onTouchEnd={(e) => {
                    if (!hasDragged) {
                      e.preventDefault();
                      onSelect(id);
                    }
                  }}
                  style={{ cursor: 'pointer', pointerEvents: 'auto' }} 
                >
                  <g transform="translate(-12, -24)" style={{ filter: isActive ? `drop-shadow(0 4px 12px ${color})` : 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}>
                    <path
                      d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"
                      fill={isActive ? color : "#1D1133"}
                      stroke={color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transition: 'all 0.3s' }}
                    />
                    <circle cx="12" cy="10" r="3" fill={isActive ? "#0A0614" : color} />
                  </g>
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{
                      fontFamily: "Outfit",
                      fontSize: isActive ? "18px" : "15px",
                      fontWeight: isActive ? 900 : 800,
                      fill: isActive ? color : "#F8FAFC",
                      transition: 'all 0.3s',
                      pointerEvents: 'none',
                      textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.8)'
                    }}
                  >
                    {name}
                  </text>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '-1.5rem',
          marginBottom: '1rem',
          opacity: 0.6,
          fontSize: '0.85rem',
          fontFamily: 'Outfit, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          animation: 'pulse 3s infinite ease-in-out'
        }}>
          <span><MousePointerClick size={16} /> Arrastra para girar el globo y haz clic en las regiones</span>
        </div>
      </div>
  );
}
