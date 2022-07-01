import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import ContactForm from "../ContactForm/ContactForm";
import swal from "sweetalert";

const Cart = () => {
  const { cart, clear, getTotalPrice } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const response = { name, email, phone };
    return response;
  };

  const createOrder = () => {
    const objOrder = {
      buyer: {
        name,
        email,
        phone,
      },
      items: cart,
      total: getTotalPrice(),
    };

    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, objOrder).then(({ id }) => {});
  };
  const productsInCart = cart.length === 0;
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <h3>Productos seleccionados:</h3>
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
            </div>
          ))
        ) : (
          []
        )}
      </div>
      <div className="alert alert-info" role="alert">
        EL TOTAL DE LA COMPRA ES DE ${getTotalPrice()}
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => clear()}
        >
          Borrar Todo
        </button>
        {!productsInCart && (
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              createOrder();
              handleSubmit();
              swal({
                title: "Perfecto!",
                text: "Tu orden fue creada con éxito",
                icon: "success",
                button: "OK",
              });
            }}
          >
            Generar Orden
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
