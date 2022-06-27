import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import ContactForm from "../ContactForm/ContactForm";

const Cart = () => {
  const { cart, clear, getTotalPrice } = useContext(CartContext);

  const createOrder = () => {
    console.log("ORDEN GENERADA");

    const objOrder = {
      buyer: {
        name: "Nicolas Misseri",
        email: "nicomissseri1@gmail.com",
        phone: "2215468807",
      },
      items: cart,
      total: getTotalPrice(),
    };
    console.log(objOrder);

    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, objOrder).then(({ id }) => {
      console.log(`se creo la orden con el id ${id}`);
    });
  };
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
      {!productsInCart && (
        <button onClick={createOrder}>
          {" "}
          <Link to={"/contactForm"}>Generar Orden</Link>
        </button>
      )}

      <ContactForm />
    </div>
  );
};

export default Cart;
