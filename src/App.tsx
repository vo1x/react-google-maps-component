import MapEmbed from './components/MapEmbed';
import { APIProvider } from '@vis.gl/react-google-maps';

const API_KEY = import.meta.env.VITE_GMAPS_API_KEY;
function App() {

  const defaultOsmID = 324211;

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="flex h-screen w-full items-center justify-center bg-[#111]">
        {/* osmId can be found here: https://nominatim.openstreetmap.org/ui/search.html?q=toronto+ontario /> */}
        <MapEmbed osmID={defaultOsmID} />
      </div>
    </APIProvider>
    //43.6532, 79.3832 => coordinates for toronto
  );
}

export default App;
