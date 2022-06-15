import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity, cart } = useContext(CartContext);
  const quantity = getQuantity();
  return (
    <div>
      {cart.length >= 1 && (
        <div>
          <img src="../images/cartWidget.svg" alt="cart-widget" />
          {quantity}
        </div>
      )}
    </div>
  );
};
export default CartWidget;
