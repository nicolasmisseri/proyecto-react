import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Productos</button>
          </li>
          <li>
            <button>Nosotros</button>
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
