import React, { useEffect, useState } from "react";
import Search from "./Search";
import "./Style.css";

const Weather = () => {
  const [search, setSearch] = useState("dhaka");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather(value) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c5615ec272e1c26052822b022bd70274`
      );
      const data = await res.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
        setSearch("");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(date);
  }

  const time = new Date();
  const formattedDate = formatDate(time);

  useEffect(() => {
    fetchWeather(search);
  }, []); // Ensure fetchWeather runs only once on mount

  const handleSearch = () => {
    fetchWeather(search);
  };
  if (loading) <div> Loading....</div>;

  return (
    <div className="main">
      <div className="weather-container">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          weatherData && (
            <div>
              <h3 className="weather-header">
                {weatherData?.name}, <span> {weatherData?.sys.country}</span>
              </h3>
              <p className="weather-description">
                {weatherData.weather[0].description}
              </p>
              <p className="weather-temp">
                {Math.round(weatherData.main.temp - 273.15)}°C
              </p>
              <p className="weather-humidity">
                Humidity: {weatherData.main.humidity}%
              </p>
              <p className="weather-date">{formattedDate}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Weather;
