import { useEffect, useRef, useState } from 'react';

interface PartisanZone {
  id: string;
  name: string;
  partisans: number;
  area: string;
  coordinates: [number, number];
  description?: string;
}

interface WebMapProps {
  zones: PartisanZone[];
  selectedZone: string | null;
  onZoneSelect: (zoneId: string | null) => void;
  className?: string;
}

const WebMap: React.FC<WebMapProps> = ({ 
  zones, 
  selectedZone, 
  onZoneSelect, 
  className = "" 
}) => {
  const [mapError, setMapError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Создаем HTML для встроенной карты с OpenStreetMap
    const mapHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Партизанские зоны БССР</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <style>
          body { margin: 0; padding: 0; }
          #map { height: 100vh; width: 100%; }
          .partisan-marker {
            background: #3b82f6;
            border: 2px solid white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
        <script>
          const zones = ${JSON.stringify(zones)};
          
          const map = L.map('map').setView([53.9, 27.6], 7);
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);
          
          zones.forEach(zone => {
            const marker = L.marker(zone.coordinates).addTo(map);
            
            marker.bindPopup(\`
              <div style="min-width: 200px; font-family: system-ui;">
                <h3 style="margin: 0 0 8px 0; font-weight: bold;">\${zone.name}</h3>
                <p style="margin: 4px 0;"><strong>Партизан:</strong> \${zone.partisans.toLocaleString()}</p>
                <p style="margin: 4px 0;"><strong>Территория:</strong> \${zone.area}</p>
                \${zone.description ? \`<p style="margin: 8px 0 4px 0; font-size: 12px;">\${zone.description}</p>\` : ''}
              </div>
            \`);
            
            marker.on('click', () => {
              window.parent.postMessage({
                type: 'zoneSelected',
                zoneId: zone.id
              }, '*');
            });
          });
        </script>
      </body>
      </html>
    `;

    // Создаем blob URL для iframe
    const blob = new Blob([mapHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    if (iframeRef.current) {
      iframeRef.current.src = url;
    }

    // Слушаем сообщения от iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'zoneSelected') {
        onZoneSelect(event.data.zoneId);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      URL.revokeObjectURL(url);
      window.removeEventListener('message', handleMessage);
    };
  }, [zones, onZoneSelect]);

  // Fallback карта если iframe не работает
  const FallbackMap = () => (
    <div className="w-full h-[500px] bg-slate-100 rounded-lg border border-border relative overflow-hidden">
      {/* Простая SVG карта Беларуси */}
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#e2e8f0" />
        
        {/* Простая схема Беларуси */}
        <path 
          d="M50 80 L350 80 L350 220 L50 220 Z" 
          fill="#f1f5f9" 
          stroke="#94a3b8" 
          strokeWidth="2"
        />
        
        {/* Города-маркеры */}
        {zones.map((zone, index) => {
          const x = 80 + (index % 3) * 120;
          const y = 120 + Math.floor(index / 3) * 80;
          
          return (
            <g key={zone.id}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#3b82f6"
                stroke="white"
                strokeWidth="2"
                className="cursor-pointer hover:fill-blue-600"
                onClick={() => onZoneSelect(zone.id)}
              >
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={x}
                y={y + 25}
                textAnchor="middle"
                fontSize="10"
                fill="#475569"
                className="pointer-events-none"
              >
                {zone.name.split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>
      
      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded text-xs text-gray-600">
        Схематичная карта БССР
      </div>
    </div>
  );

  if (mapError) {
    return <FallbackMap />;
  }

  return (
    <div className={`w-full h-[500px] rounded-lg overflow-hidden ${className}`}>
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        onError={() => setMapError('Ошибка загрузки карты')}
        title="Интерактивная карта партизанских зон БССР"
      />
    </div>
  );
};

export default WebMap;