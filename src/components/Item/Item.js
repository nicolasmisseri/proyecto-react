import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, description, img }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src={img} alt={description} />
          </div>
          <div className="card_title title-white">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
