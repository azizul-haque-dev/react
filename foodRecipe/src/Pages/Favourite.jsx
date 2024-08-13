import RecipeItem from "../Component/RecipeItem";
import { useRecipes } from "../Context/GlobalContext";
function Favourite() {
  const { favourites } = useRecipes();

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-5">
      {favourites && favourites.length > 0 ? (
        favourites.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div className="flex justify-center text-2xl font-bold">
          Nothing Added on Favourite.
        </div>
      )}
    </div>
  );
}

export default Favourite;
