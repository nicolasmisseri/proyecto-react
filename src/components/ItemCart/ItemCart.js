import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCart = ({ id, name, description, img, quantity }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{quantity}</p>

      <button
        onClick={() => removeItem({ id, name, description, img, quantity })}
      >
        X
      </button>
    </div>
  );
};

export default ItemCart;
