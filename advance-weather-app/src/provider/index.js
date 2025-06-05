import { useContext } from "react";
import { favouriteContext, weatherContext } from "../context/index";

export function useWeatherContext() {
  return useContext(weatherContext);
}
export function useFavouriteContext() {
  return useContext(favouriteContext);
}
