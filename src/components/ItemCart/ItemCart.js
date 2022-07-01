import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCart = ({ id, name, description, img, quantity }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div>
      <div className="alert alert-light" role="alert">
        <span>{`${name} x${quantity}`}</span>
        <button
          onClick={() => removeItem({ id, name, description, img, quantity })}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
