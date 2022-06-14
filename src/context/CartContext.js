import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (product, count) => {
    let cartProduct = { product, count };
    let cartAux = [];
    if (isInCart(product)) {
      cartProduct = cart.find((item) => item.product.id === product.id);
      cartProduct.product.quantity += count;
      cartAux = [...cart];
    } else {
      cartAux = [cartProduct, ...cart];
    }
    setCart(cartAux);
  };

  const getQuantity = () => {
    let accu = 0;
    cart.forEach((prod) => {
      accu += prod.product.quantity;
    });
    return accu;
  };
  const getTotalPrice = () => {
    let accu = 0;
    cart.forEach((prod) => {
      accu += parseInt(prod.product.price * prod.product.quantity);
    });
    return accu;
  };
  const removeItem = (product) => {
    if (isInCart(product)) {
      const cartAux = cart.filter((item) => item.product.id !== product.id);
      setCart(cartAux);
    }
  };

  const isInCart = (product) => {
    return cart && cart.some((item) => item.product.id === product.id);
  };

  const clear = () => {
    setCart([]);
  };

  const value = {
    cart,
    setCart,
    getQuantity,
    addItem,
    removeItem,
    clear,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
