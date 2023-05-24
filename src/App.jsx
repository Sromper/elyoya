import { useState } from "react";
import { UserContext, user } from "./context/user";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import "./App.css";
import AddEquipoPost from "./components/AddEquipoPost";
import MostrarEquipos from "./components/MostrarEquipos";
import UpdateJson from './components/UpdateJson'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/update/:id" Component={UpdateJson} />
        <Route path="/show" Component={MostrarEquipos} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
