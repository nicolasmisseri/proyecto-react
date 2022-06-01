import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <span>BasketStore</span>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/a"}>Productos</Link>
          </li>
          <li>
            <Link to={"/a"}>About</Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
