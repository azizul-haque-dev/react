import Header from "./Components/header/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";
import FavouriteProvider from "./provider/FavouriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <FavouriteProvider>
        <WeatherProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              {/* Begin Weather */}
              <section className="mt-20">
                <WeatherBoard />
              </section>
              {/* End Weather */}
            </main>
          </div>
        </WeatherProvider>
      </FavouriteProvider>
    </LocationProvider>
  );
}

export default App;
