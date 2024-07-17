import { useEffect, useState } from 'react';
import { Map } from '@vis.gl/react-google-maps';
import './MapEmbed.css';
import { Polygon } from './Polygon';
import useOSM from '../hooks/useOSM';

interface LocationCoordinates {
  lat: number;
  lng: number;
}

interface MapEmbedProps {
  locationCoordinates: LocationCoordinates;
}

const MapEmbed = ({ locationCoordinates }: MapEmbedProps) => {
  const { getBoundary } = useOSM();
  const [polygonPath, setPolygonPath] = useState<LocationCoordinates[]>([]);

  useEffect(() => {
    const fetchBoundary = async () => {
      try {
        const boundaryData = await getBoundary(324211); // 324211 => OSM ID for Toronto
        setPolygonPath(boundaryData.coordinates);
      } catch (error) {
        console.error('Error setting polygon path:', error);
      }
    };

    fetchBoundary();
  }, []);

  return (
    <div>
      <Map
        defaultCenter={locationCoordinates}
        defaultZoom={10}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        className="map"
      >
        <Polygon paths={polygonPath} />
      </Map>
    </div>
  );
};

export default MapEmbed;
