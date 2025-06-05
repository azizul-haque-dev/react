import React from "react";
import { favouriteContext } from "../context/index";
import useLocalStorage from "../hooks/useLocalStorage";

function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
    setFavourites([...favourites, { latitude, longitude, location }]);
  };

  const removeFromFavourite = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    <favouriteContext.Provider
      value={{ favourites, removeFromFavourite, addToFavourite }}
    >
      {children}
    </favouriteContext.Provider>
  );
}

export default FavouriteProvider;
