import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/index";

const useWeather = () => {
  const { selectedLocation } = useContext(LocationContext);

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

      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) {
        throw new Error(`Fetching weather data failed: ${res.status}`);
      }

      const data = await res.json();

      setWeatherData({
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude,
        latitude
      });
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

    if (selectedLocation?.latitude && selectedLocation?.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          setError("Geolocation permission denied or unavailable.");
          setLoading({ state: false, message: "" });
        }
      );
    }
  }, [selectedLocation]);

  return { weatherData, loading, error };
};

export default useWeather;
