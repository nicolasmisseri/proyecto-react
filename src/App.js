import NavBar from "./components/NavBar/NavBar";
import CountFuncton from "./components/CountFunction/CountFunction";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountFuncton cantidad={5} />
      <ItemListContainer greeting="Comienza el E-commerce" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
