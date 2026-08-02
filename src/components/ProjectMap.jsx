import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTheme } from '../context/ThemeContext';
import { mapLocations } from '../data/portfolioData';
import { Globe, MapPin, ExternalLink, Compass } from 'lucide-react';
import EditorialReveal from './EditorialReveal';

const createCustomIcon = (isDark) => {
  const accentColor = isDark ? '#B8794F' : '#94532B'; // Editorial Terracotta colors
  const bgColor = isDark ? '#211E26' : '#FFFFFF';

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
        <div style="
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid ${accentColor};
          opacity: 0.4;
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        "></div>
        <div style="
          width: 24px;
          height: 24px;
          background-color: ${bgColor};
          border: 2px solid ${accentColor};
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background-color: ${accentColor};
            border-radius: 50%;
          "></div>
        </div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
};

export default function ProjectMap() {
  const { isDark } = useTheme();

  const darkTileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  const lightTileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
  const tileAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

  const markerIcon = createCustomIcon(isDark);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.querySelector(`#${sectionId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="map" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">07 // GEOGRAPHIC FOOTPRINT</span>
        <EditorialReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-textPrimary">
            Spatial Distribution & Hubs
          </h2>
        </EditorialReveal>
        <p className="text-sm text-textSecondary mt-2 max-w-lg font-sans">
          A physical breakdown of university studies, freelance operations, and remote analysis hubs.
        </p>
      </div>

      {/* Map Content Frame */}
      <div className="border border-borderSubtle bg-bgSurface/40 p-4 shadow-xl">
        <div className="h-[420px] w-full rounded border border-borderSubtle overflow-hidden relative z-0">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              key={isDark ? 'dark' : 'light'}
              url={isDark ? darkTileUrl : lightTileUrl}
              attribution={tileAttribution}
            />

            {mapLocations.map((loc) => (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={markerIcon}
              >
                <Popup>
                  <div className="p-2 space-y-2 min-w-[200px] font-sans">
                    <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-textPrimary">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{loc.name}</span>
                    </div>

                    <p className="text-xs font-mono font-semibold text-accent">
                      {loc.role}
                    </p>

                    <p className="text-xs text-textSecondary leading-relaxed">
                      {loc.details}
                    </p>

                    <a
                      href={`#${loc.linkSection}`}
                      onClick={(e) => scrollToSection(e, loc.linkSection)}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-accent hover:underline pt-1"
                    >
                      <span>Jump to section</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Location list index footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 mt-6 border-t border-borderSubtle">
          {mapLocations.map((loc) => (
            <div
              key={loc.id}
              className="flex items-start gap-3"
            >
              <div className="p-1.5 rounded bg-accent-muted text-accent shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-serif font-bold text-textPrimary block">
                  {loc.name}
                </span>
                <span className="text-[11px] font-mono text-accent block mt-0.5 uppercase tracking-wide">
                  {loc.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
