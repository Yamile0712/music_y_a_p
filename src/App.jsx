import React from "react";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Favoritas } from "./Pages/Favoritas";
import { Catalogo } from "./Pages/Catalogo";
import {Crea} from"./Pages/Crea";

export const App = () => {
  return (
    <>
      <Home />
      <Favoritas />
      <Catalogo />
      <Crea />

    </>
  );
}
