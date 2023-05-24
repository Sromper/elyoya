import React, { useState } from "react";
import { Routes, Route, useParams,useNavigate } from "react-router-dom";
import { axiosPut } from "../api/getCharacters";


function UpdateJson() {
  const [equipo, setEquipo] = useState("");
  const [pais, setPais] = useState("");
  const navigate=useNavigate()
  const { id } = useParams();

  const handleEquipoChange = (e) => {
    setEquipo(e.target.value);
  };
  const handlePaisChange = (e) => {
    setPais(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = {
      equipo: equipo,
      pais: pais,
    };

    axiosPut(datos, id).then((data) => {
      console.log("sisis");
      navigate("/show")
    });
    console.log(datos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEquipoChange} />
        <input type="text" onChange={handlePaisChange} />
        <button type="submit">Enviar</button>
      </form>
      <div> {id}</div>
    </div>
  );
}

export default UpdateJson;
