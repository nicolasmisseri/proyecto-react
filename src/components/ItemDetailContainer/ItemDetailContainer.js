import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../data/asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  console.log(product);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getProductsById(id).then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
