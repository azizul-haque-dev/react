import React from "react";
import { weatherContext } from "../context";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWeather();
  return (
    <weatherContext.Provider value={(weatherData, loading, error)}>
      {children}
    </weatherContext.Provider>
  );
}
