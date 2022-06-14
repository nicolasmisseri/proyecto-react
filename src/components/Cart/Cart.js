import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, clear, getTotalPrice } = useContext(CartContext);
  const productsInCart = cart.length === 0;
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {productsInCart ? (
          <>
            <div> NO SE HAN AGREGADO ELEMENTOS AL CARRITO</div>
            <Link to={"/"}> Ir a la Home </Link>
          </>
        ) : cart ? (
          cart.map((prod) => (
            <div key={prod.product.id}>
              <ItemCart
                id={prod.product.id}
                name={prod.product.name}
                description={prod.product.description}
                price={prod.product.price}
                img={prod.product.img}
                quantity={prod.product.quantity}
              />
              <p>EL TOTAL DE LA COMPRA ES DE ${getTotalPrice()} </p>
            </div>
          ))
        ) : (
          []
        )}
      </div>

      <button onClick={() => clear()}>Borrar Todo</button>
      {!productsInCart && <button>Terminar mi Compra</button>}
    </div>
  );
};

export default Cart;
