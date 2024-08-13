import RecipeItem from "../Component/RecipeItem";
import { useRecipes } from "../Context/GlobalContext";

function Home() {
  const { recipeList, loading } = useRecipes();

  if (loading) return <div>Data is loading....</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-5">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div className="flex justify-center text-2xl font-bold">
          Nothing to show. Please search Something
        </div>
      )}
    </div>
  );
}

export default Home;
