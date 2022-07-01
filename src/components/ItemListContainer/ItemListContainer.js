import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const collectionRef = category
      ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((error) => {});
  }, [category]);

  return (
    <div className="ItemListContainer">
      <h1>{category?.toUpperCase() || "Productos"}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
