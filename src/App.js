import React, { createContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import ContactForm from "./components/ContactForm/ContactForm";

export const Context = createContext();

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>PAGE 404 NOT FOUND</h1>} />
            <Route path="/contactForm" element={<ContactForm />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
};

export default App;
