import axios from 'axios';

const useOSM = () => {
  const getBoundary = async (osmID: number) => {
    try {
      const url = `https://nominatim.openstreetmap.org/details.php?class=boundary&polygon_geojson=1&format=json&osmtype=R&osmid=${osmID}`;
      const { data } = await axios.get(url);
      console.log(data);
      if (
        !data?.geometry.coordinates ||
        data.geometry.coordinates.length === 0
      ) {
        throw new Error('Invalid GeoJSON data received');
      }

      const boundaryCords = data.geometry.coordinates[0];
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
