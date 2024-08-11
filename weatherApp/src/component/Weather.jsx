import React, { useEffect, useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeather(value) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${value}&appid=c5615ec272e1c26052822b022bd70274`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  console.log(weatherData);

  async function handleSearch() {
    fetchWeather(search);
    useEffect(() => {
      fetchWeather("dhaka");
    }, []);
  }
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default Weather;
