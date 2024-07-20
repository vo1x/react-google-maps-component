import MapEmbed from './components/MapEmbed';
import { APIProvider } from '@vis.gl/react-google-maps';

const API_KEY = import.meta.env.VITE_GMAPS_API_KEY;
function App() {
  return (
    <APIProvider apiKey={API_KEY}>
      <div className="flex h-screen w-full items-center justify-center bg-[#111]">
        <MapEmbed locationCoordinates={{ lat: 43.6532, lng: -79.3832 }} />
      </div>
    </APIProvider>
    //43.6532, 79.3832 => coordinates for toronto
  );
}

export default App;
