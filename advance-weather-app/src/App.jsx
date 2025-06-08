
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";
import Page from './Page'

function App() {
  return (
    <LocationProvider>
      <FavouriteProvider>
        <WeatherProvider>
        <Page/>
        </WeatherProvider>
      </FavouriteProvider>
    </LocationProvider>
  );
}

export default App;
