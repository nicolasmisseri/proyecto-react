import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../data/arrayLibros";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div className="ItemListContainer">
      {/* {products.map((product) => (
        <p key={product.ID}>{product.title}</p>
      ))} */}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
