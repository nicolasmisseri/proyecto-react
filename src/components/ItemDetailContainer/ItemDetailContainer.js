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
      <div id="container">
        <div className="product-details">
          <h1>{product?.name}</h1>
          <p className="information">{product?.description}</p>
          <div className="control">
            <button className="btn">
              <span className="price">US$ {product?.price}</span>
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span className="buy">Comprar</span>
            </button>
          </div>
        </div>

        <div className="product-image">
          <img src={product?.img} alt={product?.description} />
        </div>
      </div>
      <ItemDetail {...product} />
      {/* <p>******************* Mostrar solo uno ********************</p>
      <Item key={products.id} {...products} />
      <CountFunction cantidad={5} />
      <p>*******************************************************</p> */}
    </div>
  );
};

export default ItemDetailContainer;
