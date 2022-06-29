import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import ContactForm from "../ContactForm/ContactForm";

const Cart = () => {
  const { cart, clear, getTotalPrice } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    const response = { name, email, phone };
    console.log("response", response);
    return response;
  };

  const createOrder = () => {
    console.log("ORDEN GENERADA");

    const objOrder = {
      buyer: {
        name: { name },
        email: { email },
        phone: { phone },
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
      <ContactForm
        name={name}
        email={email}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
      />
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
        <button
          onClick={() => {
            createOrder();
            handleSubmit();
          }}
        >
          Generar Orden
        </button>
      )}

      {/* <ContactForm
        name={name}
        email={email}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
      /> */}
    </div>
  );
};

export default Cart;
