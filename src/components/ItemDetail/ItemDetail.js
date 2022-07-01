import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, name, description, price, img, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    addItem({ id, name, price, quantity }, quantity);
  };

  return (
    <div>
      <div id="container2">
        <div className="product-details">
          <h1>{name}</h1>
          <p className="information">{description}</p>
          <div className="control">
            <button className="boton">
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
          <Link to="/cart" style={{ textDecoration: 'none'}}>
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
