import { useState } from "react";

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

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <h4>{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => handleOnAdd(quantity)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
