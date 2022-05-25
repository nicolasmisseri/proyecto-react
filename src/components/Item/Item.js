import "./Item.css";

const Item = ({ id, title, author }) => {
  return (
    <div>
      <h3>Titulo: {title}</h3>
      <p>Autor: {author}</p>
    </div>
  );
};

export default Item;
