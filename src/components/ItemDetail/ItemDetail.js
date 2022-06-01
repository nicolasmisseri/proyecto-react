import "./ItemDetail.css";

const ItemDetail = (name, description, price, img) => {
  <div id="container">
    <div className="product-details">
      <h1>{name}</h1>
      <p className="information">{description}</p>
      <div className="control">
        <button className="btn">
          <span className="price">US$ {price}</span>
          <span className="shopping-cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <span className="buy">Comprar</span>
        </button>
      </div>
    </div>

    <div className="product-image">
      <img src={img} alt={description} />
    </div>
  </div>;
};

export default ItemDetail;
