import FoodItems from "./Component/FoodItem.jsx";
import ErrorMsg from "./Component/ErrorMsg.jsx";
function App() {
  const items = ["milk", "bread", "water", "juice"];
  return (
    <>
      <h2 className="title mb-3"> Healthy Food</h2>
      <ErrorMsg items={items}></ErrorMsg>
      <FoodItems items={items}></FoodItems>
    </>
  );
}

export default App;
