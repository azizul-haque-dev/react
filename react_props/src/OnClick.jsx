import Foods from "./React_concept/On_click_function";

function NewAPP() {
  const items = ["milk", "bread", "water", "juice"];
  return (
    <center>
      <h2 className="title mb-3"> Healthy Food</h2>
      <Foods items={items}></Foods>
    </center>
  );
}
export default NewAPP;
