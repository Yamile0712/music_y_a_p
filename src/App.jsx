import React from "react";

import { Home } from "./Pages/Home";
import { Favoritas } from "./Pages/Favoritas";
import { Catalogo } from "./Pages/Catalogo";
import { Crea } from "./Pages/Crea";
import "./App.css"
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export const App = () => {
  return (
   
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritas" element={<Favoritas />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/crea" element={<Crea />} />
      </Routes>
    </BrowserRouter>

  
  );
}
