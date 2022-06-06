import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ name, description, price, img, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    console.log(quantity);
    setQuantity(quantity);
  };

  return (
    <div>
      <div id="container">
        <div className="product-details">
          <h1>{name}</h1>
          <p className="information">{description}</p>
          <div className="control">
            <button className="btn">
              <span className="price">US$ {price}</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span className="buy">Comprar</span>
            </button>
          </div>
        </div>

        <div className="product-image">
          <img src={img} alt={description} />
        </div>
      </div>
      <footer>
        {quantity > 0 ? (
          <Link to="/cart">
            <span>Finalizar Compra</span>
          </Link>
        ) : (
          <ItemCount stock={stock} handleOnAdd={handleOnAdd} />
        )}
      </footer>
    </div>
  );
};

export default ItemDetail;
