import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart
          ? cart.map((prod) => (
              <ItemCart
                key={prod.product.id}
                id={prod.product.id}
                name={prod.product.name}
                description={prod.product.description}
                price={prod.product.price}
                img={prod.product.img}
              />
            ))
          : []}
      </div>

      <button onClick={() => clear()}>Borrar Todo</button>
    </div>
  );
};

export default Cart;
