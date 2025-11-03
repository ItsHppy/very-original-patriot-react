import { useEffect, useRef } from 'react';

interface PartisanZone {
  id: string;
  name: string;
  partisans: number;
  area: string;
  coordinates: [number, number];
  description?: string;
}

interface SimpleLeafletMapProps {
  zones: PartisanZone[];
  selectedZone: string | null;
  onZoneSelect: (zoneId: string | null) => void;
  className?: string;
}

const SimpleLeafletMap: React.FC<SimpleLeafletMapProps> = ({ 
  zones, 
  selectedZone, 
  onZoneSelect, 
  className = "" 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Динамически загружаем Leaflet из CDN
    const loadLeaflet = () => {
      // Проверяем, не загружен ли уже Leaflet
      if ((window as any).L) {
        initMap();
        return;
      }

      // Добавляем CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Добавляем JS
      if (!document.querySelector('script[src*="leaflet"]')) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = initMap;
        document.head.appendChild(script);
      }
    };

    const initMap = () => {
      if (!mapRef.current || !(window as any).L) return;

      try {
        const L = (window as any).L;
        
        // Создаем карту
        const map = L.map(mapRef.current).setView([53.9, 27.6], 7);
        mapInstanceRef.current = map;

        // Добавляем тайлы
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Добавляем маркеры
        zones.forEach(zone => {
          const marker = L.marker(zone.coordinates).addTo(map);
          
          marker.bindPopup(`
            <div style="min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold;">${zone.name}</h3>
              <p style="margin: 4px 0;"><strong>Партизан:</strong> ${zone.partisans.toLocaleString()}</p>
              <p style="margin: 4px 0;"><strong>Территория:</strong> ${zone.area}</p>
              ${zone.description ? `<p style="margin: 8px 0 4px 0; font-size: 12px;">${zone.description}</p>` : ''}
            </div>
          `);

          marker.on('click', () => {
            onZoneSelect(zone.id);
          });
        });

      } catch (error) {
        console.error('Ошибка инициализации карты:', error);
      }
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          console.log('Ошибка при удалении карты:', e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, [zones, onZoneSelect]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-[500px] rounded-lg overflow-hidden border border-border ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default SimpleLeafletMap;