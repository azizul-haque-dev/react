import { useState, useEffect } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: ""
  });

  const [loading, setLoading] = useState({
    state: false,
    message: ""
  });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        state: true,
        message: "Getting weather data..."
      });

      const apiKey = import.meta.env.VITE_WEATHER_API-KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}&units=metric`
      );

      if (!res.ok) {
        const errorMessage = `Fetching weather data failed: ${res.status}`;
        throw new Error(errorMessage);
      }

      const { current } = await res.json();

      const updateWeatherData = {
        ...weatherData,
        climate: current?.weather?.[0]?.main,
        temperature: current?.temp,
        maxTemperature: current?.temp, 
        minTemperature: current?.temp,
        humidity: current?.humidity,
        cloudPercentage: current?.clouds,
        wind: current?.wind_speed,
        time: new Date(current?.dt * 1000).toLocaleTimeString(),
        longitude,
        latitude
      };

      setWeatherData(updateWeatherData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
    setLoading({
      state: true,
      message: "Fetching location..."
    });

    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return { weatherData, loading, error };
};

export default useWeather;
