import React, { useEffect, useState } from "react";
import axios from "axios";
import MostrarEquipos from "./MostrarEquipos";
function AddEquipoPost() {
  const [equipo, setNombre] = useState("");
  const [pais, setCorreo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/equipos", {
        equipo,
        pais,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeNombre = (event) => {
    const value = event.target.value;
    setNombre(value);
  };

  const handleChangeCorreo = (event) => {
    const value = event.target.value;
    setCorreo(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeNombre} placeholder="Equipo" />
        <input type="text" onChange={handleChangeCorreo} placeholder="Pais" />
        <button>Enviar</button>
      </form>

      <MostrarEquipos equipo={equipo} />
    </div>
  );
}

export default AddEquipoPost;
