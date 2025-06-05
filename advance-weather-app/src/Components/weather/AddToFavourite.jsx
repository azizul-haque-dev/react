import React, { useEffect, useState } from "react";
import HeartRed from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { useFavouriteContext, useWeatherContext } from "../../provider/index";

function AddToFavourite() {
  const { favourites, removeFromFavourite, addToFavourite } =
    useFavouriteContext();
  const { weatherData } = useWeatherContext();
  const [isFavourite, setFavourite] = useState(false);

  useEffect(() => {
    const found = favourites.some(
      (fav) => fav.location === weatherData.location
    );
    setFavourite(found);
  }, [favourites, weatherData.location]);

  function handleFavourites() {
    if (isFavourite) {
      removeFromFavourite(weatherData.location);
    } else {
      addToFavourite(
        weatherData.latitude,
        weatherData.longitude,
        weatherData.location
      );
    }
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>
            {isFavourite ? "Remove from Favourite" : "Add to Favourite"}
          </span>
          <img src={isFavourite ? HeartRed : heart} alt="heart icon" />
        </button>
      </div>
    </div>
  );
}

export default React.memo(AddToFavourite);
