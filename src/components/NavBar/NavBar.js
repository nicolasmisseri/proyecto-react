import "./NavBar.css";

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
            <img src="./logo192.png" alt="imagen del logo" /> 2
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
