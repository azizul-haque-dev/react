import Item from "./Item.jsx";
import PropTypes from "prop-types";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default FoodItems;
