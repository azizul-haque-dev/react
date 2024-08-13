import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalContextProvider({ children }) {
  // Initialize `favourites` state directly from local storage
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const [search, setSearch] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data.data.recipes) {
        setRecipeList(data?.data?.recipes);
        setSearch("");
        setLoading(false);
        console.log({ recipeList });
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearch("");
    }
  }

  function toggleFavourite(currentItem) {
    const copyFavorite = [...favourites];
    const index = copyFavorite.findIndex((item) => item.id === currentItem.id);
    if (index === -1) {
      copyFavorite.push(currentItem);
    } else {
      copyFavorite.splice(index, 1);
    }
    setFavourites(copyFavorite);
    // Update local storage whenever favourites change
    localStorage.setItem("favourites", JSON.stringify(copyFavorite));
  }

  return (
    <GlobalContext.Provider
      value={{
        recipeList,
        loading,
        search,
        setSearch,
        fetchData,
        recipeDetails,
        setRecipeDetails,
        toggleFavourite,
        favourites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

export function useRecipes() {
  return useContext(GlobalContext);
}
