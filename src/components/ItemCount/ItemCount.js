import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 0, initial = 1, handleOnAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // const handleClick = (num) => {
  //   addItem(num)
  // }
  return (
    <div className="container">
      <div className="col" role="group">
        <button type="button" className="btn btn-info" onClick={decrement}>
          -
        </button>

        <span>{quantity}</span>

        <button type="button" className="btn btn-info" onClick={increment}>
          +
        </button>
      </div>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          handleOnAdd(quantity);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
