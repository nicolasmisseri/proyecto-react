import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  console.log("QUANTITY", getQuantity);
  const quantity = getQuantity();
  return (
    <div>
      <img src="./images/cartWidget.svg" alt="cart-widget" />
      {quantity}
    </div>
  );
};
export default CartWidget;

