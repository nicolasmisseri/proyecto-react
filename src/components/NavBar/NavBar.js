import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link className="item-menu" to={"/"}>
              BasketStore
            </Link>
          </li>
          <li>
            <Link className="item-menu" to={`/category/pelotas`}>
              Pelotas
            </Link>
          </li>
          <li>
            <Link className="item-menu" to={`/category/zapatillas`}>
              Zapatillas
            </Link>
          </li>
          <li>
            <Link className="item-menu" to={`/category/aros`}>
              Aros
            </Link>
          </li>
          <li className="">
            <Link to={"./cart"} style={{ textDecoration: 'none', color:"black" }}>
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
