import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTheme } from '../context/ThemeContext';
import { mapLocations } from '../data/portfolioData';
import { Globe, MapPin, ExternalLink, Compass } from 'lucide-react';

// Custom DOM marker with pulsing ring
const createCustomIcon = (isDark) => {
  const accentColor = isDark ? '#38BDF8' : '#0284C7';
  const bgColor = isDark ? '#141A24' : '#FFFFFF';

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="position: relative; width: 36px; height: 36px; display: flex; items-center; justify-content: center;">
        <!-- Pulsing Ring -->
        <div style="
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid ${accentColor};
          opacity: 0.6;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        "></div>
        <!-- Marker Pin -->
        <div style="
          width: 28px;
          height: 28px;
          background-color: ${bgColor};
          border: 2px solid ${accentColor};
          border-radius: 50%;
          box-shadow: 0 4px 15px ${accentColor}60;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10;
        ">
          <div style="
            width: 10px;
            height: 10px;
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
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Eyebrow Label & Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>06 // GEOSPATIAL DISTRIBUTION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-textPrimary tracking-tight">
            Geographic Footprint & Work Locations
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          KOLKATA // MANGALORE // REMOTE HUB
        </p>
      </div>

      {/* Map Card Wrapper */}
      <div className="bi-card rounded-2xl p-4 sm:p-6 overflow-hidden">
        <div className="h-[420px] w-full rounded-xl overflow-hidden relative z-0">
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
                  <div className="p-1 space-y-2 min-w-[200px]">
                    <div className="flex items-center gap-1.5 font-heading font-bold text-sm text-textPrimary">
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
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:underline pt-1 focus-visible:ring-2 focus-visible:ring-accent"
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

        {/* Location Chips Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 mt-4 border-t border-borderSubtle">
          {mapLocations.map((loc) => (
            <div
              key={loc.id}
              className="p-3 rounded-lg bg-bgPrimary/60 border border-borderSubtle flex items-start gap-2.5"
            >
              <div className="p-1.5 rounded bg-accent/10 text-accent shrink-0 mt-0.5">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-heading font-bold text-textPrimary block">
                  {loc.name}
                </span>
                <span className="text-[11px] font-mono text-accent block">
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
