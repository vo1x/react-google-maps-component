import axios from 'axios';

const useOSM = () => {
  const getBoundary = async (osmID: number) => {
    try {
      const url = `https://global.mapit.mysociety.org/area/${osmID}.geojson`;
      const { data } = await axios.get(url);

      if (!data || !data.coordinates || data.coordinates.length === 0) {
        throw new Error('Invalid GeoJSON data received');
      }

      const boundaryCords = data.coordinates[0];
      const convertedCoordinates = boundaryCords.map(
        (coords: [number, number]) => ({
          lat: coords[1],
          lng: coords[0],
        }),
      );

      return { coordinates: convertedCoordinates };
    } catch (error) {
      console.error('Error fetching boundary:', error);
      return { coordinates: [] };
    }
  };

  return { getBoundary };
};

export default useOSM;
