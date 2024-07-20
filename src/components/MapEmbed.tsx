import { useEffect, useState } from 'react';
import { Map } from '@vis.gl/react-google-maps';
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
        className="h-[400px] w-[900px]"
      >
        {polygonPath && (
          <Polygon
            paths={polygonPath}
            strokeColor={'#FF0000'}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={'#FF0000'}
            fillOpacity={0.35}
          />
        )}
      </Map>
    </div>
  );
};

export default MapEmbed;
