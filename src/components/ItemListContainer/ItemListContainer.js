import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../data/asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props, saludo) => {
  const [products, setProducts] = useState([]);

  const { param } = useParams();
  console.log("useparam!!", param);
  console.log("locationn", window.location.pathname.split("/")[1]);
  const ruta = window.location.pathname.split("/")[1];
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    if (ruta === "category") {
      console.log("este es el id", id);
      getProductsByCategory(id).then((response) => {
        setProducts(response);
      });

      console.log("estos son las categorias", products);
    } else {
      getProducts().then((response) => {
        setProducts(response);
      });
      console.log("estos son los productos", products);
    }
  }, [ruta, id]);

  return (
    <div className="ItemListContainer">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
