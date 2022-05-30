import { useState, useEffect } from "react";
import CountFunction from "../CountFunction/CountFunction";
import { getProducts } from "../data/arrayLibros";
import Item from "../Item/Item";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <p>******************* Mostrar solo uno ********************</p>
      <Item key={products[1].ID} {...products[1]} />
      <CountFunction cantidad={5} />
      <p>*******************************************************</p>
    </div>
  );
};

export default ItemDetailContainer;
