import React from "react";
// eslint-disable-next-line no-unused-vars
import { weatherContext } from "../context/index";
import useWeather from "../hooks/useWeather";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWeather();
  return (
    <weatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </weatherContext.Provider>
  );
}
