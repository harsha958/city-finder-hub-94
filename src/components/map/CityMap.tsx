import React, { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Bus, Hospital, Home } from 'lucide-react';

interface TomTomTokenInputProps {
  onTokenSet: (token: string) => void;
}

const TomTomTokenInput: React.FC<TomTomTokenInputProps> = ({ onTokenSet }) => {
  const [token, setToken] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      onTokenSet(token.trim());
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold">Interactive City Map</h3>
            <p className="text-sm text-muted-foreground">
              Enter your TomTom API key to view city services and locations
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your TomTom API Key..."
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="font-mono text-sm"
            />
            <Button type="submit" className="w-full">
              Load Map
            </Button>
          </form>
          
          <div className="text-xs text-muted-foreground text-center">
            Get your API key at{' '}
            <a
              href="https://developer.tomtom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              developer.tomtom.com
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CityMapProps {
  tomtomApiKey?: string;
}

const CityMap: React.FC<CityMapProps> = ({ tomtomApiKey }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<tt.Map | null>(null);
  const [apiKey, setApiKey] = useState(tomtomApiKey || '3IqeQp9jzT85x4sXKm9UPACTYTU1Cv2w');

  // Sample data for Hyderabad city services
  const cityServices = [
    {
      id: 1,
      name: "Hitec City Metro Station",
      type: "transport",
      coordinates: [78.3947, 17.4485],
      description: "Major metro interchange connecting Cyberabad"
    },
    {
      id: 2,
      name: "Apollo Hospital",
      type: "healthcare",
      coordinates: [78.4867, 17.4126],
      description: "24/7 emergency and specialty medical services"
    },
    {
      id: 3,
      name: "GHMC Zonal Office Kukatpally",
      type: "housing",
      coordinates: [78.4138, 17.4851],
      description: "Municipal services and housing approvals"
    },
    {
      id: 4,
      name: "Secunderabad Railway Station",
      type: "transport",
      coordinates: [78.4983, 17.4340],
      description: "Major railway terminal with intercity connections"
    },
    {
      id: 5,
      name: "Gandhi Hospital",
      type: "healthcare",
      coordinates: [78.4953, 17.4417],
      description: "Government hospital with free medical services"
    },
    {
      id: 6,
      name: "HMDA Office",
      type: "housing",
      coordinates: [78.4747, 17.4240],
      description: "Hyderabad Metropolitan Development Authority"
    },
    {
      id: 7,
      name: "Ameerpet Metro Station",
      type: "transport",
      coordinates: [78.4481, 17.4378],
      description: "Central metro hub with multiple line connections"
    },
    {
      id: 8,
      name: "Osmania General Hospital",
      type: "healthcare",
      coordinates: [78.4745, 17.3703],
      description: "Largest government hospital in Telangana"
    },
    {
      id: 9,
      name: "TSRTC Bus Depot Mehdipatnam",
      type: "transport",
      coordinates: [78.4278, 17.3973],
      description: "Major bus depot for city and intercity buses"
    },
    {
      id: 10,
      name: "NIMS Hospital",
      type: "healthcare",
      coordinates: [78.4089, 17.4321],
      description: "Premier medical institute and hospital"
    }
  ];

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;

    map.current = tt.map({
      key: apiKey,
      container: mapContainer.current,
      center: [78.4747, 17.4240], // Hyderabad coordinates
      zoom: 12,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: false
      }
    });

    // Add navigation controls
    map.current.addControl(new tt.NavigationControl());
    map.current.addControl(new tt.FullscreenControl());

    // Add service markers
    cityServices.forEach((service) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      markerElement.innerHTML = getMarkerIcon(service.type);
      markerElement.style.width = '40px';
      markerElement.style.height = '40px';
      markerElement.style.borderRadius = '50%';
      markerElement.style.backgroundColor = getMarkerColor(service.type);
      markerElement.style.display = 'flex';
      markerElement.style.alignItems = 'center';
      markerElement.style.justifyContent = 'center';
      markerElement.style.cursor = 'pointer';
      markerElement.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
      markerElement.style.border = '2px solid white';

      const popup = new tt.Popup({ offset: 30 }).setHTML(
        `<div style="padding: 8px; min-width: 200px;">
          <h3 style="font-weight: 600; font-size: 14px; margin: 0 0 4px 0;">${service.name}</h3>
          <p style="font-size: 12px; color: #666; margin: 0; line-height: 1.4;">${service.description}</p>
        </div>`
      );

      new tt.Marker({ element: markerElement })
        .setLngLat(service.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [apiKey]);

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'transport':
        return '<svg viewBox="0 0 24 24" fill="white" style="width: 20px; height: 20px;"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5S7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/></svg>';
      case 'healthcare':
        return '<svg viewBox="0 0 24 24" fill="white" style="width: 20px; height: 20px;"><path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/><path d="M19 8H17V6C17 5.45 16.55 5 16 5H8C7.45 5 7 5.45 7 6V8H5C4.45 8 4 8.45 4 9V18C4 18.55 4.45 19 5 19H19C19.55 19 20 18.55 20 18V9C20 8.45 19.55 8 19 8ZM15 11V13H13V15H11V13H9V11H11V9H13V11H15Z"/></svg>';
      case 'housing':
        return '<svg viewBox="0 0 24 24" fill="white" style="width: 20px; height: 20px;"><path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/></svg>';
      default:
        return '<svg viewBox="0 0 24 24" fill="white" style="width: 20px; height: 20px;"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z"/></svg>';
    }
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'transport':
        return '#3b82f6'; // Blue
      case 'healthcare':
        return '#ef4444'; // Red
      case 'housing':
        return '#10b981'; // Green
      default:
        return '#6b7280'; // Gray
    }
  };

  if (!apiKey) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center bg-muted/30 rounded-lg">
        <TomTomTokenInput onTokenSet={setApiKey} />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-card">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Legend */}
      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur p-4 rounded-lg shadow-card max-w-xs">
        <h3 className="font-semibold text-sm mb-3">City Services</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span className="text-xs">Public Transport</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-xs">Healthcare</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-xs">Housing Services</span>
          </div>
        </div>
      </div>

      {/* TomTom Attribution */}
      <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-xs">
        © TomTom
      </div>
    </div>
  );
};

export default CityMap;