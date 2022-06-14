import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../data/asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getProductsByCategory(id).then((response) => {
        setProducts(response);
      });
    } else {
      getProducts().then((response) => {
        setProducts(response);
      });
    }
  }, [id]);

  return (
    <div className="ItemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
