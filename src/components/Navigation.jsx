import { useState, useCallback, useRef } from "react";
import { ComposableMap, Geographies, Geography, Marker, Sphere, Graticule } from "react-simple-maps";
import { CATEGORIES } from '../data/timelineData';
import { MousePointerClick, ZoomIn, ZoomOut } from 'lucide-react';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Zoom limits
const MIN_SCALE = 200;
const MAX_SCALE = 400;
const ZOOM_STEP = 40;

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

  const [rotation, setRotation] = useState([-10, -20, 0]);
  const [scale, setScale] = useState(240);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);
  const lastPinchDist = useRef(null);

  // Pinch-to-zoom: calculate distance between two touch points
  const getTouchDist = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      // Pinch start
      lastPinchDist.current = getTouchDist(e.touches);
      setIsDragging(false);
      return;
    }
    // Single finger drag
    setIsDragging(true);
    setHasDragged(false);
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length === 2 && lastPinchDist.current !== null) {
      // Pinch zoom
      const newDist = getTouchDist(e.touches);
      const delta = newDist - lastPinchDist.current;
      if (Math.abs(delta) > 3) {
        setScale(s => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s + delta * 0.5)));
        lastPinchDist.current = newDist;
      }
      return;
    }
    if (!isDragging || !e.touches.length) return;
    requestAnimationFrame(() => {
      const clientX = e.touches[0].clientX;
      const clientY = e.touches[0].clientY;
      const dx = clientX - dragStart.x;
      const dy = clientY - dragStart.y;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) setHasDragged(true);
      setRotation((r) => [r[0] + dx * 0.4, Math.max(-60, Math.min(60, r[1] - dy * 0.4)), r[2]]);
      setDragStart({ x: clientX, y: clientY });
    });
  }, [isDragging, dragStart]);

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) lastPinchDist.current = null;
    if (e.touches.length === 0) setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setHasDragged(false);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    requestAnimationFrame(() => {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) setHasDragged(true);
      setRotation((r) => [r[0] + dx * 0.4, Math.max(-60, Math.min(60, r[1] - dy * 0.4)), r[2]]);
      setDragStart({ x: e.clientX, y: e.clientY });
    });
  }, [isDragging, dragStart]);

  const handleMouseUp = () => setIsDragging(false);

  // Mouse wheel zoom (desktop)
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setScale(s => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s - e.deltaY * 0.3)));
  }, []);

  const zoomIn = () => setScale(s => Math.min(MAX_SCALE, s + ZOOM_STEP));
  const zoomOut = () => setScale(s => Math.max(MIN_SCALE, s - ZOOM_STEP));

  const isVisible = (coordinates) => {
    let centerLon = -rotation[0] % 360;
    if (centerLon > 180) centerLon -= 360;
    if (centerLon < -180) centerLon += 360;
    let lonDiff = Math.abs(coordinates[0] - centerLon);
    if (lonDiff > 180) lonDiff = 360 - lonDiff;
    return lonDiff < 85; 
  };

  const zoomPct = Math.round(((scale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE)) * 100);

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
            transform: 'translateZ(0)',
            position: 'relative'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <ComposableMap 
            projection="geoOrthographic" 
            projectionConfig={{ scale, rotate: rotation }} 
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
                          e.preventDefault();
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

          {/* Zoom Controls */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 10
          }}>
            <button
              onClick={(e) => { e.stopPropagation(); zoomIn(); }}
              onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); zoomIn(); }}
              disabled={scale >= MAX_SCALE}
              style={{
                width: '36px', height: '36px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(26, 29, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                color: scale >= MAX_SCALE ? 'rgba(255,255,255,0.2)' : '#E5E7EB',
                cursor: scale >= MAX_SCALE ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
                pointerEvents: 'auto'
              }}
              aria-label="Acercar"
            >
              <ZoomIn size={18} />
            </button>
            <div style={{
              textAlign: 'center',
              fontSize: '0.6rem',
              fontFamily: 'Outfit, sans-serif',
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 700
            }}>
              {zoomPct}%
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); zoomOut(); }}
              onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); zoomOut(); }}
              disabled={scale <= MIN_SCALE}
              style={{
                width: '36px', height: '36px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(26, 29, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                color: scale <= MIN_SCALE ? 'rgba(255,255,255,0.2)' : '#E5E7EB',
                cursor: scale <= MIN_SCALE ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
                pointerEvents: 'auto'
              }}
              aria-label="Alejar"
            >
              <ZoomOut size={18} />
            </button>
          </div>
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
          <span><MousePointerClick size={16} /> Arrastra, pellizca para zoom y haz clic en las regiones</span>
        </div>
      </div>
  );
}
