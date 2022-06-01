import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import CountFuncton from "./components/CountFunction/CountFunction";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <CountFuncton cantidad={5} /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          {/* <ItemListContainer /> */}
          <Route path="/a" element={<ItemDetailContainer />} />
          {/* <ItemDetailContainer /> */}
          <Route path="*" element={<h1>PAGE 404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
