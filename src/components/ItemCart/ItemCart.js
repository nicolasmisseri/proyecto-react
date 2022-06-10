import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemCart = ({ id, name, description, img }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => removeItem({ id, name, description, img })}>
        X
      </button>
    </div>
  );
};

export default ItemCart;
