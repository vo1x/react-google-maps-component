import axios from 'axios';

const useOSM = () => {

  const convertCoordinates = (coordinates: [number, number]): { lat: number, lng: number } => ({
    lat: coordinates[1],
    lng: coordinates[0],
  })

  const getOSMDetails = async (osmID: number) => {
    try {
      const url = `https://nominatim.openstreetmap.org/details.php?class=boundary&polygon_geojson=1&format=json&osmtype=R&osmid=${osmID}`;
      const { data } = await axios.get(url);
      if (
        !data?.geometry.coordinates ||
        data.geometry.coordinates.length === 0
      ) {
        throw new Error('Invalid GeoJSON data received');
      }

      const rawCenter = data.centroid.coordinates;
      const center = convertCoordinates(rawCenter);

      const rawGeometry = data.geometry.coordinates[0];
      const geometry = rawGeometry.map(convertCoordinates);

      return { center, geometry };
    } catch (error) {
      console.error('Error fetching boundary:', error);
      return { center: { lat: 0, lng: 0 }, geometry: [] };
    }
  };

  return { getOSMDetails };
};


export default useOSM;
