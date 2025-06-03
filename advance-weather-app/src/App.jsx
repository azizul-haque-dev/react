import Header from "./Components/header/Header";
import WeatherBoard from "./Components/weather/WeatherBoard";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        {/* Begin Wheather */}
        <section className="mt-20">
          <WeatherBoard />
        </section>
        {/* End Wheather */}
      </main>
    </div>
  );
}

export default App;
