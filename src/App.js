import React from "react";
import { Routes, Route } from "react-router-dom";
import DispatchStore from "./DispatchStore";
import Inicio from "./Inicio";
import NavigationBar from "./NavigationBar";
import Contacto from "./Contacto";
import IniciarSesion from "./IniciarSesion";
import { useEffect } from "react";
import TalkChat from "./TalkChat";

const App = () => {
  <TalkChat />;

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<DispatchStore />} />
        <Route path="Inicio" element={<Inicio />} />
        <Route path="MiCuenta" element={<Contacto />} />
        <Route path="IniciarSesion" element={<IniciarSesion />} />
      </Routes>
    </>
  );
};

export default App;
