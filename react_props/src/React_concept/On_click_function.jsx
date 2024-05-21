import PropTypes from "prop-types";
import "./styles.css";

const Foods = ({ items }) => {
  return (
    <ul className="list-group group">
      {items.map((item) => (
        <li className="list-group-item" key={item}>
          {item}
          <span
            className="btn btn-info buyBtn"
            onClick={() => console.log(`${item} bought`)}
          >
            Buy
          </span>
        </li>
      ))}
    </ul>
  );
};

Foods.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Foods;
