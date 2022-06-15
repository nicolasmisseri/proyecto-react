import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProductsById } from "../data/asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", id))
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
