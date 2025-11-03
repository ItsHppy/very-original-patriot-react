import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Исправляем проблему с иконками маркеров в Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface PartisanZone {
  id: string;
  name: string;
  partisans: number;
  area: string;
  coordinates: [number, number]; // [lat, lng]
  description?: string;
}

interface PartisanMapProps {
  zones: PartisanZone[];
  selectedZone: string | null;
  onZoneSelect: (zoneId: string | null) => void;
  className?: string;
}

const PartisanMap: React.FC<PartisanMapProps> = ({ 
  zones, 
  selectedZone, 
  onZoneSelect, 
  className = "" 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    try {
      // Создаем карту
      const map = L.map(mapRef.current).setView([53.9, 27.6], 7); // Центр Беларуси

      // Добавляем тайловый слой OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      mapInstanceRef.current = map;

      // Создаем кастомную иконку для партизанских зон
      const partisanIcon = L.divIcon({
        className: 'partisan-marker',
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background: hsl(var(--primary));
            border: 2px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
            cursor: pointer;
          ">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Добавляем маркеры для каждой зоны
      zones.forEach(zone => {
        const marker = L.marker(zone.coordinates, { icon: partisanIcon })
          .addTo(map)
          .bindPopup(`
            <div style="min-width: 200px; font-family: system-ui;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1a1a1a;">
                ${zone.name}
              </h3>
              <p style="margin: 4px 0; color: #666;">
                <strong>Партизан:</strong> ${zone.partisans.toLocaleString()}
              </p>
              <p style="margin: 4px 0; color: #666;">
                <strong>Территория:</strong> ${zone.area}
              </p>
              ${zone.description ? `<p style="margin: 8px 0 4px 0; color: #666; font-size: 12px;">${zone.description}</p>` : ''}
            </div>
          `)
          .on('click', () => {
            onZoneSelect(selectedZone === zone.id ? null : zone.id);
          });

        markersRef.current[zone.id] = marker;
      });

      // Добавляем стили для анимации пульса
      const style = document.createElement('style');
      style.id = 'partisan-map-styles';
      style.textContent = `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `;
      if (!document.getElementById('partisan-map-styles')) {
        document.head.appendChild(style);
      }

      setMapLoaded(true);
    } catch (error) {
      console.error('Ошибка при инициализации карты:', error);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      markersRef.current = {};
    };
  }, [zones]);

  // Обновляем выделение маркеров при изменении selectedZone
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([zoneId, marker]) => {
      const isSelected = zoneId === selectedZone;
      const markerElement = marker.getElement();
      
      if (markerElement) {
        const markerDiv = markerElement.querySelector('div');
        if (markerDiv) {
          markerDiv.style.transform = isSelected ? 'scale(1.3)' : 'scale(1)';
          markerDiv.style.background = isSelected ? 'hsl(var(--accent))' : 'hsl(var(--primary))';
          markerDiv.style.zIndex = isSelected ? '1000' : '100';
        }
      }
    });
  }, [selectedZone]);

  if (!mapLoaded) {
    return (
      <div className={`w-full h-[500px] rounded-lg border border-border 
                     flex items-center justify-center bg-muted/20 ${className}`}>
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Загрузка интерактивной карты...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-[500px] rounded-lg overflow-hidden border border-border ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default PartisanMap;