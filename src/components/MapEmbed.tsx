import { useEffect, useState } from 'react';
import { Map } from '@vis.gl/react-google-maps';
import { Polygon } from './Polygon';
import useOSM from '../hooks/useOSM';

interface LocationCoordinates {
  lat: number;
  lng: number;
}

interface MapEmbedProps {
  osmID: number;
}

const MapEmbed = ({ osmID }: MapEmbedProps) => {
  const { getOSMDetails } = useOSM();
  const [center, setCenter] = useState<LocationCoordinates>();
  const [geometry, setGeometry] = useState<LocationCoordinates[]>([]);

  useEffect(() => {
    const fetchBoundary = async () => {
      try {
        const osmData = await getOSMDetails(osmID);
        setGeometry(osmData.geometry);
        setCenter(osmData.center);
      } catch (error) {
        console.error('Error setting polygon path:', error);
      }
    };

    fetchBoundary();
  }, []);

  return (
    <div>
      {geometry?.length && <Map
        defaultCenter={center}
        defaultZoom={10}
        gestureHandling={'cooperative'}
        disableDefaultUI={true}
        className="h-[400px] w-[900px]"
      >

        <Polygon
          paths={geometry}
          strokeColor={'#0064d1'}
          strokeOpacity={0.5}
          strokeWeight={2}
          fillColor={'#f38924'}
          fillOpacity={0.25}
        />
        )
      </Map>
      }
      {!center && 'Loading...'}
    </div>
  );
};

export default MapEmbed;
